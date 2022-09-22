import React, { useCallback, useEffect, useState } from "react"
import { theme } from "../theme"
import styled from "@emotion/styled"
import useScrollPosition from "@react-hook/window-scroll"
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
  const [activeItem, setActiveItem] = useState<string | undefined>()
  const scrollPosition = useScrollPosition()
  const onScrollHandler = useCallback(
    (scrollPossition: number) => {
      if (
        document.body.scrollHeight - (scrollPosition + window.innerHeight) <
        100
      ) {
        setActiveItem(items[items.length - 1].link)
        return
      }
      setActiveItem(
        items.reduce<string | undefined>((acc, item) => {
          const block = document.getElementById(item.link.substring(1))
          if (!block) {
            return
          }
          const { top } = block.getBoundingClientRect()
          return top < 100 ? item.link : acc
        }, undefined)
      )
    },
    [items, scrollPosition]
  )
  useEffect(() => {
    onScrollHandler(scrollPosition)
  }, [onScrollHandler, scrollPosition])
  return (
    <NavBar>
      <NavContainer>
        <Nav>
          <ShowOnDesktop>
            <DesktopNavigation items={items} activeItem={activeItem} />
          </ShowOnDesktop>
          <ShowOnMobile>
            <MobileNavigation items={items.slice(1)} activeItem={activeItem} />
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
