{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // patterns.js - Container patterns for acknowledgement/funding extraction\
\
const CONTAINER_PATTERNS = [\
    // Generic section with acknowledgement/funding class or id\
    /<section[^>]*(?:class|id)="[^"]*(?:acknowledgement?|acknowledgment|funding)[^"]*"[^>]*>([\\s\\S]*?)<\\/section>/gi,\
    \
    // Generic div with acknowledgement/funding class or id\
    /<div[^>]*(?:class|id)="[^"]*(?:acknowledgement?|acknowledgment|funding)[^"]*"[^>]*>([\\s\\S]*?)<\\/div>/gi,\
    \
    // Specific funding-statement class\
    /<div[^>]*class="[^"]*funding-statement[^"]*"[^>]*>([\\s\\S]*?)<\\/div>/gi,\
    \
    // Wiley-specific patterns (hlFld)\
    /<section[^>]*class="[^"]*(?:hlFld-Acknowledgements?|hlFld-Funding)[^"]*"[^>]*>([\\s\\S]*?)<\\/section>/gi,\
    \
    // Article header references container\
    /<div[^>]*class="[^"]*article-header__references-container[^"]*"[^>]*>([\\s\\S]*?)<\\/div>/gi,\
    \
    // Header note content\
    /<div[^>]*class="[^"]*header-note-content[^"]*"[^>]*>([\\s\\S]*?)<\\/div>/gi,\
    \
    // Paragraphs with funding-source spans (Optica pattern)\
    /<p[^>]*>[\\s\\S]*?<span[^>]*class="[^"]*funding-source[^"]*"[^>]*>[\\s\\S]*?<\\/span>[\\s\\S]*?<\\/p>/gi\
];\
\
// Export for use in main script\
// (In browser context, this will be available globally)}