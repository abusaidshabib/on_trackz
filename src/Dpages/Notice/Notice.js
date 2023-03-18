import React, { useEffect, useState } from 'react';
import { useApi } from '../../Context/ApiContext';
import { Container, Table, TableContainer } from '../../Styled-component/Section-component';
import { Form, InputButton, InputField, Select } from '../../Styled-component/Styled-component';
import { Label, Para1, Title1 } from '../../Styled-component/Styled-text';
import theme from '../../Styled-component/Theme/Dark';

const Notice = () => {

  const { notice } = useApi();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const notice = form.notice.value;

    
  }

  return (
    <Container height="100vh" padding="0 80px" column="4fr 8fr">

      <Form onSubmit={handleSubmit}>
        <Title1 fontC={theme.white} allCaps="uppercase">Add Notice</Title1>
        <Para1 fontSize="2.2rem" fontLine="3.6rem" left fontC={theme.white}>Some sites may be required by law to verify the identity of their users, which can only be done through login credentials</Para1>

        <Label fontC={theme.white} className='paddingTop'>Add Notice</Label>
        <InputField placeholder='Add Notice' />

        <InputButton type="submit" />
      </Form>

      <TableContainer height="100vh">
        <Table>
          <tr className='head'>
            <th>Subject</th>
            <th>Course Id</th>
          </tr>
          {
            notice.map(data =>
              <tr>
                <td>{data.subject}</td>
                <td>{data.notice.notice}</td>
              </tr>
            )
          }
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Notice;