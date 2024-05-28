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

export const ContactBlock: React.FC<ContactBlockProps> = ({
  id,
  title,
  contacts,
}) => (
  <Section id={id} title={title}>
    <p>
      {contacts.map(({ type, text, link }, index) => (
        <CenteredLink href={link} target="_blank" key={index}>
          <ContactIcon type={type} />
          {text}
        </CenteredLink>
      ))}
    </p>
  </Section>
)

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
`
