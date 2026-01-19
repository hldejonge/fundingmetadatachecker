// ============================================================================
// CONFIGURATION FILE
// ============================================================================
// This file contains sensitive API keys and configuration settings
// DO NOT commit this file to public repositories!

const CONFIG = {
    FIRECRAWL_API_KEY: 'fc-44469800c0b54f36ab956063ccbe100d',
    FIRECRAWL_API_URL: 'https://api.firecrawl.dev/v1/scrape',
    
    LOGGING_WEBHOOK: 'https://script.google.com/macros/s/AKfycbwGnmFu7J3c58_2CHso9_EDvDiqDjzzhDUHOZSJubrJSvNFDrvvCw-9gWJ32lyg1P8s/exec',
    ENABLE_LOGGING: true,
    
    CACHE_DURATION: 86400000, // 24 hours in milliseconds
    ERROR_CACHE_DURATION: 1800000, // 30 minutes for errors
    CACHE_PREFIX: 'fmc_'
};