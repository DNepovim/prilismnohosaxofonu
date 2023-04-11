import { Blocks } from "./blocks"
import { ContactBlockProps, ContactType } from "./blocks/ContactBlock"
import { CoverBlockProps } from "./blocks/CoverBlock"
import { EventsBlockProps } from "./blocks/EventsBlock"
import { GalleryBlockProps } from "./blocks/GalleryBlock"
import { NavigationBlockProps } from "./blocks/NavigationBlock"
import { TextBlockProps } from "./blocks/TextBlock"

export enum Sites {
  Orchestra = "orchestra",
  Quarter = "quarter",
}

export enum Language {
  Cz = "cz",
  En = "en",
}

export interface Meta {
  title: string
  description: string
  url: string
  cover: string
}

export interface Block {
  block: Blocks
  data: NavigationBlockProps | CoverBlockProps | TextBlockProps | GalleryBlockProps | EventsBlockProps | ContactBlockProps
}

type Data = Record<Sites, Record<Language, { meta: Meta; blocks: Block[] }>>

export const data: Data = {
  [Sites.Orchestra]: {
    [Language.Cz]: {
      meta: {
        title: "Příliš mnoho saxofonů",
        description: "Saxofonový orchestr z Prahy",
        url: "https://www.prilismnohosaxofonu.cz",
        cover: "https://www.prilismnohosaxofonu.cz/ogImageOrchestr.png",
      },
      blocks: [
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
            saxofony&nbsp;–&nbsp;od basového po&nbsp;sopranino.
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
            images: [],
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
    },
    [Language.En]: {
      meta: {
        title: "Too many saxophones",
        description: "Saxophone orchestra from Prague",
        url: "https://www.prilismnohosaxofonu.cz",
        cover: "https://www.prilismnohosaxofonu.cz/ogImageOrchestr.png",
      },
      blocks: [
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
            images: [],
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
    },
  },
  [Sites.Quarter]: {
    [Language.Cz]: {
      meta: {
        title: "Jaksi saxy",
        description: "Saxofonový kvartet z Prahy",
        url: "https://www.jaksisaxy.cz",
        cover: "https://www.jaksisaxy.cz/ogImageKvartet.png",
      },
      blocks: [
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
            images: [],
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
    },
    [Language.En]: {
      meta: {
        title: "Jaksi saxy",
        description: "Saxophone quarter from Prague",
        url: "https://www.jaksisaxy.cz",
        cover: "https://www.jaksisaxy.cz/ogImageKvartet.png",
      },
      blocks: [
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
            firstTitle: "Jaksi",
            secondTitle: "saxy",
          },
        },
        {
          block: Blocks.Text,
          data: {
            id: "about",
            title: "About",
            text: `
          <p>
            The Saxophone Quartet <strong>Jaksi saxy</strong> was formed in <strong>2020</strong> when four members of the <a
              href="https://www.prilismnohosaxofonu.cz"
              target="_blank"
              rel="noreferrer noopener"><strong>Too Many Saxophones Orchestra</strong></a> said they wanted to try playing in a smaller group.</p>

            <p>Our repertoire is constantly expanding. Standbys include the theme tunes from the <strong>Game of Thrones</strong> series, a medley of songs from <strong>Pirates of the Caribbean</strong>, <strong>Palladio</strong> by composer <strong>Karl Jenkins</strong>, <strong>Libertango</strong> by <strong>Astor Piazzolla</strong>, a couple of songs by the <strong>Beatles (All You Need Is Love, When I'm 64... )</strong>, from Czech composers <strong>Ježek</strong>, <strong>Voskovec</strong> and <strong>Werich</strong> we play the compositions <strong>In the House of the Ghost</strong> and <strong>The Hangman and the Fool</strong>, last but not least we play <strong>Rondeau from Abdelazer</strong> by <strong>Henry Purcell</strong>.</p>

            <p>The soprano saxophone is played by <strong>Anna Bláhová</strong>, the alto saxophone by <strong>David Makovský</strong>, the tenor saxophone by <strong>Vojtěch Cehák</strong> and the deepest (and biggest) baritone saxophone by <strong>David Houška</strong>.</p>

            <p>All members of the quartet wear <strong>dioptric glasses</strong>, which is our hallmark.</strong>
          </p>`,
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
            images: [],
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
    },
  },
}
