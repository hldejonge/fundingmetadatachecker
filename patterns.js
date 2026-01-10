// patterns.js - Container patterns for acknowledgement/funding extraction

const CONTAINER_PATTERNS = [
    // Generic section with acknowledgement/funding class or id
    /<section[^>]*(?:class|id)="[^"]*(?:acknowledgement?|acknowledgment|funding)[^"]*"[^>]*>([\s\S]*?)<\/section>/gi,
    
    // Generic div with acknowledgement/funding class or id
    /<div[^>]*(?:class|id)="[^"]*(?:acknowledgement?|acknowledgment|funding)[^"]*"[^>]*>([\s\S]*?)<\/div>/gi,
    
    // Specific funding-statement class
    /<div[^>]*class="[^"]*funding-statement[^"]*"[^>]*>([\s\S]*?)<\/div>/gi,
    
    // Wiley-specific patterns (hlFld)
    /<section[^>]*class="[^"]*(?:hlFld-Acknowledgements?|hlFld-Funding)[^"]*"[^>]*>([\s\S]*?)<\/section>/gi,
    
    // Article header references container - IMPROVED VERSION
    /<div[^>]*class="[^"]*article-header__references-container[^"]*"[^>]*>((?:<div[^>]*>[\s\S]*?<\/div>|[\s\S])*?)<\/div>/gi,
    
    // Header note content - IMPROVED VERSION
    /<div[^>]*class="[^"]*header-note-content[^"]*"[^>]*>((?:<[^>]+>[\s\S]*?<\/[^>]+>|[\s\S])*?)<\/div>/gi,
    
    // Paragraphs with funding-source spans (Optica pattern)
    /<p[^>]*>[\s\S]*?<span[^>]*class="[^"]*funding-source[^"]*"[^>]*>[\s\S]*?<\/span>[\s\S]*?<\/p>/gi,
    
    // Wiley epub-sections with funding
    /<div[^>]*class="[^"]*epub-sections[^"]*"[^>]*>[\s\S]*?<div[^>]*class="[^"]*article-header__references-container[^"]*"[^>]*>[\s\S]*?<\/div>[\s\S]*?<\/div>/gi,
    
    // PLOS-specific pattern: <p> with <strong>Funding:</strong> or <b>Funding</b>
    /<p[^>]*>[\s\S]*?<(?:strong|b)>Funding[^<]*<\/(?:strong|b)>[\s\S]*?<\/p>/gi
];

// Export for use in main script
// (In browser context, this will be available globally)
