module.exports = {
    pathPrefix: "/hryoma.github.io",
  siteMetadata: {
    title: `Ryoma Harris`,
    description: `Hi, I'm Ryoma, a computer science major at UPenn.`,
    author: `@hryoma`,
    keywords: `computer science, cybersecurity, software developer, web development, frontend, backend`,
    siteUrl: `https://ryoma.dev`,
    image: `assets/icons/icon-site.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
        ignore: [`**/\.*`]
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/svg\/.*svg$/,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1000,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
              aliases: {
                zsh: "bash",
              },
            }
          },
        ],
      },
    },
  ],
}
