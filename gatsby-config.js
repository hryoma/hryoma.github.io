module.exports = {
  siteMetadata: {
    title: `Ryoma Harris`,
    description: `Hi, I'm Ryoma, a computer science major at UPenn.`,
    author: `@hryoma`,
    keywords: `computer science, cybersecurity, software developer, web development, frontend, backend`,
    siteUrl: `https://ryoma.dev`,
  },
  plugins: [
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
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ryoma Harris`,
        short_name: `Ryoma`,
        start_url: `/`,
        icon: `src/assets/icons/favicon.png`,
      },
    },
  ],
}
