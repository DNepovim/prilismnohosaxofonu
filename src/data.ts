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
        Studentský saxofonový orchestr <strong>„Příliš mnoho saxofonů“</strong>
        založil při ZUŠ Pelléova impresário <strong>Zdenko Kašpar</strong>
        v&nbsp;roce <strong>1994</strong>.
      </p>
      <p>
        Soubor je ojedinělý už svým obsazením, je složen pouze ze&nbsp;saxofonů.
        V&nbsp;ansáblu jsou zastoupeny všechny
        saxofon&nbsp;–&nbsp;od&nbsp;nejvyššího po&nbsp;nejhlubší.
      </p>
      <p>Repertoár tvoří skladby vážné, lehčí či&nbsp;jazzové.</p>
			`,
      },
    },
    {
      block: Blocks.Events,
      data: {
        id: "koncerty",
        title: "Koncerty",
        empty: "V tuto chvíli nemáme naplánované žádné události.",
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
        empty: "We do not have any events scheduled at this time.",
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
