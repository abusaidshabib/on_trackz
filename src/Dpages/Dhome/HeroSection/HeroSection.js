import React, { useEffect, useState } from 'react';
import { Container } from '../../../Styled-component/Section-component';
import { HeroPara, HeroText } from '../../../Styled-component/Styled-text';
import theme from '../../../Styled-component/Theme/Dark';
import img from "../../../assets/hero.svg";
import { Button, InputButton, InputField } from '../../../Styled-component/Styled-component';
import { useAuth } from '../../../Context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';


const HeroSection = () => {

  const { duser, user, demoUser } = useAuth();
  const [Id, setId] = useState("");
  const [data, setData] = useState();

  console.log(duser?.status);

  useEffect(() => {
    fetch(`https://on-trackz-backend.vercel.app/class/${Id}`)
      .then(res => res.json())
      .then(data => setData(data.data.subject))
  }, [Id])




  const handleCreate = (e) => {
    e.preventDefault();
    const form = e.target;
    const subject = form.subject.value;

    if (user?.email) {
      const temail = user.email

      const classroom = {
        subject: subject,
        temail: temail,
        request: []
      }

      fetch('https://on-trackz-backend.vercel.app/classroom', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(classroom)
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
    else {
      const temail = demoUser.email;

      const classroom = {
        subject: subject,
        temail: temail,
        request: []
      }

      fetch('https://on-trackz-backend.vercel.app/classroom', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(classroom)
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged) {
            form.reset();
            toast.success('User Create Successfully')
          }
          else {
            toast.error(data.message)
          }
        })
        .catch(err => console.err(err))
    }

  }

  const handleReq = (e) => {
    e.preventDefault();
    const form = e.target;
    const Id = form.roomId.value;

    const email = {
      email: user?.email
    }

    fetch(`https://on-trackz-backend.vercel.app/classroom/${Id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(email)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('Request send Successfully')
        }
        else {
          toast.error(data.message)
        }
      })
      .catch(err => console.err(err))
  }

  return (
    <Container height="100vh" padding="0px 150px" bgImg={img}>
      <HeroText fontC={theme.primary}>Your Reliable Companion for Effortless Tracking</HeroText>
      <HeroPara fontSize="2.2rem" fontLine="3.6rem" fontC={theme.white}>Effortlessly Manage Attendance and Stay on Top of Your Schedule</HeroPara>
      {
        (duser?.status === "Teacher" || demoUser) &&
        <form onSubmit={handleCreate} className="flex-center">
          <InputField type="text" name="subject" id="subject" placeholder='Please Enter Subject ' />
          <InputButton type="submit" value="Create Classroom" />
        </form>

      }
      {
        (duser?.status === "Student" || demoUser) &&
        <form className="flex-center" onSubmit={handleReq}>
          <InputField type="text" name="roomId" id="roomId" placeholder='Please Enter Classroom Id ' />
          <InputButton type="submit" value="Join Classroom" />
          <ToastContainer />
        </form>
      }
      {data && <>
        <HeroPara fontC={theme.white}>{data}</HeroPara>
      </>

      }
    </Container>
  );
};

export default HeroSection;