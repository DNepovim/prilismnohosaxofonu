import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Container } from "../components/Container"
import { Section } from "../components/Section"
import { theme } from "../theme"

export const CoverBlock: React.FC = () => (
  <CoverSection id="uvod">
    <CoverContainer>
      <Title>
        <span>Příliš mnoho</span>
        <br />
        <span>saxofonů</span>
      </Title>
      <StaticImage
        src="../images/cover.jpg"
        alt=""
        layout="constrained"
        aspectRatio={1.5}
        height={460}
        style={{
          position: "absolute",
          right: 0,
          margin: "0 16px",
          maxWidth: "100%",
        }}
        breakpoints={[1380, 1200, 1000, 800, 690, 600, 500, 400, 300]}
      />
    </CoverContainer>
  </CoverSection>
)

const CoverSection = styled(Section)`
  padding-top: 60px;
`

const CoverContainer = styled(Container)`
  min-height: 70vw;
  @media (min-width: 640px) {
    min-height: 65vh;
  }
`

const Title = styled.h1`
  position: relative;
  display: inline-block;
  z-index: 1;
  font-family: ${theme.fonts.heading};
  margin-top: 40vw;
  span {
    display: inline-block;
    height: 0.6em;
    line-height: 0.35em;

    &:first-of-type {
      font-size: 6vw;
      margin-left: 1rem;
      background-color: #fff;
    }

    &:last-of-type {
      font-size: 16vw;
      margin-left: 4rem;
      background-color: ${theme.color.brand};
    }
  }

  @media (min-width: 640px) {
    margin-top: 10em;
    span {
      &:first-of-type {
        font-size: 3rem;
      }
      &:last-of-type {
        font-size: 7rem;
      }
    }
  }
`
