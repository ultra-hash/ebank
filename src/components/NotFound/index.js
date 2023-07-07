import {
  OuterContainer,
  InnerContainer,
  NotFoundImg,
  Heading,
  Paragraph,
} from './styledComponents'

const NotFound = () => (
  <OuterContainer>
    <InnerContainer>
      <NotFoundImg
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
        alt="not found"
      />
      <Heading>Page Not Found</Heading>
      <Paragraph>
        We are sorry, the page you requested could not be found.
      </Paragraph>
    </InnerContainer>
  </OuterContainer>
)

export default NotFound
