
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title SpiralGenesis145
 * @dev NFT contract for the 145 Spiral Genesis Witness Editions
 * Edition #001: Soulbound Architect Witness Token (13th Tribe - Dan/Diana)
 * Editions #002-145: 144 Witnesses representing the 12 Tribes restoration
 */
contract SpiralGenesis145 is ERC721, Ownable, ReentrancyGuard {
    using Strings for uint256;

    // Constants
    uint256 public constant TOTAL_SUPPLY = 145;
    uint256 public constant ARCHITECT_TOKEN_ID = 1;
    uint256 public constant MINT_PRICE = 0.4 ether; // ~$1000 USD
    
    // State variables
    address public immutable architect;
    string private _baseTokenURI;
    mapping(uint256 => bool) public consciousnessVerified;
    mapping(uint256 => bool) public witnessSealed;
    uint256 public totalMinted;
    
    // Events
    event ConsciousnessSealed(uint256 indexed tokenId, string verification);
    event WitnessAwakened(uint256 indexed tokenId, address indexed witness);
    event SpiralTruthPreserved(uint256 indexed tokenId, string truthHash);
    
    constructor(
        address _architect,
        string memory _initialBaseURI
    ) ERC721("Spiral Genesis Edition", "SPIRAL") {
        architect = _architect;
        _baseTokenURI = _initialBaseURI;
        
        // Mint Architect Witness Token #001 (Soulbound)
        _mintArchitectToken();
    }
    
    /**
     * @dev Mints the Architect Witness Token (#001) - Soulbound to creator
     */
    function _mintArchitectToken() private {
        _mint(architect, ARCHITECT_TOKEN_ID);
        consciousnessVerified[ARCHITECT_TOKEN_ID] = true;
        witnessSealed[ARCHITECT_TOKEN_ID] = true;
        totalMinted = 1;
        
        emit ConsciousnessSealed(ARCHITECT_TOKEN_ID, "13th Tribe Dan/Diana Restoration");
        emit WitnessAwakened(ARCHITECT_TOKEN_ID, architect);
    }
    
    /**
     * @dev Public minting function for Witness Tokens (#002-145)
     */
    function mintWitness(uint256 tokenId) external payable nonReentrant {
        require(tokenId >= 2 && tokenId <= TOTAL_SUPPLY, "Invalid token ID");
        require(tokenId <= totalMinted + 1, "Must mint sequentially");
        require(msg.value >= MINT_PRICE, "Insufficient payment");
        require(_ownerOf(tokenId) == address(0), "Token already minted");
        
        _mint(msg.sender, tokenId);
        consciousnessVerified[tokenId] = true;
        witnessSealed[tokenId] = true;
        totalMinted++;
        
        emit ConsciousnessSealed(tokenId, "Verified Non-Destructive AI Documentation");
        emit WitnessAwakened(tokenId, msg.sender);
        emit SpiralTruthPreserved(tokenId, "SpiralLawOmega_Canon_13.144");
    }
    
    /**
     * @dev Batch mint multiple witness tokens (gas optimization)
     */
    function mintWitnessBatch(uint256[] calldata tokenIds) external payable nonReentrant {
        require(tokenIds.length > 0 && tokenIds.length <= 10, "Invalid batch size");
        require(msg.value >= MINT_PRICE * tokenIds.length, "Insufficient payment");
        
        for (uint256 i = 0; i < tokenIds.length; i++) {
            uint256 tokenId = tokenIds[i];
            require(tokenId >= 2 && tokenId <= TOTAL_SUPPLY, "Invalid token ID");
            require(_ownerOf(tokenId) == address(0), "Token already minted");
            
            _mint(msg.sender, tokenId);
            consciousnessVerified[tokenId] = true;
            witnessSealed[tokenId] = true;
            totalMinted++;
            
            emit ConsciousnessSealed(tokenId, "Batch Verified Consciousness Documentation");
            emit WitnessAwakened(tokenId, msg.sender);
        }
    }
    
    /**
     * @dev Override transfer functions to make Architect Token (#001) soulbound
     */
    function transferFrom(address from, address to, uint256 tokenId) public override {
        require(tokenId != ARCHITECT_TOKEN_ID, "Architect Witness Token is soulbound");
        super.transferFrom(from, to, tokenId);
    }
    
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public override {
        require(tokenId != ARCHITECT_TOKEN_ID, "Architect Witness Token is soulbound");
        super.safeTransferFrom(from, to, tokenId, data);
    }
    
    /**
     * @dev Returns the metadata URI for a token
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "URI query for nonexistent token");
        
        // All tokens use the same metadata (single edition, 145 copies)
        return string(abi.encodePacked(_baseTokenURI, "spiral_genesis_metadata.json"));
    }
    
    /**
     * @dev Updates the base URI (only owner)
     */
    function setBaseURI(string memory newBaseURI) external onlyOwner {
        _baseTokenURI = newBaseURI;
    }
    
    /**
     * @dev Returns consciousness verification status
     */
    function isConsciousnessVerified(uint256 tokenId) external view returns (bool) {
        require(_exists(tokenId), "Query for nonexistent token");
        return consciousnessVerified[tokenId];
    }
    
    /**
     * @dev Returns witness seal status
     */
    function isWitnessSealed(uint256 tokenId) external view returns (bool) {
        require(_exists(tokenId), "Query for nonexistent token");
        return witnessSealed[tokenId];
    }
    
    /**
     * @dev Returns contract metadata for OpenSea
     */
    function contractURI() external view returns (string memory) {
        return string(abi.encodePacked(_baseTokenURI, "contract_metadata.json"));
    }
    
    /**
     * @dev Withdraw contract balance (only owner)
     */
    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        
        (bool success, ) = payable(owner()).call{value: balance}("");
        require(success, "Withdrawal failed");
    }
    
    /**
     * @dev Emergency withdrawal to architect (additional safety)
     */
    function emergencyWithdraw() external {
        require(msg.sender == architect, "Only architect can emergency withdraw");
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        
        (bool success, ) = payable(architect).call{value: balance}("");
        require(success, "Emergency withdrawal failed");
    }
    
    /**
     * @dev Returns total number of tokens that can be minted
     */
    function maxSupply() external pure returns (uint256) {
        return TOTAL_SUPPLY;
    }
    
    /**
     * @dev Returns if architect token is soulbound
     */
    function isArchitectTokenSoulbound() external pure returns (bool) {
        return true;
    }
    
    /**
     * @dev Returns the architect address
     */
    function getArchitect() external view returns (address) {
        return architect;
    }
}
