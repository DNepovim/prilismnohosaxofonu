import { ContactBlock } from "./blocks/ContactBlock"
import { CoverBlock } from "./blocks/CoverBlock"
import { EventsBlock } from "./blocks/EventsBlock"
import { GalleryBlock } from "./blocks/GalleryBlock"
import { NavigationBlock } from "./blocks/NavigationBlock"
import { TextBlock } from "./blocks/TextBlock"

export enum Blocks {
  Navigation = "navigation",
  Cover = "cover",
  Text = "text",
  Gallery = "gallery",
  Events = "events",
  Contact = "contact",
}

export const blocksComponents = {
  [Blocks.Navigation]: NavigationBlock,
  [Blocks.Cover]: CoverBlock,
  [Blocks.Text]: TextBlock,
  [Blocks.Gallery]: GalleryBlock,
  [Blocks.Events]: EventsBlock,
  [Blocks.Contact]: ContactBlock,
}

export interface BlockProps {
  id: string
  title?: string
}
