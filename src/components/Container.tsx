import styled from "@emotion/styled"
import { theme } from "../theme"

export const Container = styled("div")`
  position: relative;
  box-sizing: border-box;
  max-width: ${theme.layout.widths.narrow};
  margin: 0 auto;
  padding: 1em;
`
