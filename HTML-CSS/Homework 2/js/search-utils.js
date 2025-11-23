// Search and Filter utilities for the periodic table

class PeriodicTableSearch {
    constructor() {
        this.allElements = elements;
        this.searchResults = [];
    }

    // Search elements by name
    searchByName(query) {
        if (!query) return this.allElements;
        const q = query.toLowerCase();
        return this.allElements.filter(e => 
            e.name.toLowerCase().includes(q) || 
            e.symbol.toLowerCase().includes(q)
        );
    }

    // Filter by category
    filterByCategory(category) {
        return this.allElements.filter(e => e.category === category);
    }

    // Filter by atomic number range
    filterByAtomicRange(min, max) {
        return this.allElements.filter(e => 
            e.atomicNumber >= min && e.atomicNumber <= max
        );
    }

    // Filter by mass range
    filterByMassRange(min, max) {
        return this.allElements.filter(e => 
            e.mass >= min && e.mass <= max
        );
    }

    // Get all unique categories
    getCategories() {
        return [...new Set(this.allElements.map(e => e.category))];
    }

    // Get elements by period (row)
    getElementsByPeriod(period) {
        return this.allElements.filter(e => e.period === period);
    }

    // Get elements by group (column)
    getElementsByGroup(group) {
        return this.allElements.filter(e => e.group === group);
    }

    // Advanced search
    advancedSearch(criteria) {
        let results = this.allElements;

        if (criteria.name) {
            results = results.filter(e => 
                e.name.toLowerCase().includes(criteria.name.toLowerCase())
            );
        }

        if (criteria.symbol) {
            results = results.filter(e => 
                e.symbol.toLowerCase().includes(criteria.symbol.toLowerCase())
            );
        }

        if (criteria.category) {
            results = results.filter(e => e.category === criteria.category);
        }

        if (criteria.minAtomic !== undefined) {
            results = results.filter(e => e.atomicNumber >= criteria.minAtomic);
        }

        if (criteria.maxAtomic !== undefined) {
            results = results.filter(e => e.atomicNumber <= criteria.maxAtomic);
        }

        if (criteria.period) {
            results = results.filter(e => e.period === criteria.period);
        }

        if (criteria.group) {
            results = results.filter(e => e.group === criteria.group);
        }

        return results;
    }

    // Get element statistics
    getStatistics() {
        return {
            totalElements: this.allElements.length,
            byCategory: this.getCategoryStats(),
            byPeriod: this.getPeriodStats(),
            avgMass: this.getAverageMass(),
            minMass: Math.min(...this.allElements.map(e => e.mass)),
            maxMass: Math.max(...this.allElements.map(e => e.mass))
        };
    }

    getCategoryStats() {
        const stats = {};
        this.allElements.forEach(e => {
            stats[e.category] = (stats[e.category] || 0) + 1;
        });
        return stats;
    }

    getPeriodStats() {
        const stats = {};
        this.allElements.forEach(e => {
            stats[`Period ${e.period}`] = (stats[`Period ${e.period}`] || 0) + 1;
        });
        return stats;
    }

    getAverageMass() {
        const total = this.allElements.reduce((sum, e) => sum + e.mass, 0);
        return (total / this.allElements.length).toFixed(3);
    }

    // Find similar elements
    findSimilar(elementId) {
        const element = this.allElements.find(e => e.atomicNumber === elementId);
        if (!element) return [];

        return this.allElements.filter(e => 
            e.category === element.category && 
            e.atomicNumber !== elementId
        ).slice(0, 5);
    }

    // Highlights for quick facts
    getQuickFacts() {
        return {
            mostAbundant: this.allElements.find(e => e.atomicNumber === 8), // Oxygen
            lightest: this.allElements.find(e => e.atomicNumber === 1), // Hydrogen
            heaviest: this.allElements.find(e => e.atomicNumber === 118), // Oganesson
            rarest: this.allElements.find(e => e.atomicNumber === 87), // Francium
            mostUseful: this.allElements.find(e => e.atomicNumber === 6) // Carbon
        };
    }
}

// Utility function to format element data
function formatElementData(element) {
    return {
        ...element,
        massFormatted: element.mass.toFixed(3),
        categoryDisplay: element.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    };
}

// Create comparison between two elements
function compareElements(element1Id, element2Id) {
    const e1 = elements.find(e => e.atomicNumber === element1Id);
    const e2 = elements.find(e => e.atomicNumber === element2Id);

    if (!e1 || !e2) return null;

    return {
        element1: e1,
        element2: e2,
        comparison: {
            nameSame: e1.name === e2.name,
            symbolSame: e1.symbol === e2.symbol,
            categorySame: e1.category === e2.category,
            massRatio: (e1.mass / e2.mass).toFixed(2),
            atomicRatio: (e1.atomicNumber / e2.atomicNumber).toFixed(2),
            inSamePeriod: e1.period === e2.period,
            inSameGroup: e1.group === e2.group
        }
    };
}
