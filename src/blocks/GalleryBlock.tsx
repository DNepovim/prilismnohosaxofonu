import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Container } from "../components/Container"
import { Heading } from "../components/Heading"
import { Section } from "../components/Section"

const GAP = "1em"
const imageProps = {
  alt: "",
  style: { marginBottom: GAP },
  breakpoints: [540, 400, 300, 270, 200, 150],
  sizes:
    "(min-width: 1024px) 268px, (min-width: 640px) calc((100vw - 7rem)/3), (min-width: 500px) calc((100vw - 7rem)/2),  calc((100vw - 5rem)/2)",
}

export const GalleryBlock: React.FC = () => (
  <Section id="galerie" title="Galerie">
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
      <StaticImage src={"../images/gallery/16.jpg"} {...imageProps} />
      <StaticImage src={"../images/gallery/3.jpg"} {...imageProps} />
      <StaticImage src={"../images/gallery/12.jpg"} {...imageProps} />
      <StaticImage src={"../images/gallery/13.jpg"} {...imageProps} />
      <StaticImage src={"../images/gallery/14.jpg"} {...imageProps} />
      <StaticImage src={"../images/gallery/15.jpg"} {...imageProps} />
    </GalleryContainer>
  </Section>
)

const GalleryContainer = styled.div`
  column-count: 2;
  column-gap: ${GAP};
  border-radius: 10px;
  overflow: hidden;
  @media (min-width: 640px) {
    column-count: 3;
  }
`
