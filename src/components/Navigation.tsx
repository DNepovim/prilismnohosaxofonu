import React from "react"
import { theme } from "../theme"
import styled from "@emotion/styled"
import { ShowOnDesktop, ShowOnMobile } from "./ShowOnMobile"
import { MobileNavigation } from "./MobileNavigation"
import { DesktopNavigation } from "./DesktopNavigation"
import { navOnLoadAnimation } from "../globalStyles"

export interface NavigationItem {
  title: string
  link: string
}

export const Navigation: React.FC<{
  items: NavigationItem[]
}> = ({ items }) => {
  return (
    <NavBar>
      <NavContainer>
        <Nav>
          <ShowOnDesktop>
            <DesktopNavigation items={items} />
          </ShowOnDesktop>
          <ShowOnMobile>
            <MobileNavigation items={items} />
          </ShowOnMobile>
        </Nav>
      </NavContainer>
    </NavBar>
  )
}

const NavBar = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.color.background}fa;
  width: 100vw;
  animation: ${navOnLoadAnimation} 900ms 300ms ${theme.animation.function} both;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 ${theme.layout.paddings.side};
  max-width: ${theme.layout.widths.default};
  margin: 0 auto;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
