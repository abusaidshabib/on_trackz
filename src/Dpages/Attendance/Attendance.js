import React, { useEffect } from 'react';
import { useApi } from '../../Context/ApiContext';
import { Table, TableContainer } from '../../Styled-component/Section-component';
import StudentsAttendence from './StudentsAttendence';

const Attendance = () => {

  const { attend, sattend } = useApi();
  const dates = attend.dates;


  return (
    <TableContainer padding="30px 80px" height="100vh">
      <Table >
        <tbody>
          {/* <tr className='head'>
            <th></th>
            {
              dates?.map(data =>
                <th>{data}</th>
              )
            }
          </tr> */}
          {
            sattend.map(data => (
              <tr>
                <th>{data.name}</th>
                <StudentsAttendence data={data.attendance}></StudentsAttendence>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default Attendance;