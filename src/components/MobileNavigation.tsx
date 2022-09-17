import styled from "@emotion/styled"
import Hamburger from "hamburger-react"
import React, { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { NavigationItem } from "./Navigation"

export const MobileNavigation: React.FC<{
  items: NavigationItem[]
}> = ({ items }) => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <>
      {isOpened && (
        <NavListMobile onClick={() => setIsOpened(false)}>
          {items.map((item) => (
            <NavItem key={item.link}>
              <NavLinkMobile href={item.link}>{item.title}</NavLinkMobile>
            </NavItem>
          ))}
        </NavListMobile>
      )}
      <Hamburger
        color={"black"}
        toggled={isOpened}
        onToggle={() => setIsOpened(!isOpened)}
      />
    </>
  )
}

const NavItem = styled.li``

const NavListMobile = styled.ul`
  background-color: white;
  position: absolute;
  top: -0.6em;
  right: 0;
  bottom: 0;
  left: -0.6em;
  height: 100vh;
  width: 100vw;
  list-style: none;
  margin: 0;
  padding: 0 0 4px;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

const NavLinkMobile = styled(AnchorLink)`
  display: block;
  color: black;
  padding: 0.6em;
  font-size: 2.6em;
  font-weight: 600;
  text-align: center;
`
