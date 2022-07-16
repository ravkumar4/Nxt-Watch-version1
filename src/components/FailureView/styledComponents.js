import styled from 'styled-components'

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
