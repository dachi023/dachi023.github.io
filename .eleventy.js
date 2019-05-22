const { DateTime } = require('luxon')
const htmlmin = require("html-minifier")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL)
  })

  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    return outputPath.endsWith('.html')
      ? htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      : content
  })
  
  return {
    dir: {
      output: 'public'
    }
  }
}
