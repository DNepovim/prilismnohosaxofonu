import type { GatsbyConfig } from "gatsby"
import path from "path"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-emotion`,
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
        path: path.join(
          __dirname,
          `src`,
          `images`,
          process.env.GATSBY_SITE ?? ""
        ),
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
        calendarIds: [process.env.GATSBY_GOOGLE_CALENDAR_ID],
        timeMin: new Date().toISOString(),
        maxResults: 20,
        singleEvents: true,
        orderBy: "startTime",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}

export default config
