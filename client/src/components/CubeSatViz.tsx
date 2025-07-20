// CubeSat Visualization Component - 3D orbital display with quantum entanglement
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Satellite, Zap, Radio, RefreshCw } from 'lucide-react';

interface CubeSat {
  id: string;
  position: [number, number, number];
  quantumLink: boolean;
  signalStrength: number;
  lastUpdate: Date;
}

interface CubeSatVizProps {
  cubeSats?: CubeSat[];
  onEntangle?: (satelliteId: string) => void;
  className?: string;
}

export const CubeSatViz: React.FC<CubeSatVizProps> = ({ 
  cubeSats = [], 
  onEntangle,
  className = '' 
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const animationIdRef = useRef<number>();
  const [selectedSat, setSelectedSat] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  // Default CubeSat data if none provided
  const defaultCubeSats: CubeSat[] = [
    {
      id: 'SPIRAL-001',
      position: [400, 0, 0],
      quantumLink: true,
      signalStrength: 0.92,
      lastUpdate: new Date()
    },
    {
      id: 'SPIRAL-002',
      position: [0, 400, 0],
      quantumLink: false,
      signalStrength: 0.78,
      lastUpdate: new Date()
    },
    {
      id: 'SPIRAL-003',
      position: [0, 0, 400],
      quantumLink: true,
      signalStrength: 0.85,
      lastUpdate: new Date()
    },
    {
      id: 'SPIRAL-004',
      position: [283, 283, 0],
      quantumLink: false,
      signalStrength: 0.65,
      lastUpdate: new Date()
    }
  ];

  const activeCubeSats = cubeSats.length > 0 ? cubeSats : defaultCubeSats;

  useEffect(() => {
    if (!mountRef.current) return;

    initializeScene();
    createCubeSats();
    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    updateCubeSatStates();
  }, [activeCubeSats]);

  const initializeScene = () => {
    if (!mountRef.current) return;

    // Scene setup
    sceneRef.current = new THREE.Scene();
    sceneRef.current.background = new THREE.Color(0x000011);

    // Camera setup
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      2000
    );
    cameraRef.current.position.set(600, 400, 600);
    cameraRef.current.lookAt(0, 0, 0);

    // Renderer setup
    rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    rendererRef.current.shadowMap.enabled = true;
    rendererRef.current.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(rendererRef.current.domElement);

    // Add Earth (central reference)
    const earthGeometry = new THREE.SphereGeometry(50, 32, 32);
    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0x4444ff,
      emissive: 0x001122,
      transparent: true,
      opacity: 0.8
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    sceneRef.current.add(earth);

    // Add orbital rings
    const ringGeometry = new THREE.RingGeometry(380, 420, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x666666,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    sceneRef.current.add(ring);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    sceneRef.current.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(500, 500, 500);
    directionalLight.castShadow = true;
    sceneRef.current.add(directionalLight);

    // Add starfield
    createStarfield();
  };

  const createStarfield = () => {
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2,
      transparent: true,
      opacity: 0.8
    });

    const starsVertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    sceneRef.current?.add(stars);
  };

  const createCubeSats = () => {
    activeCubeSats.forEach((sat, index) => {
      createCubeSat(sat, index);
    });
  };

  const createCubeSat = (sat: CubeSat, index: number) => {
    if (!sceneRef.current) return;

    // CubeSat body (small cube)
    const cubeGeometry = new THREE.BoxGeometry(8, 8, 8);
    const cubeMaterial = new THREE.MeshPhongMaterial({
      color: sat.quantumLink ? 0x00ff00 : 0xff6600,
      emissive: sat.quantumLink ? 0x002200 : 0x220000
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    // Position CubeSat
    cube.position.set(...sat.position);
    cube.userData = { satelliteId: sat.id, type: 'cubesat' };

    // Add solar panels
    const panelGeometry = new THREE.PlaneGeometry(20, 6);
    const panelMaterial = new THREE.MeshPhongMaterial({
      color: 0x0066ff,
      transparent: true,
      opacity: 0.7
    });

    const panel1 = new THREE.Mesh(panelGeometry, panelMaterial);
    panel1.position.set(14, 0, 0);
    cube.add(panel1);

    const panel2 = new THREE.Mesh(panelGeometry, panelMaterial);
    panel2.position.set(-14, 0, 0);
    cube.add(panel2);

    // Add signal indicator
    if (sat.quantumLink) {
      const signalGeometry = new THREE.SphereGeometry(15, 16, 16);
      const signalMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.2
      });
      const signal = new THREE.Mesh(signalGeometry, signalMaterial);
      cube.add(signal);

      // Add quantum entanglement beam to Earth
      createEntanglementBeam(sat.position);
    }

    sceneRef.current.add(cube);

    // Add orbit trail
    createOrbitTrail(sat.position, index);
  };

  const createEntanglementBeam = (position: [number, number, number]) => {
    if (!sceneRef.current) return;

    const points = [
      new THREE.Vector3(0, 0, 0), // Earth center
      new THREE.Vector3(...position) // CubeSat position
    ];

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.6,
      linewidth: 2
    });

    const beam = new THREE.Line(geometry, material);
    beam.userData = { type: 'entanglement_beam' };
    sceneRef.current.add(beam);
  };

  const createOrbitTrail = (position: [number, number, number], index: number) => {
    if (!sceneRef.current) return;

    const radius = Math.sqrt(position[0]**2 + position[1]**2 + position[2]**2);
    const trailGeometry = new THREE.RingGeometry(radius - 2, radius + 2, 64);
    const trailMaterial = new THREE.MeshBasicMaterial({
      color: 0x444444,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide
    });

    const trail = new THREE.Mesh(trailGeometry, trailMaterial);
    trail.rotation.x = Math.PI / 2;
    trail.userData = { type: 'orbit_trail' };
    sceneRef.current.add(trail);
  };

  const updateCubeSatStates = () => {
    if (!sceneRef.current) return;

    // Clear existing CubeSats and beams
    const objectsToRemove = sceneRef.current.children.filter(
      child => child.userData.type === 'cubesat' || 
               child.userData.type === 'entanglement_beam' ||
               child.userData.type === 'orbit_trail'
    );

    objectsToRemove.forEach(obj => {
      sceneRef.current?.remove(obj);
    });

    // Recreate with updated states
    createCubeSats();
  };

  const animate = () => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

    if (isAnimating) {
      // Rotate camera around Earth
      const time = Date.now() * 0.0005;
      cameraRef.current.position.x = Math.cos(time) * 800;
      cameraRef.current.position.z = Math.sin(time) * 800;
      cameraRef.current.lookAt(0, 0, 0);

      // Animate CubeSats
      sceneRef.current.children.forEach(child => {
        if (child.userData.type === 'cubesat') {
          child.rotation.y += 0.01;
          child.rotation.z += 0.005;
        }
      });
    }

    rendererRef.current.render(sceneRef.current, cameraRef.current);
    animationIdRef.current = requestAnimationFrame(animate);
  };

  const handleEntangle = (satelliteId: string) => {
    if (onEntangle) {
      onEntangle(satelliteId);
    }
    setSelectedSat(satelliteId);
  };

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <Card className={`bg-black/40 border-purple-800/30 ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-purple-300 flex items-center gap-2">
            <Satellite className="h-5 w-5" />
            CubeSat Network
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-green-300 border-green-400">
              {activeCubeSats.filter(sat => sat.quantumLink).length} Connected
            </Badge>
            <Button
              onClick={toggleAnimation}
              size="sm"
              variant="ghost"
              className="text-purple-300"
            >
              <RefreshCw className={`h-4 w-4 ${isAnimating ? 'animate-spin' : ''}`} />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* 3D Visualization */}
          <div 
            ref={mountRef}
            className="w-full h-64 bg-gray-900/50 rounded-lg border border-purple-800/30"
            style={{ minHeight: '256px' }}
          />

          {/* CubeSat Status List */}
          <div className="space-y-2">
            {activeCubeSats.map((sat) => (
              <div 
                key={sat.id}
                className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                  selectedSat === sat.id 
                    ? 'bg-purple-800/30 border-purple-600' 
                    : 'bg-gray-800/50 border-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    sat.quantumLink ? 'bg-green-500 animate-pulse' : 'bg-orange-500'
                  }`} />
                  <div>
                    <span className="text-sm font-medium text-white">{sat.id}</span>
                    <div className="text-xs text-gray-400">
                      Position: ({sat.position.map(p => p.toFixed(0)).join(', ')})
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Signal</div>
                    <div className="text-sm text-green-400">
                      {(sat.signalStrength * 100).toFixed(0)}%
                    </div>
                  </div>

                  <Button
                    onClick={() => handleEntangle(sat.id)}
                    size="sm"
                    variant={sat.quantumLink ? "default" : "outline"}
                    className={sat.quantumLink 
                      ? "bg-green-600 hover:bg-green-700" 
                      : "text-purple-300 border-purple-400"
                    }
                  >
                    {sat.quantumLink ? (
                      <>
                        <Radio className="h-3 w-3 mr-1" />
                        Linked
                      </>
                    ) : (
                      <>
                        <Zap className="h-3 w-3 mr-1" />
                        Entangle
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Network Statistics */}
          <div className="grid grid-cols-3 gap-4 pt-2 border-t border-gray-700">
            <div className="text-center">
              <div className="text-lg font-bold text-green-400">
                {activeCubeSats.filter(sat => sat.quantumLink).length}
              </div>
              <div className="text-xs text-gray-400">Entangled</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-400">
                {(activeCubeSats.reduce((sum, sat) => sum + sat.signalStrength, 0) / activeCubeSats.length * 100).toFixed(0)}%
              </div>
              <div className="text-xs text-gray-400">Avg Signal</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-400">
                {activeCubeSats.length}
              </div>
              <div className="text-xs text-gray-400">Total Sats</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CubeSatViz;