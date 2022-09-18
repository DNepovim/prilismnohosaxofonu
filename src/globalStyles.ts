import { css } from "@emotion/react"
import { theme } from "./theme"

export const globalStyles = css`
  html {
    background-color: ${theme.color.brand};
  }

  body {
    margin: 0;
    padding: 6em 0;
    font-size: 18px;
    font-family: ${theme.fonts.body};
    background: linear-gradient(white, #faecd1);
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
