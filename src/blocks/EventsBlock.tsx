import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { BlockProps } from "../blocks"
import { Section } from "../components/Section"
import { theme } from "../theme"
import { tp } from "../utils/tp"

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

export type EventsBlockProps = BlockProps

export const EventsBlock: React.FC<EventsBlockProps> = ({ id, title }) => {
  const {
    allCalendarEvent: { edges: events },
  } = useStaticQuery<CalendarResponse>(graphql`
    query {
      allCalendarEvent {
        edges {
          node {
            id
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
    <Section id={id} title={title}>
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
  const title = tp(summary)
  return (
    <Row>
      <StyledDate>
        {startDate.toLocaleDateString("cs-CZ", {
          timeZone: "CET",
          month: "short",
          day: "numeric",
        })}
      </StyledDate>
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
        {!allDay && (
          <Time>
            {startDate.toLocaleTimeString("cs-CZ", {
              timeZone: "CET",
              timeStyle: "short",
            })}
          </Time>
        )}
        {!allDay && location && ", "}
        {location && <Time>{tp(location)}</Time>}
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6em;
  padding: 1rem;
  flex: 0 0 4.4rem;
  font-family: ${theme.fonts.heading};
  font-weight: bold;
  text-align: center;

  @media (min-width: 700px) {
    font-size: 2.2em;
    padding: 1.6rem;
    flex: 0 0 6.4rem;
  }
`

const Desc = styled.div`
  padding: 1.6rem 1rem;
`

const Title = styled.h3`
  font-size: 1.4em;
  font-weight: 600;
  margin: 0 0 0.1em;
  @media (min-width: 700px) {
    font-size: 1.6em;
  }
`

const Time = styled.span``
