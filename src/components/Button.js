import Styled from 'styled-components'

const Button = Styled.button`
  padding: 15px;
  background-color: #4CAF50;
  color: white;
  font-size: medium;
  border-style: none;
  border-radius: 15rem;
  box-shadow: 10px 10px 36px -10px rgba(0,0,0,0.75);
  outline: none;
  &:active{
    background-color: #3C9F40;
  }
`

export default Button
