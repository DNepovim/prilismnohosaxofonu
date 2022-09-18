import styled from "@emotion/styled"
import React from "react"
import { Container } from "../components/Container"
import { Heading } from "../components/Heading"
import { Section } from "../components/Section"

export const TextBlock: React.FC = () => (
  <Section id="o-nas" title="O nás">
    <LargeText>
      <p>
        Studentský saxofonový orchestr <strong>„Příliš mnoho saxofonů“</strong>{" "}
        založil při ZUŠ Pelléova impresário <strong>Zdenko Kašpar</strong>{" "}
        v&nbsp;roce <strong>1995</strong>.
      </p>
      <p>
        Soubor je ojedinělý už svým obsazením, je složen pouze ze&nbsp;saxofonů.
        V&nbsp;ansáblu jsou zastoupeny všechny
        saxofon&nbsp;–&nbsp;od&nbsp;nejvyššího po&nbsp;nejhlubší.
      </p>
      <p>Repertoár tvoří skladby vážné, lehčí či&nbsp;jazzové.</p>
    </LargeText>
  </Section>
)

const LargeText = styled.div`
  font-size: 1.4rem;
`
