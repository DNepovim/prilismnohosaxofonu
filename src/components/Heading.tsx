import styled from "@emotion/styled"
import React, { ReactNode } from "react"
import { theme } from "../theme"

export const Heading: React.FC<{ children: ReactNode }> = ({ children }) => (
  <StyledHeading>
    <span>{children}</span>
  </StyledHeading>
)

const StyledHeading = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 3em;
  margin: 0 0 0.6em;
  span {
    display: inline-block;
    height: 0.6em;
    line-height: 0.35em;
    background-color: ${theme.color.brand};
  }
`
