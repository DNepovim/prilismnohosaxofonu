import styled from "@emotion/styled"
import React, { useCallback, useEffect, useRef, useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { theme } from "../theme"
import { NavigationItem } from "./Navigation"
import useScrollPosition from "@react-hook/window-scroll"

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

export const DesktopNavigation: React.FC<{ items: NavigationItem[] }> = ({
  items,
}) => {
  const [activeItem, setActiveItem] = useState<string | undefined>()
  const [activeItemCor, setActiveItemCor] = useState<
    UnderlineProps | undefined
  >()
  const scrollPosition = useScrollPosition()
  const navListRef = useRef<HTMLUListElement | null>(null)

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

    const activeNavItem = document.querySelector(`a[href='${activeItem}']`)
    setActiveItemCor(getUnderlineCor(navListRef.current, activeNavItem))
  }, [onScrollHandler, scrollPosition])

  return (
    <NavList ref={navListRef}>
      {items.map((item) => (
        <NavItem key={item.link}>
          <NavLink
            href={item.link}
            isActive={activeItem === item.link}
            offset={50}
          >
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

const NavLink = styled(AnchorLink)`
  position: relative;
  display: block;
  padding: 0.4rem;
  transition: color 300ms;
  color: ${({ isActive }: { isActive: boolean }) =>
    isActive ? theme.color.brand : "black"};
  cursor: pointer;
  font-size: 1.8em;
  font-weight: 600;
  transition: color 300ms;
  &:hover {
    text-decoration: none;
    color: ${theme.color.brand};
  }
`
