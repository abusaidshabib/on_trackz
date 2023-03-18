import React from 'react';
import { ContainerImg, Form, FormContainer, InputButton, InputField } from '../../Styled-component/Styled-component';
import { Label, Para1, Title1 } from '../../Styled-component/Styled-text';
import theme from '../../Styled-component/Theme/Dark';
import img from "../../assets/login.svg";
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {

  const { logIn } = useAuth();

  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then(result => {
        const user = result.user;
        toast("successfully log in")
      })
      .catch(error => {
        console.log(error)
      });

  }

  return (
    <FormContainer padding="50px 80px">
      <ContainerImg bgImg={img}>
      </ContainerImg>
      <Form onSubmit={handleLogin}>
        <Title1 fontC={theme.primary} allCaps="uppercase">Please Login to Continue</Title1>
        <Para1 fontSize="2.2rem" fontLine="3.6rem" fontC={theme.white}>Some sites may be required by law to verify the identity of their users, which can only be done through login credentials</Para1>

        <Label htmlFor='email' fontC={theme.white}>Enter Your Email</Label>
        <InputField placeholder='Enter Your Email' id="email" name='email' type="email" />


        <Label htmlFor='password' fontC={theme.white}>Enter Your Password</Label>
        <InputField placeholder='Enter Your Password' type="password" name="password" id="password" />
        <p className='paddingDown'>If you have already have an account then <Link className='link' to="/register">register</Link></p>
        <InputButton type="submit" />
      </Form>
    </FormContainer>
  );
};

export default Login;