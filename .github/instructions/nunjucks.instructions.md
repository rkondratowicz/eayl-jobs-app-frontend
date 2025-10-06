---
applyTo: '**/*.njk'
---

# Nunjucks Templating Best Practices

## Overview

This project uses **Nunjucks** as the template engine for server-side rendering. These guidelines ensure clean, efficient, and maintainable templates.

## Template Structure

### Base Layout Pattern
```html
{% extends "layout.njk" %}

{% block navbarActions %}
<!-- Navbar custom actions -->
{% endblock %}

{% block header %}
<!-- Page header content -->
{% endblock %}

{% block content %}
<!-- Main page content -->
{% endblock %}
```

## Form Handling Best Practices

### Error Display Patterns

✅ **Efficient Error Handling**:
```html
<!-- Use 'first' filter to get the first matching error -->
{% set fieldError = errors | selectattr('field', 'equalto', 'fieldName') | first %}
{% if fieldError %}
<div class="label">
  <span class="label-text-alt text-error">{{ fieldError.message }}</span>
</div>
{% endif %}
```

❌ **Avoid Nested Loops**:
```html
<!-- Don't loop through all errors for each field -->
{% for error in errors %}
    {% if error.field === 'fieldName' %}
    <div class="label">
        <span class="label-text-alt text-error">{{ error.message }}</span>
    </div>
    {% endif %}
{% endfor %}
```

**Why the first approach is better:**
- More efficient - stops after finding first match
- Cleaner code with less nesting
- Easier to read and maintain
- Reduces template complexity

### Conditional Classes

✅ **Clean Conditional Class Application**:
```html
<input 
  type="text" 
  class="input validator {% if errors | selectattr('field', 'equalto', 'fieldName') | list | length > 0 %}input-error{% endif %}"
  required
/>
```

### Form Data Preservation

✅ **Proper Value Restoration**:
```html
<!-- Text input -->
<input 
  type="text" 
  name="fieldName" 
  value="{{ formData.fieldName or '' }}"
/>

<!-- Select dropdown -->
<select name="status">
  <option value="Draft" {% if formData.status === 'Draft' or not formData.status %}selected{% endif %}>Draft</option>
  <option value="Open" {% if formData.status === 'Open' %}selected{% endif %}>Open</option>
</select>

<!-- Textarea -->
<textarea name="description">{{ formData.description or '' }}</textarea>

<!-- Date input (handle Date objects) -->
<input 
  type="date" 
  name="closingDate" 
  value="{{ formData.closingDate.toISOString().split('T')[0] if formData.closingDate else '' }}"
/>
```

## Accessibility Best Practices

### Alert Roles
```html
<!-- Add role="alert" to error messages -->
<div role="alert" class="alert alert-error mb-6">
  <i data-lucide="alert-circle" class="h-5 w-5"></i>
  <div>
    <h3 class="font-bold">Please correct the following errors:</h3>
    <ul class="list-disc ml-4 mt-2">
      {% for error in errors %}
      <li>{{ error.message }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
```

### Required Field Indicators
```html
<legend class="fieldset-legend">
  Field Name <span class="text-error">*</span>
</legend>
```

## Icon Integration with Lucide

### Initialize Icons
Always initialize Lucide icons at the end of templates:
```html
<script>
    // Initialize Lucide icons
    lucide.createIcons();
</script>
{% endblock %}
```

### Icon Usage
```html
<!-- Use data-lucide attribute -->
<i data-lucide="check" class="h-4 w-4 mr-1"></i>
<i data-lucide="x" class="h-4 w-4 mr-1"></i>
<i data-lucide="alert-circle" class="h-5 w-5"></i>
```

## Spacing and Layout

### Use Tailwind Spacing Utilities
✅ **Recommended**:
```html
<!-- Vertical spacing -->
<div class="space-y-4">
  <fieldset class="fieldset">...</fieldset>
  <fieldset class="fieldset">...</fieldset>
</div>

<!-- Gap for flex/grid -->
<div class="flex gap-2">
  <button class="btn">Cancel</button>
  <button class="btn btn-primary">Submit</button>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <fieldset class="fieldset">...</fieldset>
  <fieldset class="fieldset">...</fieldset>
</div>
```

❌ **Avoid Manual Margins**:
```html
<!-- Don't use manual margin classes -->
<div class="mb-4">
  <fieldset class="fieldset">...</fieldset>
</div>
<div class="mb-4">
  <fieldset class="fieldset">...</fieldset>
</div>
```

## Data Formatting

### Date Formatting
```html
<!-- Display formatted date -->
{{ jobRole.closingDate.toLocaleDateString("en-GB", {
  year: "numeric",
  month: "long",
  day: "numeric",
}) }}
```

### String Operations
```html
<!-- First character for avatar -->
{{ roleName.charAt(0) }}

<!-- Default values -->
{{ value or 'Default' }}

<!-- Date to ISO string -->
{{ date.toISOString().split('T')[0] }}
```

## Conditional Rendering

### Empty States
```html
{% if items.length === 0 %}
<div class="text-center py-12">
  <i data-lucide="inbox" class="h-16 w-16 mx-auto mb-4 text-base-content/30"></i>
  <h3 class="text-xl font-semibold mb-2">No items found</h3>
  <p class="text-base-content/70 mb-6">Get started by creating your first item.</p>
  <a href="/create" class="btn btn-primary">Create Item</a>
</div>
{% endif %}
```

