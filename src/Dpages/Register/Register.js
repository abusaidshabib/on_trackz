import React, { useState } from 'react';
import { ContainerImg, Form, FormContainer, InputButton, InputField, Select } from '../../Styled-component/Styled-component';
import { Label, Para1, Title1 } from '../../Styled-component/Styled-text';
import theme from '../../Styled-component/Theme/Dark';
import img from "../../assets/signup.svg";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../Context/AuthContext';

const Register = () => {

  const { createUser, updateUser, verify } = useAuth();

  const [select, setSelect] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const status = form.status.value;

    console.log(email, password)

    createUser(email, password)
      .then(result => {
        const user = result.user;
        const userData = {
          displayName: name
        }
        updateUser(userData)
          .then(() => {
            verify()
              .then(() => {
                newUser(email, name, status);
                navigate(from, { replace: true });
              })
              .catch(error => console.log(error));
          })
          .catch(error => console.log(error));
      })

  }


  const newUser = (email, name, status) => {
    const newreg = {
      name, email, status
    }
    fetch('https://on-trackz-backend.vercel.app/user', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newreg)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('User Create Successfully')
        }
        else {
          toast.error(data.message)
        }
      })
      .catch(err => console.err(err))
  }

  return (
    <FormContainer padding="50px 80px" columns="4fr 8fr">
      <Form onSubmit={handleSubmit}>
        <Title1 fontC={theme.white} allCaps="uppercase">Register to Continue</Title1>
        <Para1 fontSize="2.2rem" fontLine="3.6rem" fontC={theme.white}>Some sites may be required by law to verify the identity of their users, which can only be done through login credentials</Para1>

        <Label htmlFor='name' fontC={theme.white} className='paddingTop'>Enter Your Name</Label>
        <InputField placeholder='Enter Your Name' type="text" name='name' id="name" required />


        <Label htmlFor='email' fontC={theme.white}>Enter Your Email</Label>
        <InputField placeholder='Enter Your Email' id="email" name='email' type="email" />


        <Label htmlFor='password' fontC={theme.white}>Enter Your Password</Label>
        <InputField placeholder='Enter Your Password' type="password" name="password" id="password" />



        <Select onChange={(event) => setSelect(event.target.value)} id="status" name="status" className="select_form_field" required>
          <option value="select">Select Your role:</option>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
        </Select>

        <p className='paddingDown'>If you have already have an account then <Link className='link' to="/login">Login</Link></p>
        <InputButton type="submit" />
      </Form>
      <ToastContainer />
    </FormContainer>
  );
};

export default Register;