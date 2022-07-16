import styled from 'styled-components'

export const InnerSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 0;
`
export const SideBarContainer = styled.div`
  min-width: 150px;
  max-width: 300px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  background-color: #f9f9f9;
  margin: 0;

  @media (max-width: 567px) {
    display: none;
  }
`

export const SideText = styled.h1`
  color: #181818;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  margin-left: 10px;
`

export const FooterSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`
export const ContactHeader = styled.h1`
  color: #212121;
  font-family: 'Roboto';
  font-size: 17px;
  margin-left: 0;
  padding-left: 0;
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`

export const CompanyLogo = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`

export const CompanyText = styled.p`
  font-family: 'Roboto';
  color: #212121;
  font-size: 19px;
  font-weight: 500;
`

export const CustomButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