### Error States
```html
{% if error %}
<div role="alert" class="alert alert-error">
  <i data-lucide="alert-circle" class="h-5 w-5"></i>
  <span>{{ error }}</span>
</div>
{% endif %}
```

## Template Organization

### Section Headers
```html
<h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
  <i data-lucide="info" class="h-6 w-6"></i>
  Section Title
</h2>
```

### Card-Based Forms
```html
<form method="POST" action="/endpoint" class="card bg-base-100 shadow-xl" novalidate>
  <div class="card-body space-y-6">
    <!-- Form sections with dividers -->
    <div>
      <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
        <i data-lucide="info" class="h-6 w-6"></i>
        Section 1
      </h2>
      <div class="space-y-4">
        <!-- Fields -->
      </div>
    </div>

    <div class="divider"></div>

    <div>
      <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
        <i data-lucide="file-text" class="h-6 w-6"></i>
        Section 2
      </h2>
      <div class="space-y-4">
        <!-- Fields -->
      </div>
    </div>
  </div>

  <div class="card-actions justify-end p-6 bg-base-200 gap-2">
    <a href="/back" class="btn btn-ghost">Cancel</a>
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
```

## Performance Considerations

### Efficient Filters
- Use `first` filter to get single items instead of looping
- Use `selectattr` for filtering arrays
- Use `list` to convert generators when needed for length checks

### Example:
```html
<!-- Efficient: Get first error only -->
{% set error = errors | selectattr('field', 'equalto', 'name') | first %}

<!-- When you need to check if any exist -->
{% if errors | selectattr('field', 'equalto', 'name') | list | length > 0 %}
```

## Common Patterns Reference

### Complete Form Field with Validation
```html
<fieldset class="fieldset">
  <legend class="fieldset-legend">Field Name <span class="text-error">*</span></legend>
  <input 
    type="text" 
    name="fieldName" 
    value="{{ formData.fieldName or '' }}"
    placeholder="Enter value" 
    class="input validator {% if errors | selectattr('field', 'equalto', 'fieldName') | list | length > 0 %}input-error{% endif %}"
    required
  />
  {% set fieldError = errors | selectattr('field', 'equalto', 'fieldName') | first %}
  {% if fieldError %}
  <div class="label">
    <span class="label-text-alt text-error">{{ fieldError.message }}</span>
  </div>
  {% endif %}
</fieldset>
```

### Complete Select with Validation
```html
<fieldset class="fieldset">
  <legend class="fieldset-legend">Status <span class="text-error">*</span></legend>
  <select 
    name="status" 
    class="select validator {% if errors | selectattr('field', 'equalto', 'status') | list | length > 0 %}select-error{% endif %}"
    required
  >
    <option value="" disabled {% if not formData.status %}selected{% endif %}>Choose an option</option>
    <option value="Option1" {% if formData.status === 'Option1' %}selected{% endif %}>Option 1</option>
    <option value="Option2" {% if formData.status === 'Option2' %}selected{% endif %}>Option 2</option>
  </select>
  {% set statusError = errors | selectattr('field', 'equalto', 'status') | first %}
  {% if statusError %}
  <div class="label">
    <span class="label-text-alt text-error">{{ statusError.message }}</span>
  </div>
  {% endif %}
</fieldset>
```

### Complete Textarea with Validation
```html
<fieldset class="fieldset">
  <legend class="fieldset-legend">Description <span class="text-error">*</span></legend>
  <textarea 
    name="description" 
    rows="6"
    placeholder="Enter description..." 
    class="textarea validator {% if errors | selectattr('field', 'equalto', 'description') | list | length > 0 %}textarea-error{% endif %}"
    minlength="10"
    required
  >{{ formData.description or '' }}</textarea>
  <span class="label">Minimum 10 characters</span>
  {% set descError = errors | selectattr('field', 'equalto', 'description') | first %}
  {% if descError %}
  <div class="label">
    <span class="label-text-alt text-error">{{ descError.message }}</span>
  </div>
  {% endif %}
</fieldset>
```

## Key Takeaways

1. **Use `first` filter** for efficient single-item retrieval from arrays
2. **Preserve form data** on validation errors using `formData` object
3. **Add accessibility attributes** like `role="alert"` for screen readers
4. **Use semantic HTML** with `fieldset` and `legend` for forms
5. **Initialize Lucide icons** at the end of templates
6. **Use Tailwind spacing utilities** (`space-y-*`, `gap-*`) instead of manual margins
7. **Structure forms in cards** with clear sections and dividers
8. **Always use `novalidate`** on forms to control validation timing
9. **Combine DaisyUI classes properly** with `validator` and error modifiers
10. **Keep templates clean** by avoiding nested loops and complex logic

## Quality Checklist

Before committing Nunjucks templates:
- ✅ Error display uses `first` filter pattern
- ✅ All form fields preserve data on validation errors
- ✅ Required fields marked with `<span class="text-error">*</span>`
- ✅ Accessibility attributes added where appropriate
- ✅ Lucide icons initialized at template end
- ✅ Spacing uses Tailwind utilities, not manual margins
- ✅ Form structure uses `fieldset` and `validator` patterns
- ✅ Code is clean, readable, and maintainable
