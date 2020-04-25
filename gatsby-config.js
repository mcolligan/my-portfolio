module.exports = {
  plugins: [
    '@hashinteractive/gatsby-theme-reactor',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/assets/
        }
      }
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node }) => node.name
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Titillium', 'Droid Serif']
        }
      }
    },
    'gatsby-plugin-theme-ui'
  ],
  siteMetadata: {
    title: 'Myles Colligan'
  }
}