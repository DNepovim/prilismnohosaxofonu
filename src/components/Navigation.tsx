import React, { useCallback, useEffect, useRef, useState } from "react"
import { theme } from "../theme"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Hamburger from "hamburger-react"
import { useWindowWidth } from "@react-hook/window-size"
import useScrollPosition from "@react-hook/window-scroll"
import AnchorLink from "react-anchor-link-smooth-scroll"
import useOnClickOutside from "use-onclickoutside"
import { Container } from "./Container"

interface NavigationItem {
  title: string
  link: string
}

const BREAKPOINT = 600

export const Navigation: React.FC<{
  items: NavigationItem[]
}> = ({ items }) => {
  const [isOpened, setIsOpened] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeItem, setActiveItem] = useState<string | undefined>()
  const width = useWindowWidth()
  const scrollPosition = useScrollPosition()
  const navRef = useRef(null)

  useEffect(() => {
    setIsMobile(width < BREAKPOINT)
  }, [width])

  useOnClickOutside(navRef, () => setIsOpened(false))

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
          const block = document.getElementById(item.link)
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
        <Nav ref={navRef}>
          {!isMobile && (
            <NavList>
              {items.map((item) => (
                <NavItem key={item.link} onClick={() => setIsOpened(false)}>
                  <NavLink active={item.link === activeItem} href={item.link}>
                    {item.title}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>
          )}
          {isMobile && isOpened && (
            <NavListMobile onClick={() => setIsOpened(false)}>
              {items.map((item) => (
                <NavItem key={item.link}>
                  <NavLinkMobile href={`#${item.link}`}>
                    {item.title}
                  </NavLinkMobile>
                </NavItem>
              ))}
            </NavListMobile>
          )}
          {isMobile && (
            <Hamburger
              color={"black"}
              toggled={isOpened}
              onToggle={() => setIsOpened(!isOpened)}
            />
          )}
        </Nav>
      </NavContainer>
    </NavBar>
  )
}

const NavContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  padding-top: 0;
  padding-bottom: 0;
`

const NavBar = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.color.background};
  width: 100vw;
  padding: 0.6em;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

const NavItem = styled.li`
  margin-left: 4px;
`

const activeNavLink = css`
  text-decoration: none;
  color: ${theme.color.brand};

  &:after {
    transform-origin: left top;
    transform: scale(1, 1);
  }
`

const NavLink = styled(AnchorLink)(
  (props: { active: boolean }) => css`
    position: relative;
    display: block;
    padding: 0.4rem;
    transition: color 300ms;
    color: black;
    cursor: pointer;
    font-size: 1.8em;
    font-weight: 600;

    &:after {
      content: "";
      display: block;
      position: absolute;
      right: 0.4rem;
      bottom: 0;
      left: 0.4rem;
      height: 4px;
      transform-origin: right top;
      transform: scale(0, 1);
      transition: transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      background-color: ${theme.color.brand};
    }

    ${props.active ? activeNavLink : ""}

    &:hover {
      ${activeNavLink}
    }
  `
)

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
  text-align: center;
`
