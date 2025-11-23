# Interactive Periodic Table of Elements

A comprehensive, interactive website for exploring the periodic table with detailed information about each element.

## Features

- **Interactive Periodic Table**: Color-coded periodic table with all 118 elements
- **Element Details**: Click on any element to view detailed information in a new window
- **Atomic Information**: Displays atomic number, mass, category, and electron configuration
- **Element Properties**: Shows melting point, boiling point, density, and atomic mass
- **Discovery Information**: Learn about who discovered each element and when
- **Applications**: View common uses and applications of each element
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient backgrounds and smooth animations

## Project Structure

```
Домашно со Табела на Елементите/
├── index.html                 # Main periodic table page
├── css/
│   ├── style.css             # Periodic table styles
│   └── element-detail.css    # Element detail page styles
├── js/
│   ├── data.js               # Element data and database
│   ├── script.js             # Main periodic table script
│   └── element-detail.js     # Element detail page script
└── elements/
    └── element-detail.html   # Detail page template
```

## How to Use

1. **Open the Website**: Open `index.html` in your web browser
2. **View the Periodic Table**: The main page displays all 118 elements arranged in the standard periodic table layout
3. **Click on an Element**: Click any element card to open a detailed information page
4. **Read Information**: View the element's properties, uses, and other details
5. **Return to Table**: Use the "Back to Periodic Table" link to return to the main view

## Element Categories

The elements are color-coded by category:

- **Green** - Nonmetals
- **Pink** - Noble Gases
- **Yellow** - Metals
- **Orange** - Transition Metals
- **Light Green** - Lanthanides
- **Light Blue** - Actinides

## Information Included for Each Element

- Atomic Number
- Chemical Symbol
- Element Name
- Atomic Mass
- Category/Classification
- Melting Point
- Boiling Point
- Density
- Discovery (Name and Year)
- Common Uses and Applications
- Element Description
- Electron Configuration (for selected elements)

## Technologies Used

- **HTML5**: Page structure and semantics
- **CSS3**: Modern styling with gradients and animations
- **JavaScript**: Dynamic content generation and interactivity
- **Responsive Design**: CSS Grid and Flexbox for layout

## Features Highlights

### Main Periodic Table Page
- Color-coded elements by category
- Hover effects with smooth animations
- Legend showing all element categories
- Responsive grid layout (18 columns standard, adjusts for mobile)
- Search-friendly semantic HTML

### Element Detail Pages
- Large element symbol and atomic number display
- Comprehensive property information
- Visual cards showing key properties
- List of common applications
- Electron configuration display
- Discovery information
- Back navigation to main table
- Print-friendly layout

## Periodic Table Layout

The periodic table follows the standard IUPAC layout:
- Rows 1-7: Chemical periods
- Columns 1-18: Chemical groups
- Lanthanides (Elements 57-71): Displayed in separate row
- Actinides (Elements 89-103): Displayed in separate row

## Element Database

The `data.js` file contains:
- Complete periodic table data for all 118 elements
- Detailed information for selected elements (customizable)
- Element categorization by type
- Atomic properties and characteristics

## Customization

### Adding Element Details

To add detailed information for more elements, edit `js/data.js`:

```javascript
const elementDetails = {
    elementAtomicNumber: {
        symbol: 'Symbol',
        name: 'Element Name',
        atomicNumber: 1,
        mass: 1.008,
        category: 'Category',
        boilingPoint: '°C',
        meltingPoint: '°C',
        density: 'g/cm³',
        discovery: 'Discoverer, Year',
        uses: ['Use 1', 'Use 2', ...],
        description: 'Description text',
        electronConfiguration: 'Configuration'
    }
};
```

### Changing Colors

Modify the color values in `css/style.css`:

```css
.element.nonmetal {
    background-color: #90EE90;
}
```

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight HTML/CSS/JavaScript
- No external dependencies
- Fast loading and rendering
- Optimized for smooth animations

## Educational Uses

This periodic table is perfect for:
- Chemistry students learning element properties
- Science teachers presenting periodic trends
- Educational reference materials
- Interactive learning experiences
- STEM education projects

## Future Enhancements

Potential additions could include:
- Element images and 3D models
- Interactive periodic trends visualization
- Search and filter functionality
- Element comparison tools
- Quiz and flashcard modes
- More detailed element information
- International language support

## License

This educational resource is provided for learning purposes.

## Notes

- All element data is accurate as of 2024
- Lanthanides and Actinides are displayed in separate rows for clarity
- Element details can be expanded with more properties and information
- The periodic table follows modern IUPAC conventions

---

Created as an interactive educational resource for chemistry learning.
