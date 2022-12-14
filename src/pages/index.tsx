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
    <title>Příliš mnoho saxofonů</title>
    <meta name="description" content="Saxofonový orchestr z Prahy" />
    <meta name="author" content="Dominik Bláha | jsem@dominikblaha.cz" />
    <meta name="url" content="https://www.prilismnohosaxofonu.cz" />
    <meta name="theme-color" content={theme.color.brand} />
    <meta name="og:title" content="Příliš mnoho saxofonů" />
    <meta name="og:description" content="Saxofonový orchestr z Prahy" />
    <meta property="og:type" content="article" />
    <meta
      property="og:image"
      content="https://www.prilismnohosaxofonu.cz/fbCover.png"
    />
  </>
)
