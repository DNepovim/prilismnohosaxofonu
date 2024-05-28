import * as React from "react"
import { graphql, PageProps, type HeadFC } from "gatsby"
import { Global } from "@emotion/react"
import { globalStyles } from "../globalStyles"
import { theme } from "../theme"
import { data as staticData, Language, Sites } from "../data"
import { Blocks, blocksComponents } from "../blocks"

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const site = process.env.GATSBY_SITE as Sites
  return (
    <main>
      <Global styles={globalStyles} />
      {staticData[site][Language.Cz].map((item) =>
        React.createElement(blocksComponents[item.block] as any, {
          ...(item.data as any),
          key: item.data.id,
          ...(item.block === Blocks.Gallery ? { images: data.allFile.edges } : {}),
        })
      )}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Příliš mnoho saxofonů</title>
    <meta name="description" content="Saxofonový orchestr z Prahy" />
    <meta name="author" content="Dominik Bláha | jsem@dominikblaha.cz" />
    <meta name="url" content="https://www.prilismnohosaxofonu.cz" />
    <meta name="theme-color" content={theme.color.brand} />
    <meta name="og:title" content="Příliš mnoho saxofonů" />
    <meta name="og:description" content="Saxofonový orchestr z Prahy" />
    <meta property="og:type" content="article" />
    <meta property="og:image" content="https://www.prilismnohosaxofonu.cz/fbCover.png" />
  </>
)

export const query = graphql`
  query IndexPage {
    allFile(filter: { relativeDirectory: { eq: "gallery" } }, sort: { relativePath: ASC }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
          id
        }
      }
    }
  }
`
