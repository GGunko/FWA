# Famicom-Style Personal Questionnaire Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from classic Nintendo Famicom/NES games with authentic 8-bit aesthetics, pixel art styling, and retro gaming UI patterns.

## Core Design Elements

### Color Palette
**Primary Colors (Dark Mode)**:
- Background: 0 0% 8% (deep charcoal, mimicking CRT screens)
- Primary Red: 0 85% 50% (classic Famicom red)
- Text/UI White: 0 0% 95% (slightly warm white)
- Gold Accent: 45 100% 60% (retro game coin/star color)

**Secondary Colors**:
- Success Green: 120 70% 45% (power-up green)
- Warning Orange: 30 90% 55% (fire flower orange)
- Border Gray: 0 0% 25% (pixel border color)

### Typography
- **Primary Font**: "Press Start 2P" from Google Fonts (authentic 8-bit pixel font)
- **Fallback**: "Courier New", monospace
- **Hierarchy**: 
  - Main title: 24px (large pixel text)
  - Question headers: 16px 
  - Body text: 14px
  - UI elements: 12px

### Layout System
**Spacing**: Tailwind units of 4, 8, and 16 (consistent with pixel grid alignment)
- Container max-width: 800px (maintains retro screen proportions)
- Sections separated by 16-unit gaps
- Form elements with 4-unit internal padding
- 8-unit margins for component spacing

### Component Library

**Core UI Elements**:
- **Pixel Buttons**: Sharp rectangular borders (2px), no rounded corners, flat design with subtle shadow
- **Text Containers**: Classic game dialog box style with thick borders
- **Input Fields**: Monospace font, pixel-perfect borders, dark backgrounds
- **Progress/Navigation**: 8-bit style indicators or simple numbered system

**Layout Components**:
- **Header**: Centered title with pixel-art styling
- **Question Cards**: Each question in individual bordered containers resembling game dialog boxes
- **Form Areas**: Large text areas for answers with retro styling
- **Footer**: Simple pixel-art inspired navigation or completion indicator

**Visual Effects**:
- **Scanlines**: Subtle CSS overlay mimicking CRT monitor effect
- **Pixel Borders**: All containers use sharp, geometric borders
- **Shadow Effects**: Minimal, flat shadows in darker tones

### Animations
**Minimal Approach**: 
- Simple fade-in transitions for content loading
- Subtle pixel-perfect hover states (color shifts only)
- No complex animations to maintain authentic retro feel

## Images
**No Hero Image Required**: The design relies on typography and color blocking rather than large imagery. Any graphics should be:
- Simple pixel-art style icons or decorative elements
- 8-bit inspired geometric patterns as subtle background textures
- Small decorative elements (stars, coins) as accent pieces

## Key Design Principles
1. **Authenticity**: Stay true to original Famicom/NES visual language
2. **Pixel Perfection**: All elements align to grid system
3. **High Contrast**: Strong color contrast for readability
4. **Simplicity**: Clean, uncluttered interface focused on content
5. **Nostalgia**: Evoke classic gaming memories through familiar UI patterns

## Responsive Considerations
- Maintain pixel-perfect appearance across devices
- Scale typography proportionally while preserving pixel font integrity
- Stack question containers vertically on mobile
- Preserve border thickness and spacing ratios