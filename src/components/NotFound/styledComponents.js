import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 800px;
  max-width: 1800px;
  width: 100%;
  height: 100vh;

  @media (max-width: 567px) {
    min-width: 350px;
    max-width: 600px;
  }

  @media (min-width: 568px) and (max-width: 767px) {
    min-width: 600px;
    max-width: 800px;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    min-width: 800px;
    max-width: 1200px;
  }
`

export const NotFoundImage = styled.img`
  min-width: 200px;
  max-width: 600px;
  width: 350px;
  height: 330px;
  align-self: center;
  margin-bottom: 15px;

  @media (max-width: 568px) {
    width: 100px;
    height: 20px;
    margin-bottom: 10px;
  }

  @media (min-width: 569px) and (max-width: 768px) {
    width: 90px;
    height: 25px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    width: 60px;
  }
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  color: #1e293b;
  font-weight: 500;
  margin-bottom: 5px;

  @media (max-width: 568px) {
    font-size: 10px;
  }

  @media (min-width: 569px) and (max-width: 767px) {
    font-size: 12px;
  }
`

export const NotFoundDesc = styled.p`
  font-family: 'Roboto';
  color: #1e293b;
  font-weight: 500;
  margin-bottom: 5px;

  @media (max-width: 568px) {
    font-size: 10px;
  }

  @media (min-width: 569px) and (max-width: 767px) {
    font-size: 12px;
  }
`
