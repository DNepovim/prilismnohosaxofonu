import styled from "@emotion/styled"
import React from "react"
import { BlockProps } from "../blocks"
import { Section } from "../components/Section"

export interface TextBlockProps extends BlockProps {
  text: string
}

export const TextBlock: React.FC<TextBlockProps> = ({ id, title, text }) => (
  <Section id={id} title={title}>
    <LargeText dangerouslySetInnerHTML={{ __html: text }} />
  </Section>
)

const LargeText = styled.div`
  font-size: 1.4rem;
`
