import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Container } from "../components/Container"
import { Heading } from "../components/Heading"
import { Section } from "../components/Section"
import { theme } from "../theme"

interface CalendarResponse {
  allCalendarEvent: {
    edges: {
      node: Event
    }[]
  }
}

interface Event {
  id: string
  description: string
  allDay: boolean
  summary: string
  start: { dateTime: string }
  internal: {
    content: string
  }
}

export const DatesBlock: React.FC = () => {
  const {
    allCalendarEvent: { edges: events },
  } = useStaticQuery<CalendarResponse>(graphql`
    query {
      allCalendarEvent {
        edges {
          node {
            allDay
            description
            summary
            end {
              dateTime
            }
            start {
              dateTime
            }
            internal {
              content
            }
          }
        }
      }
    }
  `)

  return (
    <Section id="koncerty" title="Koncerty">
      {events.map(({ node: event }) => (
        <EventRow key={event.id} {...event} />
      ))}
    </Section>
  )
}

const EventRow: React.FC<Event> = ({
  summary,
  description,
  allDay,
  start,
  internal,
}) => {
  const startDate = new Date(start.dateTime)
  const { location } = JSON.parse(internal.content) as { location: string }
  const matches = description.match(/"(https?:\/\/\S+)"/gi)
  const link = matches?.length ? matches[0].replaceAll('"', "") : undefined
  return (
    <Row>
      <StyledDate>
        {startDate.toLocaleDateString("cs-CZ", {
          month: "short",
          day: "numeric",
        })}
      </StyledDate>
      <Desc>
        <Title>
          {link ? (
            <a href={link} target="_blank" rel="noopener norefferer">
              {summary}
            </a>
          ) : (
            summary
          )}
        </Title>
        {!allDay && (
          <Time>
            {startDate.toLocaleTimeString("cz", { timeStyle: "short" })}
          </Time>
        )}
        {!allDay && location && ", "}
        {location && <Time>{location}</Time>}
      </Desc>
    </Row>
  )
}

const Row = styled.div`
  display: flex;
  border: 4px solid ${theme.color.brand}50;
  background-color: white;

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

const StyledDate = styled.time`
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
