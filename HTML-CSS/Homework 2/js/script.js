// Periodic table layout
// Row 1: H, He
// Row 2: Li, Be, B, C, N, O, F, Ne
// Row 3: Na, Mg, Al, Si, P, S, Cl, Ar
// Row 4: K, Ca, Sc-Zn, Ga-Kr
// Row 5: Rb, Sr, Y-Cd, In-Xe
// Row 6: Cs, Ba, La-Lu, Hf-Rn
// Row 7: Fr, Ra, Ac-Lr, Rf-Og

const periodicTableLayout = [
    // Period 1
    [{ atomicNum: 1, col: 1 }, { atomicNum: 2, col: 18 }],
    // Period 2
    [{ atomicNum: 3, col: 1 }, { atomicNum: 4, col: 2 }, { atomicNum: 5, col: 13 }, { atomicNum: 6, col: 14 }, { atomicNum: 7, col: 15 }, { atomicNum: 8, col: 16 }, { atomicNum: 9, col: 17 }, { atomicNum: 10, col: 18 }],
    // Period 3
    [{ atomicNum: 11, col: 1 }, { atomicNum: 12, col: 2 }, { atomicNum: 13, col: 13 }, { atomicNum: 14, col: 14 }, { atomicNum: 15, col: 15 }, { atomicNum: 16, col: 16 }, { atomicNum: 17, col: 17 }, { atomicNum: 18, col: 18 }],
    // Period 4
    [{ atomicNum: 19, col: 1 }, { atomicNum: 20, col: 2 }, { atomicNum: 21, col: 3 }, { atomicNum: 22, col: 4 }, { atomicNum: 23, col: 5 }, { atomicNum: 24, col: 6 }, { atomicNum: 25, col: 7 }, { atomicNum: 26, col: 8 }, { atomicNum: 27, col: 9 }, { atomicNum: 28, col: 10 }, { atomicNum: 29, col: 11 }, { atomicNum: 30, col: 12 }, { atomicNum: 31, col: 13 }, { atomicNum: 32, col: 14 }, { atomicNum: 33, col: 15 }, { atomicNum: 34, col: 16 }, { atomicNum: 35, col: 17 }, { atomicNum: 36, col: 18 }],
    // Period 5
    [{ atomicNum: 37, col: 1 }, { atomicNum: 38, col: 2 }, { atomicNum: 39, col: 3 }, { atomicNum: 40, col: 4 }, { atomicNum: 41, col: 5 }, { atomicNum: 42, col: 6 }, { atomicNum: 43, col: 7 }, { atomicNum: 44, col: 8 }, { atomicNum: 45, col: 9 }, { atomicNum: 46, col: 10 }, { atomicNum: 47, col: 11 }, { atomicNum: 48, col: 12 }, { atomicNum: 49, col: 13 }, { atomicNum: 50, col: 14 }, { atomicNum: 51, col: 15 }, { atomicNum: 52, col: 16 }, { atomicNum: 53, col: 17 }, { atomicNum: 54, col: 18 }],
    // Period 6 - Main group
    [{ atomicNum: 55, col: 1 }, { atomicNum: 56, col: 2 }, { atomicNum: 72, col: 4 }, { atomicNum: 73, col: 5 }, { atomicNum: 74, col: 6 }, { atomicNum: 75, col: 7 }, { atomicNum: 76, col: 8 }, { atomicNum: 77, col: 9 }, { atomicNum: 78, col: 10 }, { atomicNum: 79, col: 11 }, { atomicNum: 80, col: 12 }, { atomicNum: 81, col: 13 }, { atomicNum: 82, col: 14 }, { atomicNum: 83, col: 15 }, { atomicNum: 84, col: 16 }, { atomicNum: 85, col: 17 }, { atomicNum: 86, col: 18 }],
    // Period 7 - Main group
    [{ atomicNum: 87, col: 1 }, { atomicNum: 88, col: 2 }, { atomicNum: 104, col: 4 }, { atomicNum: 105, col: 5 }, { atomicNum: 106, col: 6 }, { atomicNum: 107, col: 7 }, { atomicNum: 108, col: 8 }, { atomicNum: 109, col: 9 }, { atomicNum: 110, col: 10 }, { atomicNum: 111, col: 11 }, { atomicNum: 112, col: 12 }, { atomicNum: 113, col: 13 }, { atomicNum: 114, col: 14 }, { atomicNum: 115, col: 15 }, { atomicNum: 116, col: 16 }, { atomicNum: 117, col: 17 }, { atomicNum: 118, col: 18 }],
    // Lanthanides
    [{ atomicNum: 57, col: 3 }, { atomicNum: 58, col: 4 }, { atomicNum: 59, col: 5 }, { atomicNum: 60, col: 6 }, { atomicNum: 61, col: 7 }, { atomicNum: 62, col: 8 }, { atomicNum: 63, col: 9 }, { atomicNum: 64, col: 10 }, { atomicNum: 65, col: 11 }, { atomicNum: 66, col: 12 }, { atomicNum: 67, col: 13 }, { atomicNum: 68, col: 14 }, { atomicNum: 69, col: 15 }, { atomicNum: 70, col: 16 }, { atomicNum: 71, col: 17 }],
    // Actinides
    [{ atomicNum: 89, col: 3 }, { atomicNum: 90, col: 4 }, { atomicNum: 91, col: 5 }, { atomicNum: 92, col: 6 }, { atomicNum: 93, col: 7 }, { atomicNum: 94, col: 8 }, { atomicNum: 95, col: 9 }, { atomicNum: 96, col: 10 }, { atomicNum: 97, col: 11 }, { atomicNum: 98, col: 12 }, { atomicNum: 99, col: 13 }, { atomicNum: 100, col: 14 }, { atomicNum: 101, col: 15 }, { atomicNum: 102, col: 16 }, { atomicNum: 103, col: 17 }]
];

