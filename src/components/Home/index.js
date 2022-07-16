import {Component} from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
// import {FaHotjar, FaGamepad} from 'react-icons/fa'
import {BiSearch} from 'react-icons/bi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import VideoItem from '../VideoItem'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'
import {
  HomeContainer,
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
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    searchVideo: '',
  }

  componentDidMount() {
    this.fetchVideosFromAPI()
  }

  fetchVideosFromAPI = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchVideo} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiVideosUrl = `https://apis.ccbp.in/videos/all?search=${searchVideo}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiVideosUrl, options)
    const apiData = await response.json()
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

  onChangeSearches = event => this.setState({searchVideo: event.target.value})

  onClickSearches = () => this.fetchVideosFromAPI()

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

  renderSearchedVideoFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailureHeading>No Searches Found</FailureHeading>
      <FailureText>Try with different keys to get the results</FailureText>
      <FailureRetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </FailureRetryButton>
    </FailureContainer>
  )

  renderLoadingView = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoadingContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onClickRetry} />

  renderSidebar = () => <Sidebar />

  renderBanner = () => (
    <BannerContainer data-testid="banner">
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
      <SearchInputContainer
        type="search"
        placeholder="Search"
        onChange={this.onChangeSearches}
        onKeyDown={this.onKeyDownSearches}
      />
      <SearchButton
        type="button"
        data-testid="searchButton"
        onClick={this.onClickSearches}
      >
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
    const {videosList} = this.state
    console.log(videosList.length)
    return (
      <>
        <Header />
        <HomeContainer data-testid="home">
          {this.renderSidebar()}
          <InnerHomeContainer>
            {this.renderBanner()}
            <VideosContainer>
              {this.renderSearchContainer()}
              {videosList.length === 0 && this.renderSearchedVideoFailureView()}
              {this.renderApiView()}
            </VideosContainer>
          </InnerHomeContainer>
        </HomeContainer>
      </>
    )
  }
}
export default Home
