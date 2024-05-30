import * as React from "react"
import { graphql, PageProps, type HeadFC } from "gatsby"
import { Global } from "@emotion/react"
import { globalStyles } from "../globalStyles"
import { theme } from "../theme"
import { data as staticData, Language, Sites } from "../data"
import { Blocks, blocksComponents } from "../blocks"
import styled from "@emotion/styled"

const site = process.env.GATSBY_SITE as Sites
const { meta, blocks } = staticData[site][Language.En]

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => (
  <>
    <Main>
      <Global styles={globalStyles} />
      {blocks.map((item) =>
        React.createElement(blocksComponents[item.block] as any, {
          ...(item.data as any),
          key: item.data.id,
          ...(item.block === Blocks.Gallery ? { images: data.allFile.edges } : {}),
        })
      )}
    </Main>
    <Credtis>
      Web composed by{" "}
      <a href="mailto:jsem@dominikblaha.cz" target="_blank">
        Dominik Bláha
      </a>
      .
    </Credtis>
  </>
)

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

const Main = styled.main`
  padding-bottom: 2em;
`

const Credtis = styled.p`
  color: #adadad;
  font-size: 0.6rem;
  text-align: right;
  padding: 1em;
  margin: 0;
  a {
    color: ${theme.color.brand};
  }
`
