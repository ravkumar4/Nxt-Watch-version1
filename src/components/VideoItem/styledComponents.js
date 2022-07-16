import styled from 'styled-components'

export const VideoViewItem = styled.li`
  list-style-type: none;
  min-width: 150px;
  max-width: 800px;
  width: 350px;
  min-height: 100px;
  max-height: 400px;
  height: 700px;
  padding: 0px;
  margin-right: 15px;

  @media (max-width: 567px) {
    min-width: 150px;
    max-width: 569px;
    width: 95%;
    padding: 10px;
    margin-right: 5px;
  }
`

export const VideoThumbnail = styled.img`
  width: 350px;
  height: 200px;
`

export const VideoAlignment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;

  @media (max-width: 567px) {
    min-width: 150px;
    max-width: 569px;
    width: 95%;
  }
`

export const VideoLogo = styled.img`
  height: 25px;
  width: 25px;
  align-self: flex-start;
  margin-top: 15px;
  margin-right: 15px;
`
export const VideoTextContext = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  margin-bottom: 0;
  color: #231f20;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  margin-bottom: 0;
  color: #231f20;
`

export const ViewsDateContainer = styled.div`
  display: flex;
`

export const ViewsCount = styled.p`
  font-family: 'Roboto';
  margin-right: 5px;
  color: #313131;
`

export const PublishedDate = styled.p`
  font-family: 'Roboto';
  margin-left: 2px;
  color: #313131;
`

export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
