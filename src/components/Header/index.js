import {BiMenu, BiLogIn} from 'react-icons/bi'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HeaderContainer,
  HeaderLogo,
  LogoAlignContainer,
  MobileContainer,
  DarkLightIconButton,
  DarkLightIcon,
  DesktopHeaderContainer,
  UserProfile,
  CustomLogoutButton,
} from './styledComponents'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {toggleTheme} = value
      console.log(toggleTheme)

      const navBgColor = toggleTheme ? '#f9f9f9' : '#0f0f0f'

      const websiteLogo = toggleTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

      const darkLightIcon = toggleTheme
        ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

      const buttonColor = toggleTheme ? '#4f46e5' : '#f8fafc'

      const renderMobileHeader = () => (
        <MobileContainer bgColor={navBgColor}>
          <HeaderLogo src={websiteLogo} alt="website logo" />
          <LogoAlignContainer>
            <DarkLightIconButton>
              <DarkLightIcon src={darkLightIcon} />
            </DarkLightIconButton>
            <BiMenu style={{fontSize: '25px', marginLeft: '5px'}} />
            <BiLogIn style={{fontSize: '25px', marginLeft: '5px'}} />
          </LogoAlignContainer>
        </MobileContainer>
      )

      const renderDesktopHeader = () => (
        <DesktopHeaderContainer bgColor={navBgColor}>
          <HeaderLogo src={websiteLogo} alt="website logo" />
          <LogoAlignContainer>
            <DarkLightIconButton>
              <DarkLightIcon src={darkLightIcon} />
            </DarkLightIconButton>
            <UserProfile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <CustomLogoutButton color={buttonColor} borderColor={buttonColor}>
              Logout
            </CustomLogoutButton>
          </LogoAlignContainer>
        </DesktopHeaderContainer>
      )

      return (
        <HeaderContainer bgColor={navBgColor}>
          {renderMobileHeader()}
          {renderDesktopHeader()}
        </HeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default Header
