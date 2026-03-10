# RR Construction - Reusable Components

This directory contains extracted, reusable components from the RR Construction website.

## Owner Section Component

The owner section showcases Troy Streeter, the owner and general contractor, with a circular photo, bio, and signature.

### Files

1. **`owner-section.html`** - Standalone HTML file
   - Complete HTML document
   - Can be viewed directly in a browser for testing
   - Includes all CSS inline
   - Fully responsive

2. **`owner-section-include.html`** - Include version
   - Designed to be copied into existing pages
   - Includes `<style>` tag with scoped CSS
   - No wrapper HTML structure

### Usage

#### Option 1: Copy & Paste (Recommended for index.html)

Simply copy the contents of `owner-section-include.html` and paste it into your `index.html` where you want the owner section to appear:

```html
<!-- Your index.html -->
<!DOCTYPE html>
<html>
<head>
    <!-- Your existing head content -->
</head>
<body>
    <!-- Your header, hero, etc. -->

    <!-- PASTE THE OWNER SECTION HERE -->

    <!-- Your footer, other sections -->
</body>
</html>
```

#### Option 2: JavaScript Include

If you want to dynamically load it:

```html
<div id="owner-section-container"></div>

<script>
fetch('components/owner-section-include.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('owner-section-container').innerHTML = html;
    });
</script>
```

#### Option 3: Server-Side Include (PHP)

If using PHP:

```php
<?php include 'components/owner-section-include.html'; ?>
```

### Customization

To replace the placeholder "TS" with Troy's actual photo:

1. Add the photo to your `images/` directory (e.g., `images/troy-streeter.jpg`)
2. In the component, uncomment and update the img tag:

```html
<div class="owner-image">
    <!-- Remove or comment out the placeholder -->
    <!-- <div class="owner-placeholder">TS</div> -->

    <!-- Add the actual image -->
    <img src="images/troy-streeter.jpg" alt="Troy Streeter - Owner of RR Construction">
</div>
```

### Mobile Responsive

The component is fully responsive:
- **Desktop** (>768px): Side-by-side layout with photo on left
- **Tablet** (768px): Stacked layout, centered
- **Mobile** (<480px): Smaller image, adjusted text sizes

### Dependencies

- Assumes a `.container` class exists in your main stylesheet (max-width: 1200px)
- Uses standard web fonts (Arial, Brush Script MT for signature)
- No JavaScript required
- No external dependencies

## Future Components

Additional components will be added to this directory as they're extracted from the landing pages.
