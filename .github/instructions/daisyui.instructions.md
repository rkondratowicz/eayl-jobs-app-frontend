---
applyTo: '**'
---

# DaisyUI Best Practices and Implementation Guide

## Overview

This project uses **DaisyUI** as the primary CSS component library built on top of Tailwind CSS. DaisyUI provides semantic class names for common UI components, making it easier to build consistent and beautiful interfaces.

## Mandatory Workflow for DaisyUI Implementation

### 1. **Always Use Context7 MCP First**
Before implementing any DaisyUI component:

```bash
# Use the Context7 MCP to get latest documentation
1. resolve-library-id with "DaisyUI"
2. get-library-docs with "/saadeghi/daisyui" and specific topic
```

**Why**: Ensures you're using the most current patterns and avoiding deprecated approaches.

### 2. **Follow Official DaisyUI Patterns**
- Always start with the base component class (e.g., `table`, `btn`, `card`)
- Apply modifiers as separate classes (e.g., `table-zebra`, `btn-primary`)
- Use semantic HTML structure that DaisyUI expects

## Component Implementation Guidelines

### Tables
✅ **Correct Implementation**:
```html
<div class="overflow-x-auto">
  <table class="table table-zebra">
    <thead>
      <tr>
        <th>Header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data</td>
      </tr>
    </tbody>
  </table>
</div>
```

❌ **Avoid**:
```html
<!-- Don't add custom wrapper classes that conflict -->
<div class="custom-table-wrapper bg-base-100 rounded-box">
  <table class="table w-full">
    <!-- DaisyUI handles styling automatically -->
```

### Buttons
✅ **Correct Implementation**:
```html
<button class="btn btn-primary btn-sm">Action</button>
<button class="btn btn-ghost btn-xs">Secondary</button>
```

### Badges
✅ **Correct Implementation**:
```html
<span class="badge badge-secondary badge-sm">Status</span>
<span class="badge badge-accent badge-sm">Category</span>
```

### Avatars
✅ **Correct Implementation**:
```html
<div class="avatar placeholder">
  <div class="bg-primary text-primary-content w-12 h-12 rounded-full">
    <span class="text-lg font-bold">A</span>
  </div>
</div>
```

## Essential DaisyUI Principles

### 1. **Use Semantic Classes**
- Prefer `btn-primary` over custom color classes
- Use `badge-secondary` instead of manual background colors
- Leverage `text-base-content` for consistent theming

### 2. **Embrace Component Modifiers**
Available modifiers include:
- **Size**: `btn-xs`, `btn-sm`, `btn-md`, `btn-lg`, `btn-xl`
- **Variants**: `btn-primary`, `btn-secondary`, `btn-accent`, `btn-ghost`, `btn-outline`
- **States**: `btn-active`, `btn-disabled`

### 3. **Responsive Design Patterns**
```html
<!-- Always wrap tables for mobile -->
<div class="overflow-x-auto">
  <table class="table">...</table>
</div>

<!-- Use responsive classes when needed -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

### 4. **Theme Integration**
- Use DaisyUI's theme variables: `bg-base-100`, `text-base-content`
- Leverage theme-aware colors: `bg-primary`, `text-primary-content`
- Maintain consistency with the chosen theme

## Component-Specific Best Practices

### Tables
- **Always use `table-zebra`** for better readability
- **Wrap in `overflow-x-auto`** for mobile responsiveness
- **Use proper semantic structure**: `<thead>`, `<tbody>`, `<tfoot>`
- **Keep actions in the last column** for consistency
- **Use `btn-xs` or `btn-sm`** for table actions to maintain proportion

### Forms
- Use `input`, `textarea`, `select` base classes
- Apply size modifiers: `input-sm`, `input-md`, `input-lg`
- Use variant classes: `input-bordered`, `input-primary`

### Cards
- Start with `card` base class
- Use `card-body` for content padding
- Apply modifiers: `card-compact`, `card-bordered`

### Navigation
- Use `navbar` for top navigation
- Apply `menu` class for sidebar navigation
- Leverage `breadcrumbs` for hierarchical navigation

## Common Pitfalls to Avoid

### 1. **Don't Override DaisyUI Styles**
❌ **Avoid**:
```css
.table {
  /* Custom overrides that break theming */
  background-color: white !important;
}
```

✅ **Instead**:
```html
<!-- Use DaisyUI's theme system -->
<table class="table bg-base-100">
```

### 2. **Don't Mix Custom Classes with DaisyUI**
❌ **Avoid**:
```html
<button class="btn custom-blue-button rounded-lg">
```

✅ **Instead**:
```html
<button class="btn btn-primary">
```

### 3. **Don't Ignore Responsive Patterns**
❌ **Avoid**:
```html
<table class="table w-full">
  <!-- Will break on mobile -->
```

✅ **Instead**:
```html
<div class="overflow-x-auto">
  <table class="table">
```

## Quality Assurance Workflow

### Before Committing DaisyUI Components:

1. **Verify Context7 Documentation**: Ensure you're using current patterns
2. **Test Responsiveness**: Check mobile, tablet, and desktop views
3. **Validate Theme Compatibility**: Ensure components work with light/dark themes
4. **Run Biome Checks**: `npm run check` to ensure code quality
5. **Build Test**: `npm run build` to verify no styling conflicts

## Integration with Project Standards

### With Linting (Biome)
- All DaisyUI classes are allowed and won't trigger linting errors
- Follow the existing linting workflow after implementing components

### With TypeScript
- DaisyUI classes are purely CSS - no TypeScript implications
- Maintain type safety in component logic while using DaisyUI for styling

### With Dependency Management
- Keep DaisyUI updated using the dependency management instructions
- Always check for breaking changes in major version updates

## Advanced Techniques

### Custom Themes
```html
<!-- Apply theme at component level -->
<div data-theme="dark">
  <table class="table table-zebra">
```

### Component Composition
```html
<!-- Combine multiple DaisyUI components -->
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <div class="overflow-x-auto">
      <table class="table table-zebra">
```

### Animation and Transitions
- DaisyUI includes built-in hover states
- Use Tailwind transitions when needed: `transition-colors duration-200`

## Troubleshooting

### Common Issues and Solutions

**"Component not styling correctly"**
1. Check if you're using the base class (e.g., `table`, `btn`)
2. Verify modifier classes are spelled correctly
3. Ensure no custom CSS is overriding DaisyUI

**"Responsive issues"**
1. Wrap tables in `overflow-x-auto`
2. Use Tailwind responsive prefixes: `sm:`, `md:`, `lg:`
3. Test on actual devices, not just browser dev tools

**"Theme not applying"**
1. Check `data-theme` attribute in HTML
2. Verify theme colors are using DaisyUI variables
3. Ensure CSS build includes all DaisyUI components

## Success Metrics

A successful DaisyUI implementation should:
- ✅ Follow official DaisyUI documentation patterns
- ✅ Work seamlessly across all screen sizes
- ✅ Maintain theme consistency
- ✅ Pass all quality checks (Biome, TypeScript, build)
- ✅ Require minimal custom CSS
- ✅ Be easily maintainable and updatable

## Example Reference Implementation

See `views/job-roles/index.njk` for a complete example of proper DaisyUI table implementation that follows all these guidelines.
