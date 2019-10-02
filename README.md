# gatsby-plugin-scroll-reveal

Scroll gatsby plugin to animate DOM elements on scroll. We use [Sal (Scroll Animation Library)](https://mciastek.github.io/sal/) less than **2.8kb**, written in vanilla Javascript.

## Install

`yarn add gatsby-plugin-scroll-reveal`

or

`npm install --save gatsby-plugin-scroll-reveal`

## How to use

1. Include the plugin in your `gatsby-config.js` file.
2. Add your custom `options` object (optional)

```javascript
// in gatsby-config.js
plugins: [
  `gatsby-plugin-scroll-reveal`
];
```

## Options

Here is a full list of options with their default values you can use to configure this plugin.

```javascript
// in gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-scroll-reveal`,
    options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
        
        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%' // Corresponds to root's bounding box margin
        enterEventName: 'sal:in' // Enter event name
        exitEventName: 'sal:out' // Exit event name
    }
  }
];
```

## Usage

It will look for all HTML elements with a `data-sal` attribute and launch their animation when in viewport.

- `data-sal` - attribute with the animation name as value **required**
- `data-sal-duration` - changes duration of the animation (optional)
- `data-sal-delay` - adds delay to the animation (optional)
- `data-sal-easing` - sets easing for the animation (optional)

For example:
```html
<div
  data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease"
></div>
```

The library supports:
- `fade`
- `slide-up`
- `slide-down`
- `slide-left`
- `slide-right`
- `zoom-in`
- `zoom-out`
- `flip-up`
- `flip-down`
- `flip-left`
- `flip-right`

## Gatsby v1

This plugin is not compatible anymore with Gatsby v1, you should update to the version 2.0.0.

## License

Created by [Soluble Studio](https://www.solublestudio.com/). Released under the [MIT License](https://github.com/solublestudio/gatsby-plugin-scroll-reveal/blob/master/LICENSE).