const siteUrl = 'https://dachi.work'

module.exports = {
  siteMetadata: {
    siteUrl,
    title: 'dachi023',
    description: "I forget if I don't write.",
    author: '@dachi_023',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'dachi',
        short_name: 'dachi',
        start_url: `/?utm_source=homescreen`,
        icon: 'images/icon.png',
        background_color: '#130f40',
        theme_color: '#30336b',
        display: 'minimal-ui',
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: { siteUrl, stripQueryString: true },
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: { outputPath: 'types/graphql-types.d.ts' },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#130f40',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'posts',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(({ node }) => ({
                title: node.frontmatter.title,
                description: node.frontmatter.description,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.fields.path,
                guid: site.siteMetadata.siteUrl + node.fields.path,
              }))
            },
            query: `
              {
                allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
                  edges {
                    node {
                      fields {
                        path
                      }
                      frontmatter {
                        title
                        description
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/posts/rss.xml',
            title: 'dachi.work RSS feed',
            feed_url: `${siteUrl}/posts/rss.xml`,
            site_url: `${siteUrl}/posts`,
          },
        ],
      },
    },
  ]
}
