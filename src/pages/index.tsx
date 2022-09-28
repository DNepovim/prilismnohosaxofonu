import * as React from "react"
import type { HeadFC } from "gatsby"
import { Global } from "@emotion/react"
import { globalStyles } from "../globalStyles"
import { theme } from "../theme"
import { data, Language } from "../data"
import { blocksComponents } from "../blocks"

const IndexPage = () => {
  return (
    <main>
      <Global styles={globalStyles} />
      {data[Language.Cz].map((item) =>
        React.createElement(blocksComponents[item.block] as any, {
          ...(item.data as any),
          key: item.data.id,
        })
      )}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Jaksisaxy</title>
    <meta name="description" content="Saxofonový kvartet z Prahy" />
    <meta name="author" content="Dominik Bláha | jsem@dominikblaha.cz" />
    <meta name="url" content="https://www.jaksisaxy.cz" />
    <meta name="theme-color" content={theme.color.brand} />
    <meta name="og:title" content="Jaksisaxy" />
    <meta name="og:description" content="Saxofonový kvartet z Prahy" />
    <meta property="og:type" content="article" />
  </>
)
