import type { GatsbyConfig } from "gatsby"
import path from "path"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Příliš mnoho saxofonů`,
    siteUrl: `https://www.prilismnohosaxofonu.cz`,
    description: `Saxofonový orchestr z Prahy`,
    author: "Dominik Bláha — www.dominikblaha.cz",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Reem+Kufi+Fun:wght@500;`, `Montserrat:ital,wght@300;0,600;`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-google-calendar`,
      options: {
        calendarIds: ["8n0jfbuqg4n5v1lvol7b4n23b0@group.calendar.google.com"],
        timeMin: new Date().toISOString(),
        maxResults: 20,
        singleEvents: true,
        orderBy: "startTime",
      },
    },
  ],
}

export default config
