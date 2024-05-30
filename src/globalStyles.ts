import { css, keyframes } from "@emotion/react"
import { theme } from "./theme"

export const globalStyles = css`
  html {
    background-color: ${theme.color.brand};
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
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

export const titleOnLoadAnimation = keyframes`
    from {
      opacity: 0;
      top: 1rem;
    }
    to {
      opacity: 1;
      top: 0;
    }
`

export const coverOnLoadAnimation = keyframes`
    from {
      opacity: 0.5;
      right: 0;
    }
    to {
      opacity: 1;
      right: ${theme.layout.paddings.side};
    }
`

export const navOnLoadAnimation = keyframes`
    from {
      opacity: 0.5;
      top: -1rem
    }
    to {
      opacity: 1;
      top: 0;
    }
`

export const mobileOpenAnimation = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`
