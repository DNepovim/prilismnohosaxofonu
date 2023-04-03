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
        text: `
          <p>
            Saxofonové kvarteto <strong>Jaksi saxy</strong> vzniklo v roce
            <strong>2020</strong>, když si čtyři členové saxofonového orchestru
            <a
              href="https://www.prilismnohosaxofonu.cz"
              target="_blank"
              rel="noreferrer noopener"
              ><strong>Příliš mnoho saxofonů</strong></a> řekli, že by chtěli zkusit hrát i&nbsp;v&nbsp;menším
              uskupení.</p><p>Repertoár se nám neustále rozšiřuje. Mezi stálice patří
              ústřední melodie ze&nbsp;seriálu <strong>Game&nbsp;of&nbsp;Thrones</strong>, medley skladeb z&nbsp;<strong>Pirátů&nbsp;z&nbsp;Karibiku</strong>, <strong>Palladio</strong> skladatele <strong>Karla&nbsp;Jenkinse</strong>, <strong>Libertango
              Astora Piazzolly</strong>, pár skladeb kapely <strong>Beatles</strong> (<strong>All&nbsp;You&nbsp;Need&nbsp;Is
              &nbsp;Love</strong>, <strong>When&nbsp;I’m&nbsp;64</strong>…), od&nbsp;českých autorů <strong>Ježka</strong>, <strong>Voskovce</strong> a&nbsp;<strong>Wericha</strong>
              hrajeme skladby <strong>V&nbsp;domě&nbsp;střaší&nbsp;duch</strong> a&nbsp;<strong>Kat&nbsp;a&nbsp;blázen</strong>, v&nbsp;neposlední
              řadě hrajeme <strong>Rondeau&nbsp;from&nbsp;Abdelazer</strong> od&nbsp;<strong>Henryho&nbsp;Purcella</strong>.</p><p>Na&nbsp;soprán
              saxofon hraje <strong>Anna&nbsp;Bláhová</strong>, na&nbsp;alt saxofon <strong>David&nbsp;Makovský</strong>, na
              &nbsp;tenor saxofon <strong>Vojtěch&nbsp;Cehák</strong> a&nbsp;na&nbsp;nejhlubší (a&nbsp;zároveň největší)
              baryton saxofon hraje <strong>David&nbsp;Houška</strong>.</p><p>Všichni členové kvartetu nosí
              <strong>dioptrické brýle</strong>, což je naším poznávacím znamením.</strong>
          </p>
        `,
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
            text: "jsme@jaksisaxy.cz",
            link: "mailto:jsme@jaksisaxy.cz",
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
            text: "jsme@jaksisaxy.cz",
            link: "mailto:jsme@jaksisaxy.cz",
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
