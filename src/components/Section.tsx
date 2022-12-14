import styled from "@emotion/styled"
import React, { ReactNode } from "react"
import { theme } from "../theme"
import { Container } from "./Container"
import { Heading } from "./Heading"

export const Section: React.FC<{
  children?: ReactNode
  id?: string
  title?: string
}> = ({ children, id, title }) => (
  <StyledSection id={id}>
    {title && <Heading>{title}</Heading>}
    <Container>{children}</Container>
  </StyledSection>
)

const StyledSection = styled.section`
  max-width: ${theme.layout.widths.default};
  margin: 0 auto;
  padding: 3.5rem ${theme.layout.paddings.side} 1.5rem;
`
