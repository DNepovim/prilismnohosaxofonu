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
    <title>Jaksisaxy</title>
    <meta name="description" content="The saxophone quartet from Prague" />
    <meta name="author" content="Dominik Bláha | jsem@dominikblaha.cz" />
    <meta name="url" content="https://www.jaksisaxy.cz/en" />
    <meta name="theme-color" content={theme.color.brand} />
    <meta name="og:title" content="Jaksisaxy" />
    <meta name="og:description" content="The saxophone quartet from Prague" />
    <meta property="og:type" content="article" />
  </>
)
