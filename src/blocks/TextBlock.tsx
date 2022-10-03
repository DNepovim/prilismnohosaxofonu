import React from "react"
import { BlockProps } from "../blocks"
import { LargeText } from "../components/LargeText"
import { Section } from "../components/Section"

export interface TextBlockProps extends BlockProps {
  text: string
}

export const TextBlock: React.FC<TextBlockProps> = ({ id, title, text }) => (
  <Section id={id} title={title}>
    <LargeText dangerouslySetInnerHTML={{ __html: text }} />
  </Section>
)
