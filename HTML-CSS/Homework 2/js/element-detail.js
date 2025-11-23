function displayElementDetail() {
    const params = new URLSearchParams(window.location.search);
    const elementId = parseInt(params.get('id'));
    
    const element = elements.find(e => e.atomicNumber === elementId);
    
    if (!element) {
        document.getElementById('detailContent').innerHTML = '<p>Element not found.</p>';
        return;
    }

    const detail = elementDetails[elementId] || generateDefaultDetail(element);
    
    const detailContent = document.getElementById('detailContent');
    detailContent.innerHTML = `
        <div class="element-hero ${element.category}">
            <div class="element-image">
                <div class="element-image-placeholder">
                    <div class="element-symbol-large">${element.symbol}</div>
                    <p style="text-align: center; color: #667eea; font-size: 1.2em;">
                        Atomic Number: ${element.atomicNumber}
                    </p>
                </div>
            </div>
            
            <div class="element-info-basic">
                <h2 style="color: #667eea; margin-bottom: 20px;">${detail.name}</h2>
                <div class="basic-info-item">
                    <span class="basic-info-label">Symbol:</span>
                    <span class="basic-info-value">${detail.symbol}</span>
                </div>
                <div class="basic-info-item">
                    <span class="basic-info-label">Atomic Number:</span>
                    <span class="basic-info-value">${detail.atomicNumber}</span>
                </div>
                <div class="basic-info-item">
                    <span class="basic-info-label">Atomic Mass:</span>
                    <span class="basic-info-value">${detail.mass} u</span>
                </div>
                <div class="basic-info-item">
                    <span class="basic-info-label">Category:</span>
                    <span class="basic-info-value">${detail.category}</span>
                </div>
                <div class="basic-info-item">
                    <span class="basic-info-label">Discovery:</span>
                    <span class="basic-info-value">${detail.discovery}</span>
                </div>
                ${detail.electronConfiguration ? `
                <div class="basic-info-item">
                    <span class="basic-info-label">Electron Config:</span>
                    <span class="basic-info-value" style="font-family: monospace; font-size: 0.9em;">${detail.electronConfiguration}</span>
                </div>
                ` : ''}
            </div>
        </div>

        <div class="element-description">
            <h3 style="margin-bottom: 15px; color: #333;">About ${detail.name}</h3>
            <p>${detail.description}</p>
        </div>

        <div class="properties-grid">
            <div class="property-card">
                <div class="property-label">Melting Point</div>
                <div class="property-value">${detail.meltingPoint}</div>
            </div>
            <div class="property-card">
                <div class="property-label">Boiling Point</div>
                <div class="property-value">${detail.boilingPoint}</div>
            </div>
            <div class="property-card">
                <div class="property-label">Density</div>
                <div class="property-value">${detail.density}</div>
            </div>
            <div class="property-card">
                <div class="property-label">Atomic Mass</div>
                <div class="property-value">${detail.mass}</div>
            </div>
        </div>

        ${detail.uses && detail.uses.length > 0 ? `
        <div class="uses-section">
            <h2>Common Uses and Applications</h2>
            <ul class="uses-list">
                ${detail.uses.map(use => `<li>${use}</li>`).join('')}
            </ul>
        </div>
        ` : ''}

        ${detail.electronConfiguration ? `
        <div class="electron-config">
            <div class="electron-config-label">Electron Configuration:</div>
            <div class="electron-config-value">${detail.electronConfiguration}</div>
        </div>
        ` : ''}

        <div style="background: #f0f4ff; padding: 20px; border-radius: 12px; margin-top: 30px; text-align: center;">
            <h3 style="color: #667eea; margin-bottom: 10px;">Additional Information</h3>
            <p style="color: #666;">Period: ${element.period} | Group: ${element.group} | Atomic Number: ${element.atomicNumber}</p>
            <p style="color: #999; font-size: 0.9em; margin-top: 10px;">Category: ${element.category.charAt(0).toUpperCase() + element.category.slice(1)}</p>
        </div>
    `;
}

function generateDefaultDetail(element) {
    const categoryNames = {
        'nonmetal': 'Nonmetal',
        'noble-gas': 'Noble Gas',
        'metal': 'Metal',
        'transition-metal': 'Transition Metal',
        'lanthanide': 'Lanthanide',
        'actinide': 'Actinide'
    };

    return {
        symbol: element.symbol,
        name: element.name,
        atomicNumber: element.atomicNumber,
        mass: element.mass,
        category: categoryNames[element.category] || element.category,
        boilingPoint: 'N/A',
        meltingPoint: 'N/A',
        density: 'N/A',
        discovery: 'Ancient or not specified',
        uses: [
            'Industrial applications',
            'Scientific research',
            'Manufacturing processes'
        ],
        description: `${element.name} (${element.symbol}) is element ${element.atomicNumber} on the periodic table with an atomic mass of ${element.mass}. It belongs to the ${categoryNames[element.category] || element.category} category. This element plays an important role in various chemical and industrial processes.`,
        electronConfiguration: 'N/A'
    };
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayElementDetail();
});

// Add print functionality
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        window.print();
    }
});
