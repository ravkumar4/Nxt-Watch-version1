import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDesc,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundDesc>
      We are sorry, the page you requested could not be found.
    </NotFoundDesc>
  </NotFoundContainer>
)
export default NotFound
