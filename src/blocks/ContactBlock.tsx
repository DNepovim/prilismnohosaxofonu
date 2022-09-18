import styled from "@emotion/styled"
import React from "react"
import { Container } from "../components/Container"
import { Heading } from "../components/Heading"
import { Section } from "../components/Section"
import { FiMail } from "react-icons/fi/"

export const ContactBlock: React.FC = () => (
  <Section id="kontakt" title="Kontakt">
    <p>
      <CenteredLink
        href="mailto:nikdyneni@prilismnohosaxofonu.cz"
        target="_blank"
      >
        <FiMail style={{ marginRight: "0.2em" }} />
        nikdyneni@prilismnohosaxofonu.cz
      </CenteredLink>
    </p>
  </Section>
)

const CenteredLink = styled.a`
  display: flex;
  align-items: center;
`
