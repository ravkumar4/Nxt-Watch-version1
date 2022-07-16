import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  LoginAppContainer,
  LoginFormContainer,
  AppLogo,
  UsernameLabel,
  UsernameInput,
  PasswordLabel,
  PasswordInput,
  ShowPasswordContainer,
  ShowPasswordInput,
  ShowPasswordLabel,
  LoginButton,
  ShowErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMessage: false,
    errorMessage: '',
  }

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onChangeShowPassword = () =>
    this.setState(prevState => ({showPassword: !prevState.showPassword}))

  onSubmitSuccess = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({errorMessage: errMsg, showErrorMessage: true})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiLoginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiLoginUrl, options)
    const userData = await response.json()
    if (response.ok) {
      return this.onSubmitSuccess(userData.jwt_token)
    }
    return this.onSubmitFailure(userData.error_msg)
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <UsernameLabel htmlFor="username">USERNAME</UsernameLabel>
        <UsernameInput
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordFiled = () => {
    const {password, showPassword} = this.state
    const passwordType = showPassword ? 'text' : 'password'
    return (
      <>
        <PasswordLabel htmlFor="password">PASSWORD</PasswordLabel>
        <PasswordInput
          type={passwordType}
          id="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {showPassword, showErrorMessage, errorMessage} = this.state

    return (
      <LoginAppContainer>
        <LoginFormContainer onSubmit={this.onSubmitLoginForm}>
          <AppLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          {this.renderUsernameField()}
          {this.renderPasswordFiled()}
          <ShowPasswordContainer>
            <ShowPasswordInput
              type="checkbox"
              checked={showPassword}
              id="showPassword"
              onChange={this.onChangeShowPassword}
            />
            <ShowPasswordLabel htmlFor="showPassword">
              Show Password
            </ShowPasswordLabel>
          </ShowPasswordContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showErrorMessage && (
            <ShowErrorMessage>*{errorMessage}</ShowErrorMessage>
          )}
        </LoginFormContainer>
      </LoginAppContainer>
    )
  }
}
export default Login
