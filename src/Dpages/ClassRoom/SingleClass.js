import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Container, ContainerCenter } from '../../Styled-component/Section-component';
import { Button } from '../../Styled-component/Styled-component';
import { HeroPara, HeroText } from '../../Styled-component/Styled-text';
import theme from '../../Styled-component/Theme/Dark';
import 'react-toastify/dist/ReactToastify.css';
import Student from '../Students/Student';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const SingleClass = () => {
  const [reqData, setReqData] = useState([]);
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [student, setStudent] = useState();

  useEffect(() => {
    fetch(`https://on-trackz-backend.vercel.app/student/${id}`)
      .then(res => res.json())
      .then(data => setStudent(data.data))
  }, [id, student])

  useEffect(() => {
    fetch(`https://on-trackz-backend.vercel.app/class/${id}`)
      .then(res => res.json())
      .then(data => setReqData(data.data))
  }, [id, reqData])

  const request = reqData?.request;
  const [state, setState] = useState(false);


  const deleteReq = (email) => {

    fetch(`https://on-trackz-backend.vercel.app/classroom/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(email)
    })
      .then(res => res.json())
      .then(data => {
        if (data.data.acknowledged) {
          toast.success('Request accepted Successfully')
        }
        else {
          toast.error(data.message)
        }
      })

      .catch(error => console.error(error))
  }


  const handleAccept = (req) => {

    const roomId = {
      id
    }

    const email = {
      req
    }

    fetch(`https://on-trackz-backend.vercel.app/user/${req}`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(roomId)
    })
      .then(res => res.json())
      .then(data => {
        if (data.data.acknowledged) {
          deleteReq(email)
        }
        else {
          toast.error(data.message)
        }
      })

      .catch(error => console.error(error))

  }

  return (
    <Container height="100vh">
      <HeroPara fontC={theme.white}>ClassID: {reqData?._id}</HeroPara>
      <HeroText fontC={theme.white}>{reqData?.subject}</HeroText>

      <Container column="2,1fr" border={`2px solid ${theme.primary}`}>
        <HeroPara onClick={() => setState(false)} pointer fontC={!state ? theme.white : theme.secondary}>Student list</HeroPara>
        <HeroPara onClick={() => setState(true)} pointer fontC={state ? theme.white : theme.secondary}>Class Request</HeroPara>
      </Container>
      <Container>
        {
          state ? <>
            <HeroPara fontC={theme.white}>Class Request</HeroPara>
            {
              request && request?.map((req, id) => <HeroPara key={id} fontSize="1.6rem" fontC={theme.white}>{req} &nbsp;
                <Button onClick={() => handleAccept(req)}>accept</Button>
              </HeroPara>)
            }
          </>
            :
            <>
              <HeroPara fontC={theme.white}>Student list</HeroPara>
              <ContainerCenter>
                <DatePicker className='date' selected={startDate} onChange={(date) => setStartDate(date)} />
              </ContainerCenter>
              <Student startDate={startDate} student={student}></Student>
            </>
        }
      </Container>
      <ToastContainer />
    </Container>
  );
};

export default SingleClass;