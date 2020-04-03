let contentfulConfig
try {
  contentfulConfig = require('./.contentful')
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
    },
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig.production
  if (!spaceId || !accessToken) {
    throw new Error('Contentful space ID and access token need to be provided.')
  }
}

module.exports = {
  siteMetadata: {
    title: 'I AM MATTHIAS',
    description: 'A personal portfolio project',
    siteUrl: 'https://iammatthias.com',
    menuLinks: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'Photography',
        slug: '/photography/',
      },
      {
        name: 'Blog',
        slug: '/blog/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
    ],
    postsPerFirstPage: 6,
    postsPerPage: 6,
    basePath: '/',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-printer`,
      options: {
        puppeteerLaunchOptions: {
          headless: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Abril Fatface`, `Open Sans`, `Inconsolata`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-contentful',
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: process.env.SEGMENT,
        trackPage: true,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'I AM MATTIAS',
        short_name: 'IAM',
        start_url: '/',
        background_color: '#140D00',
        theme_color: '#140D00',
        display: 'minimal-ui',
        icon: './static/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `./src/gatsby/schema/schema.gql`,
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
      },
    },
    'gatsby-plugin-netlify',
  ],
}
