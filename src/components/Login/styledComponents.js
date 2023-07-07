import styled from 'styled-components'

export const OuterContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #152850;
`
export const InnerContainer = styled.div`
  border-radius: 20px;
  background-color: #e0eefe;
  display: flex;
`
export const LeftContainer = styled.div`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 40px 20px;
`
export const RightContainer = styled.div`
  border-radius: 20px;
  background-color: #ffffff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const LoginPageImg = styled.img`
  width: 360px;
  margin: 50px 0;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const Heading = styled.h1`
  margin-bottom: 10px;
  color: #183b56;
`
export const FormItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const FormLabel = styled.label`
  font-weight: bold;
  color: #5a7184;
`
export const FormTextInput = styled.input`
  padding: 8px;
  width: 300px;
  outline: none;
  border: 1px solid #c3cad9;
  border-radius: 5px;
`
export const LoginButton = styled.button`
  background-color: #1565d8;
  color: #ffffff;
  border-radius: 5px;
  border: 0;
  outline: none;
  padding: 10px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
`
