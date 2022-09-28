import { Blocks } from "./blocks"
import { ContactBlockProps, ContactType } from "./blocks/ContactBlock"
import { CoverBlockProps } from "./blocks/CoverBlock"
import { EventsBlockProps } from "./blocks/EventsBlock"
import { GalleryBlockProps } from "./blocks/GalleryBlock"
import { NavigationBlockProps } from "./blocks/NavigationBlock"
import { TextBlockProps } from "./blocks/TextBlock"

export enum Language {
  Cz = "cz",
  En = "en",
}

type Data = Record<
  Language,
  {
    block: Blocks
    data:
      | NavigationBlockProps
      | CoverBlockProps
      | TextBlockProps
      | GalleryBlockProps
      | EventsBlockProps
      | ContactBlockProps
  }[]
>

export const data: Data = {
  [Language.Cz]: [
    {
      block: Blocks.Navigation,
      data: {
        id: "nav",
        items: [
          { title: "🎷", link: "#uvod" },
          { title: "O nás", link: "#o-nas" },
          { title: "Kontakty", link: "#kontakty" },
          { title: "En", link: "en" },
        ],
      },
    },
    {
      block: Blocks.Cover,
      data: {
        id: "uvod",
        firstTitle: "Jaksi",
        secondTitle: "saxy",
      },
    },
    {
      block: Blocks.Text,
      data: {
        id: "o-nas",
        title: "O nás",
        text: `<p>Jsme saxofonový kvartet z Prahy.</p>`,
      },
    },
    {
      block: Blocks.Contact,
      data: {
        id: "kontakty",
        title: "Kontakty",
        contacts: [
          {
            type: ContactType.Mail,
            text: "taksi@jaksisaxy.cz",
            link: "mailto:taksi@jaksisaxy.cz",
          },
          {
            type: ContactType.Instagram,
            text: "jaksisaxy",
            link: "https://www.instagram.com/jaksisaxy/",
          },
        ],
      },
    },
  ],
  [Language.En]: [
    {
      block: Blocks.Navigation,
      data: {
        id: "nav",
        items: [
          { title: "🎷", link: "#title" },
          { title: "About", link: "#about" },
          { title: "Contacts", link: "#contacts" },
          { title: "Cz", link: "/" },
        ],
      },
    },
    {
      block: Blocks.Cover,
      data: {
        id: "title",
        firstTitle: "Jaksi",
        secondTitle: "saxy",
      },
    },
    {
      block: Blocks.Text,
      data: {
        id: "about",
        title: "About",
        text: `<p>The saxophone quartet from Prague</p>`,
      },
    },
    {
      block: Blocks.Contact,
      data: {
        id: "contacts",
        title: "Contacts",
        contacts: [
          {
            type: ContactType.Mail,
            text: "taksi@jaksisaxy.cz",
            link: "mailto:taksi@jaksisaxy.cz",
          },
          {
            type: ContactType.Instagram,
            text: "jaksisaxy",
            link: "https://www.instagram.com/jaksisaxy/",
          },
        ],
      },
    },
  ],
}
