import { FooterStyles } from "./footer.styles"

const FooterComponent = () => {
  return (
    <FooterStyles>
      © {new Date().getFullYear()} Tube Gallery
    </FooterStyles>
  )
}

export default FooterComponent