import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoViewItem,
  VideoThumbnail,
  VideoAlignment,
  VideoLogo,
  VideoTextContext,
  VideoTitle,
  ChannelName,
  ViewsDateContainer,
  Dot,
  ViewsCount,
  PublishedDate,
} from './styledComponents'

const VideoItem = props => {
  const {videos} = props
  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videos
  const videoPublishedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <VideoViewItem>
      <Link to={`video/${id}`}>
        <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
      </Link>
      <VideoAlignment>
        <VideoLogo src={profileImageUrl} alt={title} />
        <VideoTextContext>
          <VideoTitle>{title}</VideoTitle>
          <ChannelName>{name}</ChannelName>
          <ViewsDateContainer>
            <ViewsCount>
              {viewCount} views <Dot> &#8226; </Dot>
            </ViewsCount>

            <PublishedDate> {videoPublishedDate} ago</PublishedDate>
          </ViewsDateContainer>
        </VideoTextContext>
      </VideoAlignment>
    </VideoViewItem>
  )
}
export default VideoItem
