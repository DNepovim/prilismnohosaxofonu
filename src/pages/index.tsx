import * as React from "react"
import type { HeadFC } from "gatsby"
import { Navigation } from "../components/Navigation"
import { Global } from "@emotion/react"
import { globalStyles } from "../globalStyles"
import { CoverBlock } from "../blocks/CoverBlock"
import { TextBlock } from "../blocks/TextBlock"
import { GalleryBlock } from "../blocks/GalleryBlock"
import { ContactBlock } from "../blocks/ContactBlock"
import { DatesBlock } from "../blocks/DatesBlock"
import { theme } from "../theme"

const IndexPage = () => {
  return (
    <main>
      <Global styles={globalStyles} />
      <Navigation
        items={[
          { title: "🎷", link: "#uvod" },
          { title: "O nás", link: "#o-nas" },
          { title: "Koncerty", link: "#koncerty" },
          { title: "Galerie", link: "#galerie" },
          { title: "Kontakt", link: "#kontakt" },
        ]}
      />
      <CoverBlock />
      <TextBlock />
      <DatesBlock />
      <GalleryBlock />
      <ContactBlock />
    </main>
  )
}

export default IndexPage

export const Head = () => (
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
