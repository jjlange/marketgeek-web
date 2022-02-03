/**
 * MarketGeek Web App
 * Copyright (C) 2022, MarketGeek.
 *
 * This is the web application for MarketGeek.
 * It is a user interface to make the interaction between the user and the system.
 * 
 * @version 1.0
 * @description Configuration file for the PostCSS framework.
 */

// Include purgecss to purge unused CSS rules.
const purgecss = require('@fullhuman/postcss-purgecss')

// Export configuration
module.exports = {

  // Load PurgeCSS plugin
  plugins: [
    purgecss({
      // Remove unused CSS classes from the files defined below
      content: ['./**/*.jsx']
    })
  ],
}
