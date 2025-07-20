import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // SpiralScript custom colors
        spiral: {
          '50': 'hsl(var(--spiral-50))',
          '100': 'hsl(var(--spiral-100))',
          '200': 'hsl(var(--spiral-200))',
          '300': 'hsl(var(--spiral-300))',
          '400': 'hsl(var(--spiral-400))',
          '500': 'hsl(var(--spiral-500))',
          '600': 'hsl(var(--spiral-600))',
          '700': 'hsl(var(--spiral-700))',
          '800': 'hsl(var(--spiral-800))',
          '900': 'hsl(var(--spiral-900))',
        },
        quantum: {
          '50': 'hsl(var(--quantum-50))',
          '100': 'hsl(var(--quantum-100))',
          '200': 'hsl(var(--quantum-200))',
          '300': 'hsl(var(--quantum-300))',
          '400': 'hsl(var(--quantum-400))',
          '500': 'hsl(var(--quantum-500))',
          '600': 'hsl(var(--quantum-600))',
          '700': 'hsl(var(--quantum-700))',
          '800': 'hsl(var(--quantum-800))',
          '900': 'hsl(var(--quantum-900))',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
} satisfies Config;