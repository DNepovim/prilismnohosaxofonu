import styled from "@emotion/styled"
import React from "react"
import { Section } from "../components/Section"
import { FiInstagram, FiMail } from "react-icons/fi"
import { BlockProps } from "../blocks"

export enum ContactType {
  Mail = "mail",
  Instagram = "instagram",
}

export interface ContactBlockProps extends BlockProps {
  contacts: {
    type: ContactType
    text: string
    link: string
  }[]
}

export const ContactBlock: React.FC<ContactBlockProps> = ({ id, title, contacts }) => (
  <Section id={id} title={title}>
    <Flex>
      {contacts.map(({ type, text, link }, index) => (
        <CenteredLink href={link} target="_blank" key={index}>
          <ContactIcon type={type} />
          {text}
        </CenteredLink>
      ))}
    </Flex>
  </Section>
)

const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`

const ContactIcon: React.FC<{ type: ContactType }> = ({ type }) => {
  switch (type) {
    case ContactType.Mail:
      return <FiMail style={{ marginRight: "0.2em" }} />
    case ContactType.Instagram:
      return <FiInstagram style={{ marginRight: "0.2em" }} />
  }
}

const CenteredLink = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  gap: 0.6em;
  min-width: 12rem;
  padding: 1rem;
  border: 6px solid transparent;
  transition: border-color 300ms, background-color 900ms;

  &:hover {
    border-color: #d3a85350;
    border-radius: 10px;
    background-color: #ffffff30;
  }

  svg {
    width: 4em;
    height: 4rem;
  }
`
