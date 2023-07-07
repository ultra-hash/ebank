import styled from 'styled-components'

export const OuterContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #152850;
`
export const InnerContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`
export const BodySection = styled.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LogoImage = styled.img`
  width: 100px;
`
export const LogoutButton = styled.button`
  outline: none;
  border: 1px solid #ffffff;
  color: #ffffff;
  background-color: transparent;
  padding: 10px 20px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 40px;
`

export const CardImg = styled.img`
  width: 500px;
`
