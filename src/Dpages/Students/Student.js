import React from 'react';
import { toast } from 'react-toastify';
import { Table, TableContainer } from '../../Styled-component/Section-component';
const Student = ({ student, startDate }) => {
  const formattedDate = startDate.toLocaleDateString('en-GB').replace(/\//g, '-');


  const PostData = (report, id) => {
    fetch(`https://on-trackz-backend.vercel.app/report/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(report)
    })
      .then(res => res.json())
      .then(data => {
        if (data.data.acknowledged) {
        }
        else {
          toast.error(data.message)
        }
      })

      .catch(error => console.error(error))
  }

  const handleAbsent = (data) => {

    const report = {
      report: "A",
      date: formattedDate
    }
    const id = data._id
    PostData(report, id)
  }

  const handlePresent = (data) => {
    const report = {
      report: "P",
      date: formattedDate
    }
    const id = data._id
    PostData(report, id)
  }

  return (
    <TableContainer padding="30px 80px" height="100vh">
      <Table>
        <tr className='head'>
          <th>Roll</th>
          <th>Name</th>
          <th>Email</th>
          <th>Take Attendance</th>
        </tr>
        {
          student?.map(data =>
            <tr key={data._id} >
              <td>{data._id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              {
                data?.report?.includes(`${formattedDate}`) ?
                  <td onClick={() => handlePresent(data)}>P</td>
                  :
                  <td onClick={() => handleAbsent(data)}>A</td>
              }
            </tr>
          )
        }
      </Table>
    </TableContainer>
  );
};

export default Student;
