import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  min-width: 800px;
  max-width: 1800px;
  width: 100%;

  @media (max-width: 567px) {
    min-width: 150px;
    max-width: 569px;
    width: 100%;
  }
`
export const InnerHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 800px;
  max-width: 1800px;
  width: 100%;

  @media (max-width: 567px) {
    min-width: 150px;
    max-width: 569px;
    width: 99%;
  }
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  min-width: 500px;
  max-width: 1500px;
  width: 100%;
  height: 300px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 567px) {
    width: 306px;
    height: 200px;
  }
`
export const BannerImageLogo = styled.img`
  width: 120px;
  height: 35px;

  @media (max-width: 567px) {
    width: 100px;
    height: 30px;
  }
`

export const BannerHeading = styled.h1`
  color: #101010;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;

  @media (max-width: 567px) {
    font-size: 17px;
  }
`
export const GetNowButton = styled.button`
  background-color: transparent;
  border: 1px solid #383838;
  color: #383838;
  font-family: 'Roboto';
  cursor: pointer;
  padding: 10px 25px;
  font-weight: 500;
  margin-top: 10px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-start;
`

export const VideosContainer = styled.div`
  background-color: #e2e8f0;
  min-width: 500px;
  max-width: 1500px;
  width: 100%;
  padding: 10px;
`

export const SearchContainer = styled.div`
  min-width: 50px;
  max-width: 500px;
  padding-left: 40px;
  width: 470px;
  display: flex;
  margin-top: 30px;
  background-color: #e2e8f0;

  @media (max-width: 567px) {
    width: 300px;
  }
`
export const SearchInputContainer = styled.input`
  padding: 5px;
  width: 465px;
  outline: none;
  padding: 7px;
  background-color: #e2e8f0;
  border: 1px solid #64748b;
`
export const SearchButton = styled.button`
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  // border:  border: 1px solid #64748b;

  @media (max-width: 567px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 567px) {
    width: 550px;
  }
`

export const FailureImage = styled.img`
  height: 250px;
  width: 250px;

  @media (max-width: 567px) {
    width: 150px;
    height: 150px;
  }
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: #212121;

  @media (max-width: 567px) {
    font-size: 19px;
  }
`

export const FailureText = styled.p`
  font-family: 'Roboto';
  color: #383838;
  font-size: 20px;
  margin-top: 0;
  text-align: center;
`

export const FailureRetryButton = styled.button`
  cursor: pointer;
  font-family: 'Roboto';
  background-color: #00306e;
  color: #ffffff;
  border: none;
  outline: none;
  padding: 9px 27px;
  border-radius: 4px;
  font-size: 18px;
`
export const VideosUnOrderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;

  @media (max-width: 567px) {
    min-width: 150px;
    max-width: 569px;
    width: 95%;
  }
`
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
