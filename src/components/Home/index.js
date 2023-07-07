import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  OuterContainer,
  InnerContainer,
  HeaderSection,
  BodySection,
  LogoImage,
  LogoutButton,
  Heading,
  CardImg,
} from './styledComponents'

class Home extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/ebank/login')
  }

  render() {
    return (
      <OuterContainer>
        <InnerContainer>
          <HeaderSection>
            <LogoImage
              src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
              alt="website logo"
            />
            <LogoutButton onClick={this.onClickLogout}>Logout</LogoutButton>
          </HeaderSection>
          <BodySection>
            <Heading>Your Flexibility, Our Excellence</Heading>
            <CardImg
              src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
              alt="digital card"
            />
          </BodySection>
        </InnerContainer>
      </OuterContainer>
    )
  }
}

export default Home
