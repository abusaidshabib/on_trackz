import React from 'react';
import { Container, IconText } from '../../../Styled-component/Section-component';
import img1 from "../../../assets/purpose1.svg";
import img2 from "../../../assets/purpose2.svg";
import img3 from "../../../assets/purpose3.svg";
import { Para1 } from '../../../Styled-component/Styled-text';
import theme from '../../../Styled-component/Theme/Dark';


const Provide = () => {
  return (
    <Container padding="100px 80px" column="3, 1fr" height="50vh">
      <IconText>
        <img src={img1} alt="" />
        <span>
          <Para1 fontSize="2rem" fontLine="2.5rem" fontC={theme.white}>An attendance app is a software application</Para1>
        </span>
      </IconText>
      <IconText>
        <img src={img2} alt="" />
        <span>
          <Para1 fontSize="2rem" fontLine="2.5rem" fontC={theme.white}>An attendance app is a software application</Para1>
        </span>
      </IconText>
      <IconText>
        <img src={img3} alt="" />
        <span>
          <Para1 fontSize="2rem" fontLine="2.5rem" fontC={theme.white}>An attendance app is a software application</Para1>
        </span>
      </IconText>
    </Container>
  );
};

export default Provide;