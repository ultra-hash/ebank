import {Component} from 'react'

import {
  OuterContainer,
  InnerContainer,
  LeftContainer,
  RightContainer,
  LoginPageImg,
  LoginForm,
  Heading,
  FormItemContainer,
  FormLabel,
  FormTextInput,
  LoginButton,
} from './styledComponents'

class Login extends Component {
  state = {}

  render() {
    return (
      <OuterContainer>
        <InnerContainer>
          <LeftContainer>
            <LoginPageImg
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
            />
          </LeftContainer>
          <RightContainer>
            <LoginForm>
              <Heading>Welcome Back!</Heading>
              <FormItemContainer>
                <FormLabel htmlFor="userId">User Id</FormLabel>
                <FormTextInput
                  id="userId"
                  type="text"
                  placeholder="Enter User ID"
                />
              </FormItemContainer>
              <FormItemContainer>
                <FormLabel htmlFor="pin">PIN</FormLabel>
                <FormTextInput
                  id="pin"
                  type="password"
                  placeholder="Enter PIN"
                />
              </FormItemContainer>
              <LoginButton>Login</LoginButton>
            </LoginForm>
          </RightContainer>
        </InnerContainer>
      </OuterContainer>
    )
  }
}

export default Login
