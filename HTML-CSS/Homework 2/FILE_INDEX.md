# 📊 File Index - Periodic Table Website

## Quick Navigation

### 🌐 HTML Files
| File | Purpose | Location |
|------|---------|----------|
| `index.html` | Main periodic table page | Root |
| `element-detail.html` | Element information template | `/elements` |

### 🎨 CSS Files (in `/css`)
| File | Purpose |
|------|---------|
| `style.css` | Main styling, layout, animations, responsive design |
| `element-detail.css` | Detail page styling, property cards, descriptions |

### 🔧 JavaScript Files (in `/js`)

#### Core Files
| File | Purpose |
|------|---------|
| `data.js` | Complete element database (all 118 elements) + detailed info |
| `script.js` | Main periodic table logic, rendering, interactions |
| `element-detail.js` | Detail page display and formatting |

#### Utility Files
| File | Purpose |
|------|---------|
| `config.js` | Configuration, settings, theme management |
| `extended-data.js` | Additional element details (expandable) |
| `search-utils.js` | Search and filter utilities |

### 📁 Directory Structure
```
Домашно со Табела на Елементите/
├── index.html                    ⭐ START HERE
├── README.md                     📖 Project overview
├── SETUP_GUIDE.md               📖 Detailed setup guide
├── FILE_INDEX.md                📖 This file
│
├── css/
│   ├── style.css                🎨 Main styles
│   └── element-detail.css       🎨 Detail page styles
│
├── js/
│   ├── data.js                  📊 Element database
│   ├── script.js                ⚙️ Main logic
│   ├── element-detail.js        ⚙️ Detail page logic
│   ├── config.js                ⚙️ Configuration
│   ├── extended-data.js         📊 Extra data
│   └── search-utils.js          🔍 Search utilities
│
├── elements/
│   └── element-detail.html      🌐 Detail page template
│
└── images/
    └── (reserved for element images)
```

## 🚀 How to Use Each File

### 1. Starting the Website
```bash
# Method 1: Direct open
double-click index.html

# Method 2: Local server (recommended)
python -m http.server 8000
# or
http-server
```

### 2. Adding Element Images
1. Place images in `/images` folder
2. Name: `element-{atomicNumber}.jpg`
3. Edit `element-detail.js` to display them

### 3. Modifying Colors
Edit `/css/style.css` color variables

### 4. Adding Element Details
Edit `/js/data.js` `elementDetails` object

### 5. Customizing Configuration
Edit `/js/config.js` CONFIG object

## 📊 File Sizes and Content

| File | Lines | Type | Size |
|------|-------|------|------|
| index.html | ~45 | HTML | Small |
| data.js | ~150 | JavaScript | Medium |
| script.js | ~120 | JavaScript | Medium |
| style.css | ~300 | CSS | Medium |
| element-detail.js | ~100 | JavaScript | Small |
| element-detail.css | ~300 | CSS | Medium |
| config.js | ~300 | JavaScript | Medium |
| search-utils.js | ~200 | JavaScript | Medium |
| extended-data.js | ~250 | JavaScript | Medium |

## 🔄 Data Flow

```
index.html (Main Page)
    ↓
    Uses: js/data.js (Element data)
    Uses: js/script.js (Initialization)
    Uses: css/style.css (Styling)
    ↓
[User clicks element]
    ↓
    Opens: elements/element-detail.html
    Uses: js/data.js (Get element info)
    Uses: js/element-detail.js (Display logic)
    Uses: css/element-detail.css (Styling)
```

## 🎯 Feature Files Mapping

| Feature | Files Used |
|---------|------------|
| Periodic table display | script.js, data.js, style.css |
| Element clicking | script.js |
| Detail page rendering | element-detail.js, element-detail.css |
| Element information | data.js, extended-data.js |
| Search functionality | search-utils.js |
| Styling & animations | style.css, element-detail.css |
| Configuration | config.js |

## 📝 Important Functions

### In `script.js`
- `initializePeriodicTable()` - Creates the periodic table
- `createElementCard()` - Creates element DOM elements
- `openElementDetail()` - Opens detail page

### In `element-detail.js`
- `displayElementDetail()` - Shows element information
- `generateDefaultDetail()` - Creates default info for elements

### In `search-utils.js`
- `PeriodicTableSearch` - Search class
  - `searchByName()`
  - `filterByCategory()`
  - `advancedSearch()`

### In `config.js`
- `getConfig()` - Get configuration value
- `setConfig()` - Set configuration value
- `ThemeManager` - Manage themes
- `SettingsManager` - Manage settings

## 🔗 File Dependencies

```
index.html
├── css/style.css
├── js/data.js
└── js/script.js

elements/element-detail.html
├── css/element-detail.css
├── js/data.js
└── js/element-detail.js
```

## 🛠️ Modification Checklist

- [ ] Change colors → Edit `/css/style.css`
- [ ] Add element details → Edit `/js/data.js`
- [ ] Modify layout → Edit `/js/script.js`
- [ ] Add images → Place in `/images/`, edit `element-detail.js`
- [ ] Change fonts → Edit `/css/` files
- [ ] Add features → Create new files in `/js/`
- [ ] Change configuration → Edit `/js/config.js`

## 📚 Documentation Files

| File | Content |
|------|---------|
| `README.md` | Project overview and features |
| `SETUP_GUIDE.md` | Detailed setup and usage guide |
| `FILE_INDEX.md` | This file (complete reference) |

## 🔍 Quick File Lookup

**Need to...** | **Edit file...**
---|---
Change element colors | `css/style.css`
Add element information | `js/data.js`
Modify periodic table layout | `js/script.js`
Change detail page design | `css/element-detail.css`
Add images to elements | `elements/images/`, `js/element-detail.js`
Customize app settings | `js/config.js`
Add search functionality | `js/search-utils.js`

## 💾 Backup Important Files

Before making major changes, backup:
1. `js/data.js` - Element data
2. `css/style.css` - Main styling
3. `js/script.js` - Core logic

## 🎓 Learning Path

For beginners wanting to understand the project:
1. Read `README.md`
2. Open `index.html` in browser
3. Review `SETUP_GUIDE.md`
4. Read `js/data.js` to understand element structure
5. Review `js/script.js` to understand logic
6. Check `css/style.css` for styling concepts
7. Explore `element-detail.js` for advanced topics

---

**Last Updated**: 2025  
**Version**: 1.0  
**Status**: Complete
