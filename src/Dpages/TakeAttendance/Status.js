import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useApi } from '../../Context/ApiContext';
import { TableData } from '../../Styled-component/Section-component';
import 'react-toastify/dist/ReactToastify.css';

const Status = ({ data }) => {

  // const { handleSet } = useApi();

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero if necessary
  const day = String(today.getDate()).padStart(2, '0'); // Add leading zero if necessary

  const formattedDate = `${year}-${month}-${day}`;


  function handleStatus(e, data) {
    if (e === "p") {
      const newData = {
        date: formattedDate,
        status: "a"
      }

      fetch(`https://on-trackz-backend.vercel.app/students/${data._id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newData)
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
      const newData = {
        date: formattedDate,
        status: "p"
      }

      fetch(`https://on-trackz-backend.vercel.app/students/${data._id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newData)
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
  }



  return (
    <tr>
      <td>{data.name}</td>
      {
        data.attendance.filter(obj => obj.data === formattedDate).map(data1 => (
          <TableData>
            <input onClick={(e) => handleStatus(e.target.value, data)} type="text" name="status" id="status" Value={data1.status} />
          </TableData>
        ))
      }
      <ToastContainer />
    </tr>
  );
};

export default Status;