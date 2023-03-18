import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../Styled-component/Section-component';
import { Form, InputButton, InputField } from '../../Styled-component/Styled-component';
import { Label, Para1, Title1 } from '../../Styled-component/Styled-text';
import theme from '../../Styled-component/Theme/Dark';

const AddSubject = () => {
  return (
    <Container height="100vh">
      <Form>
        <Title1 fontC={theme.white} allCaps="uppercase">Add Subject</Title1>
        <Para1 fontSize="2.2rem" fontC={theme.white}>Some sites may be required by law to verify the identity of their users, which can only be done through login credentials</Para1>

        <Label fontC={theme.white} className='paddingTop'>Subject Name</Label>
        <InputField placeholder='Subject Name' />
        <InputButton type="submit" />
      </Form>
    </Container>
  );
};

export default AddSubject;