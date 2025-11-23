// Configuration and Settings for the Periodic Table Website

const CONFIG = {
    // Application Settings
    app: {
        name: 'Interactive Periodic Table of Elements',
        version: '1.0',
        author: 'Chemistry Education',
        description: 'A comprehensive interactive periodic table with element details'
    },

    // Display Settings
    display: {
        gridColumns: 18,
        elementsPerRow: 18,
        enableAnimations: true,
        animationDuration: 0.3, // seconds
        hoverScale: 1.1,
        elementBorderRadius: 8 // pixels
    },

    // Color Scheme
    colors: {
        primary: '#667eea',
        secondary: '#764ba2',
        background: {
            gradient1: '#667eea',
            gradient2: '#764ba2',
            light: '#f8f9fa'
        },
        categories: {
            'nonmetal': '#90EE90',
            'noble-gas': '#FFB6C1',
            'metal': '#FFD700',
            'transition-metal': '#FFA500',
            'lanthanide': '#98FB98',
            'actinide': '#87CEEB'
        },
        text: {
            dark: '#333333',
            light: '#ffffff',
            muted: '#999999'
        }
    },

    // Layout Configuration
    layout: {
        maxWidth: 1400, // pixels
        minWidth: 320,
        paddingTop: 20,
        paddingBottom: 20,
        headerHeight: 200,
        legendHeight: 100,
        footerHeight: 80
    },

    // Periodic Table Settings
    periodicTable: {
        periods: 7,
        groups: 18,
        lanthanideStart: 57,
        lanthanideEnd: 71,
        actinideStart: 89,
        actinideEnd: 103,
        totalElements: 118
    },

    // Element Display Properties
    element: {
        showAtomicNumber: true,
        showSymbol: true,
        showName: true,
        showMass: true,
        truncateNameLength: 15,
        fontSize: {
            atomicNumber: 0.7,
            symbol: 1.8,
            name: 0.65,
            mass: 0.6
        }
    },

    // Detail Page Settings
    detailPage: {
        maxWidth: 1000,
        imageHeight: 300,
        gridColumns: 2, // for properties
        enablePrinting: true,
        enableSharing: false,
        showRelatedElements: true,
        relatedElementsCount: 5
    },

    // Animation Settings
    animations: {
        slideDownDuration: 0.6,
        slideUpDuration: 0.5,
        fadeInDuration: 0.4,
        hoverTransition: 0.3,
        clickTransition: 0.2,
        enableParticles: false
    },

    // Responsive Breakpoints
    responsive: {
        mobile: 768,      // < 768px
        tablet: 1024,     // 768px - 1024px
        desktop: 1200     // > 1200px
    },

    // Data Settings
    data: {
        dataSource: 'data.js',
        extendedDataSource: 'extended-data.js',
        cacheEnabled: true,
        cacheDuration: 3600 // seconds
    },

    // Performance Settings
    performance: {
        lazyLoadImages: true,
        enableServiceWorker: false,
        minifyAssets: false,
        compressionEnabled: false,
        cacheBustingEnabled: true
    },

    // Feature Flags
    features: {
        enableSearch: true,
        enableFilter: true,
        enableComparison: false,
        enableQuiz: false,
        enableBookmarks: false,
        enableDarkMode: false,
        enableMultiLanguage: false,
        enable3DModels: false
    },

    // API Endpoints (for future expansion)
    api: {
        baseUrl: '',
        endpoints: {
            elements: '/api/elements',
            elementDetail: '/api/elements/{id}',
            search: '/api/search'
        }
    },

    // Localization
    i18n: {
        defaultLanguage: 'en',
        supportedLanguages: ['en'],
        translations: {
            en: {
                title: 'Periodic Table of Elements',
                subtitle: 'Click on any element to learn more',
                backToTable: 'Back to Periodic Table',
                loading: 'Loading...',
                notFound: 'Element not found',
                category: 'Category',
                atomicNumber: 'Atomic Number',
                atomicMass: 'Atomic Mass',
                discovery: 'Discovery',
                uses: 'Common Uses and Applications',
                properties: 'Properties'
            }
        }
    },

    // Accessibility Settings
    accessibility: {
        enableHighContrast: false,
        enableScreenReaderSupport: true,
        enableKeyboardNavigation: true,
        minTouchTargetSize: 48, // pixels
        focusIndicatorWidth: 2 // pixels
    },

    // Debug Settings
    debug: {
        enabled: false,
        logConsole: false,
        showElementGrid: false,
        showPerformanceMetrics: false,
        showDataValidation: false
    }
};

// Helper function to get config value with fallback
function getConfig(path, defaultValue = null) {
    const keys = path.split('.');
    let value = CONFIG;
    
    for (let key of keys) {
        if (value && typeof value === 'object' && key in value) {
            value = value[key];
        } else {
            return defaultValue;
        }
    }
    
    return value;
}

// Helper function to set config value
function setConfig(path, value) {
    const keys = path.split('.');
    let obj = CONFIG;
    
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!(key in obj)) {
            obj[key] = {};
        }
        obj = obj[key];
    }
    
    obj[keys[keys.length - 1]] = value;
}

// Theme Manager
class ThemeManager {
    constructor(config) {
        this.config = config;
        this.currentTheme = 'light';
    }

    applyTheme(theme = 'light') {
        const root = document.documentElement;
        const colors = this.config.colors;

        root.style.setProperty('--primary-color', colors.primary);
        root.style.setProperty('--secondary-color', colors.secondary);
        
        if (theme === 'dark') {
            root.style.setProperty('--background-color', '#1a1a1a');
            root.style.setProperty('--text-color', '#ffffff');
            this.currentTheme = 'dark';
        } else {
            root.style.setProperty('--background-color', '#ffffff');
            root.style.setProperty('--text-color', '#333333');
            this.currentTheme = 'light';
        }
    }

    toggleTheme() {
        this.applyTheme(this.currentTheme === 'light' ? 'dark' : 'light');
    }
}

// Settings Manager
class SettingsManager {
    constructor(config) {
        this.config = config;
        this.localStoragePrefix = 'periodicTable_';
        this.loadSettings();
    }

    loadSettings() {
        const saved = localStorage.getItem(this.localStoragePrefix + 'settings');
        if (saved) {
            this.settings = JSON.parse(saved);
        } else {
            this.settings = this.getDefaultSettings();
        }
    }

    saveSettings() {
        localStorage.setItem(this.localStoragePrefix + 'settings', JSON.stringify(this.settings));
    }

    getDefaultSettings() {
        return {
            theme: 'light',
            language: 'en',
            enableAnimations: true,
            enableNotifications: true,
            fontSize: 'medium',
            highContrast: false
        };
    }

    getSetting(key) {
        return this.settings[key];
    }

    setSetting(key, value) {
        this.settings[key] = value;
        this.saveSettings();
    }

    resetSettings() {
        this.settings = this.getDefaultSettings();
        this.saveSettings();
    }
}

// Initialize configuration on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const themeManager = new ThemeManager(CONFIG);
        const settingsManager = new SettingsManager(CONFIG);
        
        // Apply saved theme
        themeManager.applyTheme(settingsManager.getSetting('theme'));
    });
} else {
    const themeManager = new ThemeManager(CONFIG);
    const settingsManager = new SettingsManager(CONFIG);
    themeManager.applyTheme(settingsManager.getSetting('theme'));
}
