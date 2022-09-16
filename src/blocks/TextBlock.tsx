import styled from "@emotion/styled"
import React from "react"
import { Container } from "../components/Container"
import { Heading } from "../components/Heading"
import { Section } from "../components/Section"

export const TextBlock: React.FC = () => (
  <Section id="o-nas">
    <Container>
      <Heading>O nás</Heading>
      <CenteredText>
        Studentský saxofonový orchestr <strong>„Příliš mnoho saxofonů“</strong>{" "}
        založil při ZUŠ Pelléova impresário <strong>Zdenko Kašpar</strong>{" "}
        v&nbsp;roce <strong>1995</strong>.
      </CenteredText>
      <CenteredText>
        Soubor je ojedinělý už svým obsazením, je složen pouze ze&nbsp;saxofonů.
        V&nbsp;ansáblu jsou zastoupeny všechny
        saxofon&nbsp;–&nbsp;od&nbsp;nejvyššího po&nbsp;nejhlubší.
      </CenteredText>
      <CenteredText>
        Repertoár tvoří skladby vážné, lehčí či&nbsp;jazzové.
      </CenteredText>
    </Container>
  </Section>
)

const CenteredText = styled.p`
  margin: 1rem;

  @media (min-width: 500px) {
    margin: 0 0 1em 4rem;
    max-width: 36em;
  }
`
