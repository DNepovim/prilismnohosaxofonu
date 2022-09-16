import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Container } from "../components/Container"
import { Heading } from "../components/Heading"
import { Section } from "../components/Section"
import { theme } from "../theme"

const GAP = "1em"
const imageProps = {
  alt: "",
  style: { marginBottom: GAP },
  placeholdor: "blurred",
}

export const GalleryBlock: React.FC = () => (
  <Section id="galerie">
    <Container>
      <Heading>Galerie</Heading>
      <GalleryContainer>
        <StaticImage src={"../images/gallery/1.jpg"} {...imageProps} />
        <StaticImage src={"../images/gallery/4.jpg"} {...imageProps} />
        <StaticImage src={"../images/gallery/5.jpg"} {...imageProps} />
        <StaticImage src={"../images/gallery/6.jpg"} {...imageProps} />
        <StaticImage src={"../images/gallery/2.jpg"} {...imageProps} />
        <StaticImage src={"../images/gallery/7.jpg"} {...imageProps} />
        <StaticImage src={"../images/gallery/8.jpg"} {...imageProps} />
        <StaticImage src={"../images/gallery/9.jpg"} {...imageProps} />
        <StaticImage src={"../images/gallery/10.jpg"} {...imageProps} />
        <StaticImage src={"../images/gallery/11.jpg"} {...imageProps} />
        <StaticImage src={"../images/gallery/3.jpg"} {...imageProps} />
        <StaticImage src={"../images/gallery/12.jpg"} {...imageProps} />
        <StaticImage src={"../images/gallery/13.jpg"} {...imageProps} />
        <StaticImage src={"../images/gallery/14.jpg"} {...imageProps} />
        <StaticImage src={"../images/gallery/15.jpg"} {...imageProps} />
        <StaticImage src={"../images/gallery/16.jpg"} {...imageProps} />
      </GalleryContainer>
    </Container>
  </Section>
)

const GalleryContainer = styled.div`
  column-count: 2;
  column-gap: ${GAP};
  padding: 0 1rem;
  @media (min-width: 500px) {
    padding: 0 4rem;
  }
  @media (min-width: 640px) {
    column-count: 3;
  }
`
