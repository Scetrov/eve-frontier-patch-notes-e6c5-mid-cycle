# EVE Frontier - UI Design System

This document outlines the core design tokens, components, and aesthetic rules for an EVE Frontier application, microsite or dApp. 

## 1. Design Philosophy

The UI employs a **Sci-Fi / Brutalist HUD (Heads-Up Display)** aesthetic. 

* **High Contrast:** Stark white and vibrant orange against pure black backgrounds.
* **Technical & Utilitarian:** Extensive use of monospaced typography, sharp edges, and uppercase text.
* **Targeting Brackets:** The defining motif is the use of partial borders and bracketed corners (like a targeting reticle `[ ]`) around buttons, inputs, and panels.

---

## 2. Color Palette

### Base / Backgrounds

* **App Background:** `#000000` (Pure Black)
* **Panel/Card Background:** `#0A0A0A` to `#111111` (Very Dark Grey)
* **Input Background:** `#050505` (Almost Black)

### Accents

* **Primary Accent (Action/Highlight):** `#FF4500` (Neon/Safety Orange)
* **Danger/Alert Accent:** `#FF0000` (Pure Red) - *Used for the 'Recruited' counter border.*

### Resource / Material Colors

These colors are used to represent the three primary material classes:

* **Alloys (Industrial/Metallic):** `#00E5FF` (Cyan/Neon Blue)
* **Thermal (Energy/Heat):** `#FF7400` (Bright Orange)
* **Carbon (Structural/Composite):** `#888899` (Cool Grey)

### Typography

* **Primary Text:** `#F5F5F5` (Off-White) - *Used for headings and active values.*
* **Secondary/Muted Text:** `#8C8C8C` (Muted Grey) - *Used for table headers, placeholders, and descriptions.*
* **Inverted Text:** `#000000` (Pure Black) - *Used exclusively on top of the Primary Accent (Orange) backgrounds.*

### Borders & Dividers

* **Default Border:** `#333333` (Dark Grey)
* **Interactive Border Hover:** `#666666`

---

## 3. Typography

The interface relies heavily on technical, square-proportioned fonts. To reproduce this, you should use fonts like **Disket Mono**.

* **Headings (H1/H2):** 
    * Font-family: Disket Mono Bold`
    * Weight: Semi-Bold
    * Transform: `uppercase`
    * Letter-spacing: `0.05em` to `0.1em`
* **Body / Data / Tables:**
    * Font-family: Disket Mono
    * Weight: Regular / 400
    * Size: Smaller (approx `12px` - `14px`)
* **Buttons:**
    * Font-family: Disket Mono Bold
    * Weight: Bold
    * Transform: `uppercase`
    * Letter-spacing: `0.05em`

---

## 4. UI Components

### 4.1 Buttons

All buttons feature a hard rectangular shape with no `border-radius`. The defining feature is the corner brackets.

**Primary Button:**
* Background: `var(--color-primary-orange)`
* Text: `var(--color-black)`
* Font Weight: Bold
* Decorations: Corner cutouts or outer bracket borders in a slightly darker orange or black.

**Secondary/Outline Button ("LOGOUT", "BUILD YOUR TRIBE"):**
* Background: `var(--color-panel-bg)`
* Text: `var(--color-text-primary)`
* Border: 1px solid `var(--color-border)`
* Decorations: Corner brackets `[ ]` overlapping the border.

### 4.2 Corner Brackets

A defining visual motif of the EVE Frontier UI. Content-wrapping containers (cards, panels, input fields, modals) feature small accent brackets at the outer corners, reinforcing the targeting reticle / HUD aesthetic.

* **Placement:** Four brackets, one at each outer corner of the container's border.
* **Form:** Short perpendicular lines that frame the corner from the outside — creating an open "crosshair" effect rather than enclosing the corner.
* **Color:** `#666666` (Interactive Border Hover) or `var(--eve-accent-orange)` on focus/hover states.
* **Size:** Approximately `2px` thickness, `8px`-`12px` arm length.
* **Gap:** A small gap (`2px`-`4px`) between the bracket edges and the container border. Brackets do **not** touch the border lines.
* **Positioning:** Brackets sit on the *outside* of the container's border, never inside.

### 4.3 Form Inputs

* **Background:** Transparent or very dark grey (`#050505`).
* **Border:** 1px solid `#333333`.
* **Corner Brackets:** Applied per section 4.2 above.
* **Text:** Monospaced, `uppercase`, muted grey placeholder.

### 4.3 Cards & Panels

* **Containers:** Black backgrounds with thin, dark grey borders. 
* **Padding:** Spacious internal padding (e.g., `24px` to `32px`).
* **Headers:** Often feature a small, muted eyebrow text.

### 4.4 Tables ("TRANSACTIONS")

* **Header Row:** Muted grey, small, uppercase, monospaced text. No background.
* **Data Rows:** 
    * Separated by a 1px solid dark grey border (`border-bottom`).
    * Align-middle layout.
    * Avatar/Icon cells have a grey background block (`#222`).
* **Overall Container:** Wrapped in the signature bracketed corners.

---

## 5. CSS / Implementation Snippets

### CSS Variables (Tokens)
```css
:root {
  --eve-bg-base: #000000;
  --eve-bg-panel: #0A0A0A;
  --eve-accent-orange: #FF4500;
  --eve-accent-red: #FF0000;
  
  --eve-text-main: #F5F5F5;
  --eve-text-muted: #8C8C8C;
  --eve-text-inverse: #000000;
  
  --eve-border-default: #333333;
  --eve-border-light: #555555;
  
  --font-heading: 'Disket Mono SemiBold', sans-serif;
  --font-mono: 'Space Mono', monospace;
}