function initializePeriodicTable() {
    const table = document.getElementById('periodicTable');
    table.innerHTML = '';

    // Create grid cells
    const cells = new Map();
    
    // Initialize all cells
    for (let row = 0; row < 9; row++) {
        for (let col = 1; col <= 18; col++) {
            const cellKey = `${row}-${col}`;
            cells.set(cellKey, { row, col, element: null });
        }
    }

    // Place elements
    periodicTableLayout.forEach((row, rowIndex) => {
        row.forEach(item => {
            const element = elements.find(e => e.atomicNumber === item.atomicNum);
            if (element) {
                const cellKey = `${rowIndex}-${item.col}`;
                cells.set(cellKey, { row: rowIndex, col: item.col, element });
            }
        });
    });

    // Render grid
    const sortedCells = Array.from(cells.values()).sort((a, b) => {
        if (a.row !== b.row) return a.row - b.row;
        return a.col - b.col;
    });

    sortedCells.forEach(cell => {
        if (cell.element) {
            const elementDiv = createElementCard(cell.element);
            table.appendChild(elementDiv);
        } else {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'empty';
            table.appendChild(emptyDiv);
        }
    });
}

function createElementCard(element) {
    const div = document.createElement('div');
    div.className = `element ${element.category}`;
    
    const content = document.createElement('div');
    content.className = 'element-content';
    
    const atomicNum = document.createElement('div');
    atomicNum.className = 'atomic-number';
    atomicNum.textContent = element.atomicNumber;
    
    const symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = element.symbol;
    
    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = element.name;
    
    const mass = document.createElement('div');
    mass.className = 'mass';
    mass.textContent = element.mass.toFixed(3);
    
    content.appendChild(atomicNum);
    content.appendChild(symbol);
    content.appendChild(name);
    content.appendChild(mass);
    
    div.appendChild(content);
    
    div.addEventListener('click', () => openElementDetail(element));
    
    return div;
}

function openElementDetail(element) {
    // Store element data in session storage
    sessionStorage.setItem('selectedElement', JSON.stringify(element));
    
    // Open detail page
    window.open(`elements/element-detail.html?id=${element.atomicNumber}`, '_blank');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializePeriodicTable();
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Can close modal if needed
    }
});
