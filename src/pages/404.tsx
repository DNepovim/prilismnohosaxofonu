import * as React from "react"
import { Link, HeadFC } from "gatsby"
import { Global } from "@emotion/react"
import { globalStyles } from "../globalStyles"
import styled from "@emotion/styled"
import { Container } from "../components/Container"
import { CoverBlock } from "../blocks/CoverBlock"
import { theme } from "../theme"

const NotFoundPage = () => {
  return (
    <Main>
      <Global styles={globalStyles} />
      <Container>
        <Title>Zde nic není...</Title>
        <p>
          Je tu jen jedna stránka a ta je <Link to="/">tady</Link>.
        </p>
      </Container>
    </Main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>

const Main = styled.main`
  min-height: 100vh;
`

const Title = styled.h1`
  color: ${theme.color.brand};
`
