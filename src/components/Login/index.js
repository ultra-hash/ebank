import {Component} from 'react'
import Cookies from 'js-cookie'

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
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {errorMsg: '', showError: false, userId: '', pin: ''}

  onClickLogin = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({
        user_id: userId,
        pin,
      }),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 1})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg, showError: true})
    }
  }

  onChangeInput = event => {
    if (event.target.id === 'pin') {
      this.setState({pin: event.target.value})
    } else {
      this.setState({userId: event.target.value})
    }
  }

  render() {
    const {errorMsg, showError, userId, pin} = this.state
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
            <LoginForm onSubmit={this.onClickLogin}>
              <Heading>Welcome Back!</Heading>
              <FormItemContainer>
                <FormLabel htmlFor="userId">User Id</FormLabel>
                <FormTextInput
                  id="userId"
                  type="text"
                  placeholder="Enter User ID"
                  value={userId}
                  onChange={this.onChangeInput}
                />
              </FormItemContainer>
              <FormItemContainer>
                <FormLabel htmlFor="pin">PIN</FormLabel>
                <FormTextInput
                  id="pin"
                  type="password"
                  placeholder="Enter PIN"
                  value={pin}
                  onChange={this.onChangeInput}
                />
              </FormItemContainer>
              <LoginButton type="submit">Login</LoginButton>
            </LoginForm>
            {showError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
          </RightContainer>
        </InnerContainer>
      </OuterContainer>
    )
  }
}

export default Login
