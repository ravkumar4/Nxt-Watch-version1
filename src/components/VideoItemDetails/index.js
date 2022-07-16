import {Component} from 'react'
// import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'
import ReactPlayer from 'react-player'
import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'
import {
  LoadingContainer,
  VideoItemDetailsContainers,
  VideoPlayerContainer,
  VideoPlayer,
  VideTitle,
  AlignmentContainer,
  ViewsPublishContainer,
  ViewsCountText,
  Dot,
  PublishedDateText,
  LikesDislikesContainer,
  LikeButton,
  DislikeButton,
  SaveVideoButton,
  ChannelDescriptionContainer,
  ChannelLogo,
  ChannelDetailsContainer,
  ChannelName,
  ChannelSubscriptionCount,
  ChannelDesc,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    isLiked: false,
    isDisliked: false,
    apiStatus: apiStatusConstants.initial,
    videoData: [],
  }

  componentDidMount() {
    this.fetchVideoItemDetails()
  }

  fetchVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const accessToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const apiData = await response.json()
    if (response.ok) {
      const updatedData = {
        id: apiData.video_details.id,
        name: apiData.video_details.channel.name,
        profileImageUrl: apiData.video_details.channel.profile_image_url,
        subscriberCount: apiData.video_details.channel.subscriber_count,
        description: apiData.video_details.description,
        publishedAt: apiData.video_details.published_at,
        thumbnailUrl: apiData.video_details.thumbnail_url,
        title: apiData.video_details.title,
        videoUrl: apiData.video_details.video_url,
        viewCount: apiData.video_details.view_count,
      }
      this.setState({
        videoData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.fetchVideoItemDetails()
  }

  onClickLikeButton = () => {
    this.setState(prevState => ({isLiked: !prevState.isLiked}))
    this.setState({isDisliked: false})
  }

  onClickDisLikeButton = () => {
    this.setState(prevState => ({isDisliked: !prevState.isDisliked}))
    this.setState({isLiked: false})
  }

  renderSuccessView = () => {
    const {videoData, isLiked, isDisliked} = this.state
    const {
      name,
      profileImageUrl,
      subscriberCount,
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
    } = videoData
    // const videoPublishedDate = formatDistanceToNow(new Date(publishedAt))
    // console.log(videoPublishedDate)

    return (
      <VideoPlayer>
        <ReactPlayer url={videoUrl} controls height={450} width={900} />
        <VideTitle>{title}</VideTitle>
        <AlignmentContainer>
          <ViewsPublishContainer>
            <ViewsCountText>
              {viewCount} views <Dot> &#8226; </Dot>
            </ViewsCountText>
            <PublishedDateText>{publishedAt}</PublishedDateText>
          </ViewsPublishContainer>
          <LikesDislikesContainer>
            <LikeButton
              type="button"
              color={isLiked}
              onClick={this.onClickLikeButton}
            >
              <BiLike style={{fontSize: '20px', marginRight: '4px'}} /> Like
            </LikeButton>
            <DislikeButton
              type="button"
              color={isDisliked}
              onClick={this.onClickDisLikeButton}
            >
              <BiDislike style={{fontSize: '20px', marginRight: '4px'}} />
              Dislike
            </DislikeButton>
            <SaveVideoButton type="button">
              <CgPlayListAdd style={{fontSize: '20px', marginRight: '4px'}} />{' '}
              Save
            </SaveVideoButton>
          </LikesDislikesContainer>
        </AlignmentContainer>
        <hr />
        <ChannelDescriptionContainer>
          <ChannelLogo src={profileImageUrl} />
          <ChannelDetailsContainer>
            <ChannelName>{name}</ChannelName>
            <ChannelSubscriptionCount>
              {subscriberCount} subscribers
            </ChannelSubscriptionCount>
            <ChannelDesc>{description}</ChannelDesc>
          </ChannelDetailsContainer>
        </ChannelDescriptionContainer>
      </VideoPlayer>
    )
  }

  renderLoadingView = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoadingContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry()} />

  renderApiView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <VideoItemDetailsContainers>
          <Sidebar />
          <VideoPlayerContainer>{this.renderApiView()}</VideoPlayerContainer>
        </VideoItemDetailsContainers>
      </>
    )
  }
}
export default VideoItemDetails
