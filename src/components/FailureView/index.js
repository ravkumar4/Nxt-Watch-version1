import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureRetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props
  const onClickRetry = () => {
    onRetry()
  }

  return (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureText>
        We are having some trouble to complete your request. Please try again.
      </FailureText>
      <FailureRetryButton type="button" onClick={onClickRetry}>
        Retry
      </FailureRetryButton>
    </FailureContainer>
  )
}
export default FailureView
