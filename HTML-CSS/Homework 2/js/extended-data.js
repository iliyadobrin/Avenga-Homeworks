// Extended element details - Add more elements as needed
// This file can be merged with data.js or kept separate

const extendedElementDetails = {
    4: {
        symbol: 'Be',
        name: 'Beryllium',
        atomicNumber: 4,
        mass: 9.012,
        category: 'Metal',
        boilingPoint: '2471°C',
        meltingPoint: '1287°C',
        density: '1.85 g/cm³',
        discovery: 'Friedrich Wöhler & Antoine Bussy, 1828',
        uses: [
            'Aircraft and aerospace components',
            'X-ray tubes and windows',
            'Nuclear weapons components',
            'Medical instruments'
        ],
        description: 'Beryllium is one of the lightest structural metals with excellent strength-to-weight ratio. It has one of the highest melting points of all metals and is highly valued in aerospace and nuclear industries. Beryllium dust is toxic and requires careful handling.',
        electronConfiguration: '[He] 2s²'
    },
    7: {
        symbol: 'N',
        name: 'Nitrogen',
        atomicNumber: 7,
        mass: 14.007,
        category: 'Nonmetal',
        boilingPoint: '-195.8°C',
        meltingPoint: '-209.9°C',
        density: '0.967 g/L',
        discovery: 'Daniel Rutherford, 1772',
        uses: [
            'Fertilizer production (ammonia)',
            'Industrial explosives',
            'Cryogenic refrigeration',
            'Inert atmosphere for food preservation',
            'Steel and metal production'
        ],
        description: 'Nitrogen is a colorless, odorless gas that comprises about 78% of Earth\'s atmosphere. Despite being abundant in air, elemental nitrogen is relatively inert. It is essential for biological processes, forming the backbone of proteins and nucleic acids.',
        electronConfiguration: '[He] 2s² 2p³'
    },
    11: {
        symbol: 'Na',
        name: 'Sodium',
        atomicNumber: 11,
        mass: 22.990,
        category: 'Metal',
        boilingPoint: '883°C',
        meltingPoint: '97.72°C',
        density: '0.968 g/cm³',
        discovery: 'Humphry Davy, 1807',
        uses: [
            'Table salt (NaCl) in food',
            'Production of chemicals and glass',
            'Soap and detergent manufacturing',
            'Metal alloys and casting',
            'Biological function (nerve impulses)'
        ],
        description: 'Sodium is a highly reactive, soft metal that must be stored under oil or inert gas. It is essential for life, playing crucial roles in nerve impulses, muscle contractions, and maintaining fluid balance. Most sodium is obtained from salt extraction.',
        electronConfiguration: '[Ne] 3s¹'
    },
    14: {
        symbol: 'Si',
        name: 'Silicon',
        atomicNumber: 14,
        mass: 28.086,
        category: 'Nonmetal',
        boilingPoint: '3280°C',
        meltingPoint: '1414°C',
        density: '2.33 g/cm³',
        discovery: 'Jöns Jacob Berzelius, 1823',
        uses: [
            'Semiconductor and computer chips',
            'Solar panels and photovoltaic cells',
            'Glass production',
            'Concrete and building materials',
            'Lubricants and industrial compounds'
        ],
        description: 'Silicon is the second most abundant element in Earth\'s crust. It forms the basis of modern electronics and computing. Silicon dioxide (silica) is used to make glass, and silicon is fundamental to the semiconductor industry powering modern technology.',
        electronConfiguration: '[Ne] 3s² 3p²'
    },
    16: {
        symbol: 'S',
        name: 'Sulfur',
        atomicNumber: 16,
        mass: 32.065,
        category: 'Nonmetal',
        boilingPoint: '445°C',
        meltingPoint: '115.21°C',
        density: '2.06 g/cm³',
        discovery: 'Ancient (known since prehistoric times)',
        uses: [
            'Sulfuric acid production',
            'Vulcanization of rubber',
            'Fertilizer and pesticide production',
            'Food preservation (sulfites)',
            'Gunpowder and matches'
        ],
        description: 'Sulfur is a yellow nonmetal that occurs naturally and has been known since ancient times. It is essential for industrial chemistry, particularly in sulfuric acid production. Sulfur compounds play important roles in biological systems and are used in pharmaceuticals.',
        electronConfiguration: '[Ne] 3s² 3p⁴'
    },
    24: {
        symbol: 'Cr',
        name: 'Chromium',
        atomicNumber: 24,
        mass: 51.996,
        category: 'Transition Metal',
        boilingPoint: '2672°C',
        meltingPoint: '1875°C',
        density: '7.19 g/cm³',
        discovery: 'Louis Nicolas Vauquelin, 1797',
        uses: [
            'Stainless steel production',
            'Metal plating and chromium plating',
            'Pigments for paint and dyes',
            'Leather tanning',
            'Corrosion resistance and hardness'
        ],
        description: 'Chromium is a hard, silvery metal known for its corrosion resistance and hardness. It is the key component in stainless steel, making it invaluable in construction and manufacturing. Chromium compounds are used as pigments and in leather tanning.',
        electronConfiguration: '[Ar] 3d⁵ 4s¹'
    },
    29: {
        symbol: 'Cu',
        name: 'Copper',
        atomicNumber: 29,
        mass: 63.546,
        category: 'Transition Metal',
        boilingPoint: '2562°C',
        meltingPoint: '1084.62°C',
        density: '8.96 g/cm³',
        discovery: 'Ancient (known since prehistoric times)',
        uses: [
            'Electrical wiring and conductors',
            'Building construction (roofing)',
            'Plumbing and water pipes',
            'Electronics and circuit boards',
            'Jewelry and decorative items',
            'Fungicides and algaecides'
        ],
        description: 'Copper is one of the few metals that occurs naturally in pure form. It is an excellent conductor of electricity and heat, making it indispensable in electrical systems. Copper has a distinctive reddish color and has been used by humans for thousands of years.',
        electronConfiguration: '[Ar] 3d¹⁰ 4s¹'
    },
    47: {
        symbol: 'Ag',
        name: 'Silver',
        atomicNumber: 47,
        mass: 107.868,
        category: 'Transition Metal',
        boilingPoint: '2162°C',
        meltingPoint: '961.78°C',
        density: '10.49 g/cm³',
        discovery: 'Ancient (known since prehistoric times)',
        uses: [
            'Jewelry and decorative items',
            'Photography (film and compounds)',
            'Electronics and conductors',
            'Medical applications (antibacterial)',
            'Mirrors and reflective coatings',
            'Currency and investment'
        ],
        description: 'Silver is a precious metal known for its beauty, rarity, and durability. It is an excellent conductor of electricity and has antimicrobial properties. Silver has been valued by humans for millennia and continues to be important in jewelry, electronics, and photography.',
        electronConfiguration: '[Kr] 4d¹⁰ 5s¹'
    },
    50: {
        symbol: 'Sn',
        name: 'Tin',
        atomicNumber: 50,
        mass: 118.711,
        category: 'Metal',
        boilingPoint: '2602°C',
        meltingPoint: '231.93°C',
        density: '7.29 g/cm³',
        discovery: 'Ancient (known since prehistoric times)',
        uses: [
            'Bronze alloy (with copper)',
            'Tin cans and food preservation',
            'Solder for electronics',
            'Coating steel (tinplate)',
            'Compounds in polymers and textiles'
        ],
        description: 'Tin is a soft, silvery metal that has been used by humans since ancient times, primarily in bronze alloys. It is resistant to corrosion and is widely used in food packaging as tinplate. Tin compounds have various applications in industry and chemistry.',
        electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p²'
    },
    82: {
        symbol: 'Pb',
        name: 'Lead',
        atomicNumber: 82,
        mass: 207.200,
        category: 'Metal',
        boilingPoint: '1749°C',
        meltingPoint: '327.46°C',
        density: '11.34 g/cm³',
        discovery: 'Ancient (known since prehistoric times)',
        uses: [
            'Car batteries (lead-acid)',
            'Radiation shielding',
            'Roofing materials',
            'Solder and welding materials',
            'Pigments and glazes (limited due to toxicity)',
            'Weights and counterbalances'
        ],
        description: 'Lead is a heavy, soft, toxic metal. While it has been used for thousands of years, its toxicity is now well-established. Lead is primarily used in rechargeable batteries and radiation shielding. Historical use in paint and gasoline has been phased out in many countries.',
        electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²'
    }
};

// Merge extended details with main elementDetails if needed
function mergeElementDetails() {
    Object.assign(elementDetails, extendedElementDetails);
}
