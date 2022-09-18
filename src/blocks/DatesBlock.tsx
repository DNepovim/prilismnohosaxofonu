import styled from "@emotion/styled"
import React from "react"
import { Container } from "../components/Container"
import { Heading } from "../components/Heading"
import { Section } from "../components/Section"
import { theme } from "../theme"

const dates = [
  {
    date: "17. 9.",
    time: "16:00",
    title: "Kavárna Fejeton",
    venue: "Úvoz",
    link: "https://www.facebook.com/events/609190224049047",
  },
  { date: "24. 9.", title: "Rudolfinum", venue: "Staré město" },
  { date: "30. 9.", title: "Skautský institut v Rybárně", venue: "Kampa" },
]

export const DatesBlock: React.FC = () => (
  <Section id="koncerty">
    <Container>
      <Heading>Nadcházející koncerty</Heading>
      {dates.map(({ title, date, time, venue, link }) => (
        <Row>
          <Date>{date}</Date>
          <Desc>
            <Title>
              {link ? (
                <a href={link} target="_blank" rel="noopener norefferer">
                  {title}
                </a>
              ) : (
                title
              )}
            </Title>
            {time && <Time>{time}</Time>}
            {time && venue && ", "}
            {venue && <Time>{venue}</Time>}
          </Desc>
        </Row>
      ))}
    </Container>
  </Section>
)

const Row = styled.div`
  display: flex;
  border: 4px solid ${theme.color.brand}50;

  &:first-of-type {
    border-radius: 10px 10px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 10px 10px;
  }

  &:not(:last-of-type) {
    border-bottom: none;
  }
`

const Date = styled.time`
  padding: 1.6rem;
  width: 2.4em;
  font-family: ${theme.fonts.heading};
  font-size: 2.2em;
  font-weight: bold;
  text-align: center;
`

const Desc = styled.div`
  padding: 1.6rem 1rem;
`

const Title = styled.h3`
  font-size: 1.6em;
  font-weight: 600;
  margin: 0 0 0.1em;
`

const Time = styled.span``
