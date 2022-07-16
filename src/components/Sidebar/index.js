import {AiFillHome} from 'react-icons/ai'
import {FaHotjar, FaGamepad} from 'react-icons/fa'
import {CgPlayListAdd} from 'react-icons/cg'

import {
  SideBarContainer,
  SideText,
  InnerSideBar,
  FooterSideBar,
  ContactHeader,
  LogoContainer,
  CompanyLogo,
  CompanyText,
  CustomButton,
} from './styledComponents'

const Sidebar = () => (
  <SideBarContainer>
    <InnerSideBar>
      <CustomButton>
        <AiFillHome style={{fontSize: '22px'}} />
        <SideText>Home</SideText>
      </CustomButton>
      <CustomButton>
        <FaHotjar style={{fontSize: '22px'}} />
        <SideText>Trending</SideText>
      </CustomButton>
      <CustomButton>
        <FaGamepad style={{fontSize: '22px'}} />
        <SideText>Gaming</SideText>
      </CustomButton>
      <CustomButton>
        <CgPlayListAdd style={{fontSize: '22px'}} />
        <SideText>Saved Videos</SideText>
      </CustomButton>
    </InnerSideBar>
    <FooterSideBar>
      <ContactHeader>CONTACT US</ContactHeader>
      <LogoContainer>
        <CompanyLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <CompanyLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <CompanyLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </LogoContainer>
      <CompanyText>
        Enjoy! Now to see your channels and recommendations!
      </CompanyText>
    </FooterSideBar>
  </SideBarContainer>
)
export default Sidebar
