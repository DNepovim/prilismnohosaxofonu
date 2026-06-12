import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"
import React, { useEffect, useState } from "react"
import { BlockProps } from "../blocks"
import { LargeText } from "../components/LargeText"
import { Section } from "../components/Section"
import { theme } from "../theme"
import { tp } from "../utils/tp"

interface CalendarApiEvent {
  id: string
  summary?: string
  description?: string
  location?: string
  start: { dateTime?: string; date?: string }
  end: { dateTime?: string; date?: string }
}

interface CalendarApiResponse {
  items?: CalendarApiEvent[]
}

interface Event {
  id: string
  summary: string
  description: string
  location?: string
  allDay: boolean
  startDate: Date
}

export interface EventsBlockProps extends BlockProps {
  empty: string
}

const CALENDAR_ID = process.env.GATSBY_GOOGLE_CALENDAR_ID
const API_KEY = process.env.GATSBY_GOOGLE_API_KEY

export const EventsBlock: React.FC<EventsBlockProps> = ({
  id,
  title,
  empty,
}) => {
  const [events, setEvents] = useState<Event[] | null>(null)

  useEffect(() => {
    if (!CALENDAR_ID || !API_KEY) {
      setEvents([])
      return
    }
    const controller = new AbortController()
    const url = new URL(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        CALENDAR_ID
      )}/events`
    )
    url.searchParams.set("key", API_KEY)
    url.searchParams.set("timeMin", new Date().toISOString())
    url.searchParams.set("maxResults", "20")
    url.searchParams.set("singleEvents", "true")
    url.searchParams.set("orderBy", "startTime")

    fetch(url.toString(), { signal: controller.signal })
      .then(async res => {
        if (!res.ok) {
          const body = await res.text()
          throw new Error(`Calendar API ${res.status}: ${body}`)
        }
        return res.json() as Promise<CalendarApiResponse>
      })
      .then(data => setEvents((data.items ?? []).map(toEvent)))
      .catch(err => {
        if (err?.name === "AbortError") return
        console.error("[EventsBlock] failed to load calendar events", err)
        setEvents([])
      })

    return () => controller.abort()
  }, [])

  return (
    <Section id={id} title={title}>
      {events === null ? (
        <EventsSkeleton />
      ) : events.length ? (
        events.map(event => <EventRow key={event.id} {...event} />)
      ) : (
        <LargeText>{empty}</LargeText>
      )}
    </Section>
  )
}

const toEvent = (item: CalendarApiEvent): Event => {
  const allDay = Boolean(item.start.date && !item.start.dateTime)
  const startIso = item.start.dateTime ?? item.start.date ?? ""
  return {
    id: item.id,
    summary: item.summary ?? "",
    description: item.description ?? "",
    location: item.location,
    allDay,
    startDate: new Date(startIso),
  }
}

const EventRow: React.FC<Event> = ({
  summary,
  description,
  location,
  allDay,
  startDate,
}) => {
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
        {!allDay && (
          <Time>
            {startDate.toLocaleTimeString("cs-CZ", {
              timeZone: "CET",
              timeStyle: "short",
            })}
          </Time>
        )}
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
        {location && tp(location)}
      </Desc>
    </Row>
  )
}

const EventsSkeleton: React.FC = () => (
  <>
    {Array.from({ length: 3 }).map((_, i) => (
      <Row key={i} aria-hidden>
        <StyledDate>
          <SkeletonLine style={{ width: "2.6em", height: "1em" }} />
          <SkeletonLine
            style={{ width: "2.2em", height: "0.7em", marginTop: "0.4em" }}
          />
        </StyledDate>
        <Desc style={{ flex: 1 }}>
          <SkeletonLine style={{ width: "70%", height: "1.4em" }} />
          <SkeletonLine
            style={{ width: "40%", height: "1em", marginTop: "0.5em" }}
          />
        </Desc>
      </Row>
    ))}
  </>
)

const Row = styled.div`
  display: flex;
  border: 4px solid ${theme.color.brand}50;
  background-color: white;

  &:first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:not(:last-of-type) {
    border-bottom: none;
  }
`

const StyledDate = styled.time`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.6em;
  line-height: 1em;
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
const Time = styled.span`
  font-size: 1rem;
  line-height: 1em;
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

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`

const SkeletonLine = styled.div`
  border-radius: 4px;
  background: linear-gradient(
    90deg,
    ${theme.color.beige} 0%,
    #e8e6dc 50%,
    ${theme.color.beige} 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s ease-in-out infinite;
`
