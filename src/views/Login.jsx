import React, { useState } from 'react'
import styled from "styled-components";

const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
background-image: url(/images/backgrounds/loginBg.jpg);
 background-repeat: no-repeat;
 background-size: cover;
 height: 100vh;
 padding:0;
@media (max-width: 480px) {
 background-image:none;
};

`;
const Header = styled.h1 `
  color:#012E4A;
  text-align: center;
  text-transform: uppercase;

`;
const Header3 = styled.h3 `
  color:#378BA4;
  text-align: center;
`;
const StyleDiv = styled.form `
  display: flex;
  flex-direction : column;
  justify-content: center;
  padding:1rem;
  @media (min-width: 480px) {
   display: flex;
  flex-direction : column;
  justify-content: space-between;
 }


`;
const WrapperDiv = styled.div `
width: 20rem;
display: flex;
flex-direction: column;
align-items: center;
background:#E8EDE7;
margin: auto;
/* margin-top: 3rem; */
padding: 3rem;
padding-top:1rem;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
@media (max-width: 480px) {
height:100%;
};
`;

const Input = styled.input `
box-shadow: inset 0 0.0625em 0.125em rgba(10,10,10,.05);
max-width: 100%;
width:20rem;
border-color: #ffe08a;
background-color: #fff;
border-color: #dbdbdb;
border-radius: 4px;
color: #363636;
border:none;
padding: 0.5rem;
margin-bottom :1rem;
&:focus {
  outline:none
}
   

`;

const RememberMe = styled.div `
  display:flex ;
  justify-content: space-between;
  margin-bottom : 1rem;
  
`;
const Hold = styled.div `
display:flex;
flex-direction:column;
justify-content: center;
width: 100%;
margin-right: 25px;

`
const ClickLink= styled.a `
text-decoration: none;
cursor: pointer;
color:#036280;
&:hover{
  color:#036280;
}

`;
const ButtonSignIn = styled.button `
    background:#036280;
    border: none;
    border-radius: 1px 2px 1px 2px;
    color: white;
    padding: 0.5rem;
    cursor: pointer;
    :hover{
        background:#378BA4; 
    }

`;

const Text = styled.div `
 display: flex;
 justify-content : space-between;
 align-items: center;


`;


export default function Login() {
    const [login, setLogin] = useState({
      rememberMe : false
    })
    const [error, setError] = useState({});
    const handleUsername = (e) => {
      setLogin({ ...login, username: e.target.value })
    }
    const handlePassword = (e) => {
      setLogin({ ...login, password: e.target.value })
    }
    const handleCheckbox = (e) => {
      const newdata = { ...login };
      newdata[e.target.id] = e.target.checked
      setLogin(newdata);
    }
    function Validation(data) {
      let error = {};
      if (!data.username) {
        error.username = "username required";
      }
      if (!data.password) {
        error.password = "username required";
      }
      return error;
    }
    const onSubmit = (e) => {
      e.preventDefault();
      console.log(login);
      setError(Validation(login))
    }
    return (
  
      <Container >
        <WrapperDiv>
          <Header>ESA-BFQ</Header>
          <Header3>Login</Header3>
          <StyleDiv >
  
            <Hold >
              {error.username ? <><Input type="text" style={{border: '1px solid red'}} placeholder='Required Field' id="username" onChange={handleUsername} required /></> : <><Input type="text" placeholder='Username*' id="username" onChange={handleUsername} required /></>}
            </Hold>
            <Hold>
              {error.password ? <><Input type="password" id="password" style={{border: '1px solid red'}} placeholder='Required Field' onChange={handlePassword} required /></> : <><Input type="password" id="password" placeholder='password*' onChange={handlePassword} required /></>}
            </Hold>
            <RememberMe>
              <Text>
                <input type="checkbox" name="remember" id="rememberMe" onChange={handleCheckbox} />
                <label style={{marginLeft: "00.5rem"}}>Remember Me</label>
              </Text>
              <Text><ClickLink to='/'>ForgetPassword</ClickLink></Text>
            </RememberMe>
            <ButtonSignIn to="/" type='submit'  onClick={onSubmit} >LogIn</ButtonSignIn>
            
          </StyleDiv>
        </WrapperDiv>
      </Container>
  
  
    )
  
  }