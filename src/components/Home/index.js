import {Component} from 'react'
import {AiFillHome, AiOutlineCloseCircle} from 'react-icons/ai'
import {FaHotjar, FaGamepad} from 'react-icons/fa'
import {CgPlayListAdd} from 'react-icons/cg'
import {BiSearch} from 'react-icons/bi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import VideoItem from '../VideoItem'
import {
  HomeContainer,
  SideBarContainer,
  SideText,
  InnerSideBar,
  FooterSideBar,
  ContactHeader,
  LogoContainer,
  CompanyLogo,
  CompanyText,
  CustomButton,
  LoadingContainer,
  BannerContainer,
  BannerImageLogo,
  BannerHeading,
  GetNowButton,
  CloseButton,
  SearchContainer,
  SearchInputContainer,
  SearchButton,
  InnerHomeContainer,
  VideosContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureRetryButton,
  VideosUnOrderedList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initital,
    videosList: [],
  }

  componentDidMount() {
    this.fetchVideosFromAPI()
  }

  fetchVideosFromAPI = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwtToken')
    const apiVideosUrl = 'https://apis.ccbp.in/videos/all'
    const options = {
      header: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiVideosUrl, options)
    const apiData = response.json()
    console.log(response.ok)
    console.log(apiData)
    if (response.ok) {
      const updatedData = apiData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.fetchVideosFromAPI()
  }

  renderVideosSuccessView = () => {
    const {videosList} = this.state
    return (
      <VideosUnOrderedList>
        {videosList.map(eachVideo => (
          <VideoItem key={eachVideo.id} videos={eachVideo} />
        ))}
      </VideosUnOrderedList>
    )
  }

  renderLoadingView = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoadingContainer>
  )

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureText>
        We are having some trouble to complete your request. Please try again.
      </FailureText>
      <FailureRetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </FailureRetryButton>
    </FailureContainer>
  )

  renderSidebar = () => (
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

  renderBanner = () => (
    <BannerContainer>
      <div>
        <BannerImageLogo
          alt="nxt watch logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <BannerHeading>
          But Nxt Watch Premium prepaid plans with UPI
        </BannerHeading>
        <GetNowButton>GET NOW</GetNowButton>
      </div>
      <CloseButton>
        <AiOutlineCloseCircle style={{fontSize: '20px'}} />
      </CloseButton>
    </BannerContainer>
  )

  renderSearchContainer = () => (
    <SearchContainer>
      <SearchInputContainer type="search" placeholder="Search" />
      <SearchButton type="button">
        <BiSearch />
      </SearchButton>
    </SearchContainer>
  )

  renderApiView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()

      default:
        return null
    }
  }

  render() {
    const {apiStatus, videosList} = this.state
    console.log(apiStatus)
    console.log(videosList)
    return (
      <>
        <Header />
        <HomeContainer data-testid="home">
          {this.renderSidebar()}
          <InnerHomeContainer>
            {this.renderBanner()}
            <VideosContainer>
              {this.renderSearchContainer()}
              {this.renderApiView()}
            </VideosContainer>
          </InnerHomeContainer>
        </HomeContainer>
      </>
    )
  }
}
export default Home
