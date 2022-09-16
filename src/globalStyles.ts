import { css } from "@emotion/react"
import { theme } from "./theme"

export const globalStyles = css`
  html {
  }

  body {
    margin: 4em 0;
    padding: 0;
    font-size: 18px;
    font-family: ${theme.fonts.body};
  }

  a {
    color: ${theme.color.brand};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ::selection {
    background-color: ${theme.color.brand};
  }
`
