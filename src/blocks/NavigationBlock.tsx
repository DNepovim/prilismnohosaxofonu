import React, { useCallback, useEffect, useState } from "react"
import { theme } from "../theme"
import styled from "@emotion/styled"
import useScrollPosition from "@react-hook/window-scroll"
import { ShowOnDesktop, ShowOnMobile } from "../components/ShowOnMobile"
import { MobileNavigation } from "../components/MobileNavigation"
import { DesktopNavigation } from "../components/DesktopNavigation"
import { navOnLoadAnimation } from "../globalStyles"
import { BlockProps } from "../blocks"

export interface NavigationBlockItem {
  title: string
  link: string
}

export interface NavigationBlockProps extends BlockProps {
  items: NavigationBlockItem[]
}

export const NavigationBlock: React.FC<NavigationBlockProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<string | undefined>()
  const scrollPosition = useScrollPosition()
  const onScrollHandler = useCallback(
    (scrollPossition: number) => {
      if (
        document.body.scrollHeight - (scrollPosition + window.innerHeight) <
        100
      ) {
        setActiveItem(items[items.length - 2].link)
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
