import styled from 'styled-components'

export const LoginAppContainer = styled.div`
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

export const LoginFormContainer = styled.form`
  background-color: #ffffff;
  border: none;
  padding: 15px;
  box-shadow: 0px 1px 1px 0px #475569;
  border-radius: 10px;
  min-width: 200px;
  max-width: 800px;
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 50px;

  @media (max-width: 568px) {
    width: 300px;
    padding: 10px;
  }

  @media (min-width: 569px) and (max-width: 768px) {
    width: 400px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    width: 400px;
  }
`
export const AppLogo = styled.img`
  min-width: 30px;
  max-width: 100px;
  width: 115px;
  height: 30px;
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
export const UsernameLabel = styled.label`
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

export const UsernameInput = styled.input`
  padding: 7px;
  border: 1px solid #475569;
  border-radius: 2px;
  outline: none;
  margin-bottom: 18px;
  background-color: transparent;
  font-family: 'Roboto';

  @media (max-width: 568px) {
    padding: 3px;
  }
`
export const PasswordLabel = styled.label`
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

export const PasswordInput = styled.input`
  padding: 7px;
  border: 1px solid #475569;
  border-radius: 2px;
  outline: none;
  margin-bottom: 8px;
  background-color: transparent;
  font-family: 'Roboto';

  @media (max-width: 568px) {
    padding: 3px;
  }
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  margin-bottom: 5px;
  padding-left: 0;

  @media (max-width: 568px) {
    padding: 3px;
  }
`
export const ShowPasswordInput = styled.input`
  height: 17px;
  width: 17px;
  cursor: pointer;

  @media (max-width: 568px) {
    height: 15px;
    width: 15px;
  }
`

export const ShowPasswordLabel = styled.label`
  font-family: 'Roboto';
  color: #1e293b;
  margin-left: 5px;
  font-size: 15px;

  @media (max-width: 568px) {
    font-size: 12px;
  }
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  border: none;
  border-radius: 4px;
  padding: 8px;
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 0;

  @media (max-width: 568px) {
    padding: 5px;
  }
`

export const ShowErrorMessage = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
`
