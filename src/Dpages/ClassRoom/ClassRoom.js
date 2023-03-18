import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { Container } from '../../Styled-component/Section-component';

const ClassRoom = () => {

  const { classroom } = useAuth();
  console.log(classroom);

  return (
    <Container height="100vh">
      {
        classroom.map(room =>
          <Link className='largeLink' to={`/class/${room._id}`} key={room._id}>
            <p>{room.subject}</p>
          </Link>
        )
      }
    </Container>
  );
};

export default ClassRoom;