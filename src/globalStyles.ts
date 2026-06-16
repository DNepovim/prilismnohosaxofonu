import { css, keyframes } from "@emotion/react"
import { theme } from "./theme"

export const globalStyles = css`
  @font-palette-values --reem-fun-brand {
    font-family: "Reem Kufi Fun";
    override-colors: 0 ${theme.color.brand}, 1 ${theme.color.brand},
      2 ${theme.color.brand};
  }

  html {
    background-color: ${theme.color.brand};
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-size: 18px;
    font-family: ${theme.fonts.body};
    font-palette: --reem-fun-brand;
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
