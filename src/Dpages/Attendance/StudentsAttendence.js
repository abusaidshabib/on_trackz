import React from 'react';
import { TableData } from '../../Styled-component/Section-component';

const StudentsAttendence = ({ data}) => {

  return (
    <>
    {
        data?.map(data1 => <TableData>
            {data1.status}
        </TableData>)
    }
    </>
  );
};

export default StudentsAttendence;