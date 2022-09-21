import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Container } from "../components/Container"
import { Section } from "../components/Section"
import { coverOnLoadAnimation, titleOnLoadAnimation } from "../globalStyles"
import { theme } from "../theme"

export const CoverBlock: React.FC = () => (
  <CoverSection id="uvod">
    <CoverContainer>
      <Title>
        <span>Příliš mnoho</span>
        <br />
        <span>saxofonů</span>
      </Title>
      <ImageWrapper>
        <StaticImage
          src="../images/cover.jpg"
          alt=""
          layout="constrained"
          loading="eager"
          aspectRatio={1.5}
          height={460}
          style={{}}
          breakpoints={[1380, 1200, 1000, 800, 690, 600, 500, 400, 300]}
        />
      </ImageWrapper>
    </CoverContainer>
  </CoverSection>
)

const CoverSection = styled.section`
  position: relative;
  max-width: ${theme.layout.widths.default};
  margin: 0 auto;
  padding: 0 ${theme.layout.paddings.side};
`

const CoverContainer = styled.div`
  min-height: 70vw;
  @media (min-width: 640px) {
    min-height: 65vh;
  }
`

const ImageWrapper = styled.figure`
  animation: ${coverOnLoadAnimation} 900ms 300ms ${theme.animation.function}
    both;
  position: absolute;
  top: 0;
  max-width: calc(100% - 2rem);
  margin: 0;
`

const Title = styled.h1`
  position: relative;
  display: inline-block;
  z-index: 1;
  font-family: ${theme.fonts.heading};
  margin-top: 40vw;
  span {
    display: inline-block;
    height: 0.9em;
    line-height: 0.75em;

    &:first-of-type {
      font-size: 6vw;
      background-color: #fff;
      position: relative;
      animation: ${titleOnLoadAnimation} 900ms 600ms ${theme.animation.function}
        both;
    }

    &:last-of-type {
      font-size: 16vw;
      margin-left: 3rem;
      background-color: ${theme.color.brand};
      position: relative;
      animation: ${titleOnLoadAnimation} 900ms 300ms ${theme.animation.function}
        both;
    }
  }

  @media (min-width: 640px) {
    margin-top: 10em;
    span {
      height: 0.6em;
      line-height: 0.35em;
      &:first-of-type {
        font-size: 3rem;
      }
      &:last-of-type {
        font-size: 7rem;
      }
    }
  }
`
