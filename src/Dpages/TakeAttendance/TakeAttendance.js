import React from 'react';
import { useApi } from '../../Context/ApiContext';
import { Table, TableContainer } from '../../Styled-component/Section-component';
import Status from './Status';

const TakeAttendance = () => {

  const { sattend } = useApi();

  var moment = require("moment");


  return (
    <TableContainer>
      <Table>
        <tbody>
          <tr>
            <th>{moment().format('L')}</th>
          </tr>
          <tr>
            <th>Student Name</th>
            <th>Student status</th>
          </tr>
          {
            sattend.map(data => (
              <Status data={data}>
              </Status>
            ))
          }
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default TakeAttendance;