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
          { title: "Koncerty", link: "#koncerty" },
          { title: "Galerie", link: "#galerie" },
          { title: "Kontakty", link: "#kontakty" },
          { title: "En", link: "en" },
        ],
      },
    },
    {
      block: Blocks.Cover,
      data: {
        id: "uvod",
        firstTitle: "Příliš mnoho",
        secondTitle: "saxofonů",
      },
    },
    {
      block: Blocks.Text,
      data: {
        id: "o-nas",
        title: "O nás",
        text: `
          <p>
            Saxofonový orchestr „<strong>Příliš mnoho saxofonů</strong>“ založil
            při ZUŠ Pelléova impresário <strong>Zdenko Kašpar</strong> v&nbsp;roce <strong>1994</strong>.
            V&nbsp;současné době se&nbsp;orchestr skládá převážně
            z&nbsp;bývalých žáků impresária a&nbsp;i&nbsp;jeho zkoušky
            se&nbsp;přesunuly mimo prostory školy.
          </p>
          <p>
            Soubor je ojedinělý už svým obsazením, je složen <strong>pouze
            ze&nbsp;saxofonů</strong>. V&nbsp;ansámblu jsou zastoupeny všechny
            saxofon&nbsp;–&nbsp;od basového po&nbsp;sopranino.
          </p>
          <p>
            Orchestr v&nbsp;minulosti několikrát přivezl <strong>úspěchy a&nbsp;ceny</strong>
            z&nbsp;řady soutěží.
          </p>
          <p>
            Repertoár tvoří skladby vážné, za&nbsp;zmínku stojí <strong>Slovanský tanec</strong>
            od&nbsp;<strong>Antonína Dvořáka</strong> či&nbsp;koledy od&nbsp;<strong>Adama Michny</strong>, lehčí,
            jako například <strong>Pochod stoprocentních mužů</strong> či <strong>Šumění deště</strong> od <strong>Václava
            Pokorného</strong> a&nbsp;jazzové, z&nbsp;nich lze zmínit <strong>Entertainer</strong> či
            <strong>Ragtime dance</strong> od&nbsp;<strong>Scotta Joplina</strong>.
          </p>
        `,
      },
    },
    {
      block: Blocks.Events,
      data: {
        id: "koncerty",
        title: "Koncerty",
        empty: "V tuto chvíli nemáme naplánované žádné koncerty.",
      },
    },
    {
      block: Blocks.Gallery,
      data: {
        id: "galerie",
        title: "Galerie",
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
            text: "nikdyneni@prilismnohosaxofonu.cz",
            link: "mailto:nikdyneni@prilismnohosaxofonu.cz",
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
          { title: "Concerts", link: "#concerts" },
          { title: "Gallery", link: "#gallery" },
          { title: "Contacts", link: "#contacts" },
          { title: "Cz", link: "/" },
        ],
      },
    },
    {
      block: Blocks.Cover,
      data: {
        id: "title",
        firstTitle: "Too many",
        secondTitle: "saxophones",
      },
    },
    {
      block: Blocks.Text,
      data: {
        id: "about",
        title: "About",
        text: `
			<p>The saxophone orchestra of Prague <strong>“Příliš mnoho saxofonů” - “Too many saxophones”</strong> - was established by bandmaster <strong>Zdenko Kašpar</strong> in <strong>1994</strong>.</p>
      <p>The orchestra is a unique ensemble of only saxophones – from soprano to bass.</p>
			`,
      },
    },
    {
      block: Blocks.Events,
      data: {
        id: "concerts",
        title: "Concerts",
        empty: "We do not have any concerts scheduled at this time.",
      },
    },
    {
      block: Blocks.Gallery,
      data: {
        id: "gallery",
        title: "Gallery",
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
            text: "nikdyneni@prilismnohosaxofonu.cz",
            link: "mailto:nikdyneni@prilismnohosaxofonu.cz",
          },
        ],
      },
    },
  ],
}
