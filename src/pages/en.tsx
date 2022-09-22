import * as React from "react"
import type { HeadFC } from "gatsby"
import { Global } from "@emotion/react"
import { globalStyles } from "../globalStyles"
import { theme } from "../theme"
import { data, Language } from "../data"
import { blocksComponents } from "../blocks"

const EnPage = () => {
  return (
    <main>
      <Global styles={globalStyles} />
      {data[Language.En].map((item) =>
        React.createElement(blocksComponents[item.block] as any, {
          ...(item.data as any),
          key: item.data.id,
        })
      )}
    </main>
  )
}

export default EnPage

export const Head: HeadFC = () => (
  <>
    <title>Too many saxophones</title>
    <meta name="description" content="The saxophone orchestra of Prague" />
    <meta name="author" content="Dominik Bláha | jsem@dominikblaha.cz" />
    <meta name="url" content="https://www.prilismnohosaxofonu.cz/en" />
    <meta name="theme-color" content={theme.color.brand} />
    <meta name="og:title" content="Too many saxophones" />
    <meta name="og:description" content="The saxophone orchestra of Prague" />
    <meta property="og:type" content="article" />
    <meta
      property="og:image"
      content="https://www.prilismnohosaxofonu.cz/fbCover.png"
    />
  </>
)
