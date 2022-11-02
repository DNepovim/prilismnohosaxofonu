import styled from "@emotion/styled"
import { Link } from "gatsby"
import Hamburger from "hamburger-react"
import React, { useState } from "react"
import { mobileOpenAnimation } from "../globalStyles"
import { theme } from "../theme"
import { NavigationBlockItem } from "../blocks/NavigationBlock"

export const MobileNavigation: React.FC<{
  items: NavigationBlockItem[]
  activeItem?: string
}> = ({ items, activeItem }) => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <>
      {isOpened && (
        <NavListMobile onClick={() => setIsOpened(false)}>
          {items.map((item) => (
            <NavItem key={item.link}>
              <NavLinkMobile
                to={item.link}
                active={activeItem === item.link ? 1 : 0}
              >
                {item.title}
              </NavLinkMobile>
            </NavItem>
          ))}
        </NavListMobile>
      )}
      <Hamburger
        color={"black"}
        toggled={isOpened}
        label="Menu"
        onToggle={() => setIsOpened(!isOpened)}
      />
    </>
  )
}

const NavItem = styled.li``

const NavListMobile = styled.ul`
  animation: ${mobileOpenAnimation} 300ms ${theme.animation.function} both;
  touch-action: none;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  list-style: none;
  margin: 0;
  padding: 0 0 4px;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

const NavLinkMobile = styled(Link)`
  display: block;
  color: ${({ active }: { active: 0 | 1 }) =>
    active ? theme.color.brand : "black"};
  padding: 0.6em;
  font-size: 2.6em;
  font-weight: 600;
  text-align: center;
`
