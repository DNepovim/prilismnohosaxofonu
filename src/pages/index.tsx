import * as React from "react"
import { graphql, PageProps, type HeadFC } from "gatsby"
import { Global } from "@emotion/react"
import { globalStyles } from "../globalStyles"
import { theme } from "../theme"
import { data as staticData, Language, Sites } from "../data"
import { Blocks, blocksComponents } from "../blocks"

const site = process.env.GATSBY_SITE as Sites
const { meta, blocks } = staticData[site][Language.Cz]

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <main>
      <Global styles={globalStyles} />
      {blocks.map((item) =>
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
    <title>{meta.title}</title>
    <meta name="description" content={meta.description} />
    <meta name="author" content="Dominik Bláha | jsem@dominikblaha.cz" />
    <meta name="url" content={meta.url} />
    <meta name="theme-color" content={theme.color.brand} />
    <meta name="og:title" content={meta.title} />
    <meta name="og:description" content={meta.description} />
    <meta property="og:type" content="article" />
    <meta property="og:image" content={meta.cover} />
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
