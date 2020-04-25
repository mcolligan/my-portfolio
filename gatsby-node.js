const fs = require('fs')

//do not import mapbox on ssr
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /mapbox-gl/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }, options) => {
  const dataPath = options.dataPath || "src/data"

  if (!fs.existsSync(dataPath)) {
    reporter.info(`creating the ${dataPath} directory`)
    fs.mkdirSync(dataPath, { recursive: true })
  }
}

// Define the "Project" type
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Project implements Node @dontInfer {
      id: ID!
      name: String!
      technologies: [String!]!
      start: Date! @dateformat
      end: Date! @dateformat
      url: String!
      slug: String!
      image: File
      description: String!
    }
    type Social {
      name: String!
      url: String!
    }
    type Bio implements Node @dontInfer {
      id: ID!
      name: String!
      greeting: String!
      title: String!
      description: String!
      social: [Social]
      skills: [String]
      location: String
      email: String
      phone: String
    }
  `)
}

exports.createResolvers = ({ createResolvers }) => {
  const basePath = "project"
  // Quick-and-dirty helper to convert strings into URL-friendly slugs.
  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")
    return `/${basePath}/${slug}`.replace(/\/\/+/g, "/")
  }
  const uuid = str => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")
  }
  createResolvers({
    Project: {
      slug: {
        resolve: source => slugify(source.name),
      },
      image: {
        type: "File",
        resolve: (source, args, context) => {
          return context.nodeModel.runQuery({
            query: {
              filter: {
                name: {
                  eq: uuid(source.name)
                }
              }
            },
            type: "File",
            firstOnly: true,
          })
        }
      }
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectPages = await graphql(`
    query {
      allProject {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  //check if there is index.js in /src/pages folder
  const indexPage = await graphql(`
    query {
      sitePage(path: {eq: "/"}, component: {eq: "${__dirname}/src/pages/index.js"}) {
        id
      }
    }
  `)
  projectPages.data.allProject.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: require.resolve(`./src/templates/project.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        projectID: node.id
      },
    })
  })
  // create a sitepage at index if it doesn't exist
  if(!indexPage.data.sitePage){
    createPage({
      path: "/",
      component: require.resolve(`./src/templates/default.js`)
    })
  }
}