import styled from "@emotion/styled"
import React, { useEffect, useRef, useState } from "react"
import { theme } from "../theme"
import { NavigationBlockItem } from "../blocks/NavigationBlock"
import useScrollPosition from "@react-hook/window-scroll"
import { Link } from "gatsby"

interface UnderlineProps {
  left: number
  width: number
}

const getUnderlineCor = (
  container: HTMLElement | null,
  item: Element | null
): UnderlineProps | undefined => {
  const navListRect = container?.getBoundingClientRect()
  const activeItemRect = item?.getBoundingClientRect()

  if (!navListRect || !activeItemRect) {
    return
  }

  return {
    left: activeItemRect.left - navListRect.left,
    width: activeItemRect.width,
  }
}

export const DesktopNavigation: React.FC<{
  items: NavigationBlockItem[]
  activeItem?: string
}> = ({ items, activeItem }) => {
  const [activeItemCor, setActiveItemCor] = useState<
    UnderlineProps | undefined
  >()
  const scrollPosition = useScrollPosition()
  const navListRef = useRef<HTMLUListElement | null>(null)

  const fallbackedActiveItem = activeItem ?? items[0].link

  useEffect(() => {
    const activeNavItem = document.querySelector(
      `a[href$='${fallbackedActiveItem}']`
    )
    setActiveItemCor(getUnderlineCor(navListRef.current, activeNavItem))
  }, [scrollPosition])

  return (
    <NavList ref={navListRef}>
      {items.map((item) => (
        <NavItem key={item.link}>
          <NavLink to={item.link} active={activeItem === item.link ? 1 : 0}>
            {item.title}
          </NavLink>
        </NavItem>
      ))}
      {activeItemCor && (
        <Underline left={activeItemCor.left} width={activeItemCor.width} />
      )}
    </NavList>
  )
}

const NavList = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  margin: 0 -0.4rem;
  padding: 0;
`

const NavItem = styled.li``

const Underline = styled.div`
  position: absolute;
  left: ${({ left }: UnderlineProps) => left}px;
  bottom: 0;
  height: 4px;
  width: ${({ width }: UnderlineProps) => width}px;
  transition: left 300ms ${theme.animation.function},
    width 300ms ${theme.animation.function};
  background-color: ${theme.color.brand};
`

const NavLink = styled(Link)`
  position: relative;
  display: block;
  padding: 0.4rem;
  color: ${({ active }: { active: 0 | 1 }) =>
    active ? theme.color.brand : "black"};
  cursor: pointer;
  font-size: 1.8em;
  font-weight: 600;
  transition: color 300ms;
  &:hover {
    text-decoration: none;
    color: ${theme.color.brand};
  }
`
