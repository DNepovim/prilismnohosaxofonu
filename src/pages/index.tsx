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

const IndexPage = () => {
  return (
    <main>
      <Global styles={globalStyles} />
      <Navigation
        items={[
          { title: "Úvod", link: "#uvod" },
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

export const Head: HeadFC = () => <title>Příliš mnoho saxofonů</title>
