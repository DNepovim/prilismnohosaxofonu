import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { theme } from "../theme"
import { NavigationItem } from "./Navigation"
import useScrollPosition from "@react-hook/window-scroll"

const getUnderlineCor = (
  container: HTMLElement | null,
  item: Element | null
) => {
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
  }, [onScrollHandler, scrollPosition])

  const activeNavItem = document.querySelector(`a[href='${activeItem}']`)
  const activeItemCor = getUnderlineCor(navListRef.current, activeNavItem)

  return (
    <NavList ref={navListRef}>
      {items.map((item) => (
        <NavItem key={item.link}>
          <NavLink href={item.link} isActive={activeItem === item.link}>
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
  margin: 0;
  padding: 0;
`

const NavItem = styled.li`
  margin-left: 4px;
`

interface UnderlineProps {
  left: number
  width: number
}

const Underline = styled.div`
  position: absolute;
  left: ${({ left }: UnderlineProps) => left}px;
  bottom: 0;
  height: 4px;
  width: ${({ width }: UnderlineProps) => width}px;
  transition: left 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    width 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
