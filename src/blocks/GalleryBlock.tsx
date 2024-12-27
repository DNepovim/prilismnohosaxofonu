import styled from "@emotion/styled"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"
import { BlockProps } from "../blocks"
import { Section } from "../components/Section"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { theme } from "../theme"

const GAP = "1em"
const imageThumbnailProps = {
  alt: "",
  style: { marginBottom: GAP },
  breakpoints: [540, 400, 300, 270, 200, 150],
  sizes:
    "(min-width: 1024px) 268px, (min-width: 640px) calc((100vw - 7rem)/3), (min-width: 500px) calc((100vw - 7rem)/2),  calc((100vw - 5rem)/2)",
}

const imageProps = {
  alt: "",
  breakpoints: [4000, 3000, 2000, 1500, 1000, 750, 500, 400, 300, 200, 150],
}

export type GalleryBlockProps = BlockProps & {
  images: Queries.IndexPageQuery["allFile"]["edges"]
}

export const GalleryBlock: React.FC<GalleryBlockProps> = ({ id, title, images }) => {
  const [imageIndex, setImageIndex] = React.useState(-1)

  const imagesData = images
    .map((image) =>
      image?.node?.childImageSharp?.gatsbyImageData
        ? { ...image?.node?.childImageSharp?.gatsbyImageData, id: image.node.id }
        : null
    )
    .filter((image): image is IGatsbyImageData & { id: string } => !!image)

  return (
    <Section id={id} title={title}>
      <GalleryContainer>
        {imagesData.map(({ id, ...image }, index) => (
          <GalleryItem key={id} onClick={() => setImageIndex(index)}>
            <GatsbyImage
              key={id}
              image={image}
              onClick={() => {
                setImageIndex(index)
              }}
              {...imageThumbnailProps}
            />
          </GalleryItem>
        ))}
      </GalleryContainer>
      <Lightbox
        on={{ exited: () => setImageIndex(-1) }}
        index={imageIndex}
        open={imageIndex > -1}
        slides={imagesData as any}
        carousel={{ imageFit: "contain", padding: 50 }}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: { backgroundColor: `${theme.color.brand}e0`, backdropFilter: "blur(5px)" },
        }}
        render={{
          slide: (props) => (
            <LightBoxSlide
              // This library is badly typed
              key={(props as unknown as { id: string }).id}
              image={(props as unknown as { slide: IGatsbyImageData }).slide}
              objectFit="contain"
              {...imageProps}
            />
          ),
        }}
        //...
      />
    </Section>
  )
}

const GalleryContainer = styled.div`
  column-count: 2;
  column-gap: ${GAP};
  border-radius: 10px;
  overflow: hidden;
  @media (min-width: 640px) {
    column-count: 3;
  }
`

const GalleryItem = styled.div`
  cursor: pointer;
`

const LightBoxSlide = styled(GatsbyImage)`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`
