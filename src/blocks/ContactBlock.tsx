import styled from "@emotion/styled"
import React from "react"
import { Container } from "../components/Container"
import { Heading } from "../components/Heading"
import { Section } from "../components/Section"
import { FiMail } from "react-icons/fi/"

export const ContactBlock: React.FC = () => (
  <Section id="kontakt">
    <Container>
      <Heading>Kontakt</Heading>
      <CenteredText>
        <CenteredLink
          href="mailto:nikdyneni@prilismnohosaxofonu.cz"
          target="_blank"
        >
          <FiMail style={{ marginRight: "0.2em" }} />
          nikdyneni@prilismnohosaxofonu.cz
        </CenteredLink>
      </CenteredText>
    </Container>
  </Section>
)

const CenteredText = styled.p`
  max-width: 36em;
  @media (min-width: 500px) {
    margin: 0 0 0 4em;
  }
`

const CenteredLink = styled.a`
  display: flex;
  align-items: center;
`
