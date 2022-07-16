import styled from 'styled-components'

export const VideoItemDetailsContainers = styled.div`
  background-color: #e2e8f0;
  min-width: 500px;
  max-width: 1500px;
  width: 100%;
  display: flex;
`
export const VideoPlayerContainer = styled.div`
  color: #030303;
  padding: 15px;
  min-width: 400px;
  max-width: 1400px;
  width: 100%;
`
export const VideoPlayer = styled.div`
  padding-left: 50px;
`

export const VideTitle = styled.h1`
  color: #313131;
  font-size: 20px;
  font-family: 'Roboto';
  margin-top: 20px;
`

export const AlignmentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 400px;
  max-width: 1400px;
  width: 80%;
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const ViewsPublishContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ViewsCountText = styled.p`
  color: #606060;
  font-family: 'Roboto';
`

export const PublishedDateText = styled.p`
  color: #606060;
  font-family: 'Roboto';
`
export const LikesDislikesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  font-family: 'Roboto';
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 10px;
  color: ${props => (props.color ? '#3b82f6' : '#383838')};
`
export const DislikeButton = styled.button`
  background-color: transparent;
  border: none;
  font-family: 'Roboto';
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 10px;
  color: ${props => (props.color ? '#3b82f6' : '#383838')};
`

export const SaveVideoButton = styled.button`
  background-color: transparent;
  border: none;
  font-family: 'Roboto';
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 3px;
`
export const ChannelDescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 25px;
`
export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  align-self: flex-start;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  width: 100%;
`
export const ChannelName = styled.h1`
  font-family: 'Roboto';
  color: #424242;
  font-size: 17px;
  margin-bottom: 0;
`
export const ChannelSubscriptionCount = styled.p`
  font-family: 'Roboto';
  color: #909090;
  margin-bottom: 0;
`

export const ChannelDesc = styled.p`
  font-family: 'Roboto';
  color: #909090;
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
