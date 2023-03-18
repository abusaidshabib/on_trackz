import styled from "styled-components";
import theme from "./Theme/Dark";

export const Title1 = styled.h1`
      font-size: 4.2rem;
      line-height: 6.32rem;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: ${p => p.allCaps || "capitalize"};
      color: ${(p) => p.fontC};
`

export const Para1 = styled.p`
      font-size: ${p => p.fontSize}; //2.2rem
      line-height: ${p => p.fontLine}; //3.6rem
      color: ${(p) => p.fontC};
      text-align: ${p => p.left ? "left": "center"};
`

export const Label = styled.label`

    font-size: 2.6rem;
    line-height: 4.8rem;
    font-weight: 600;
    color: ${(p) => p.fontC};
`

export const Logo = styled.p`
    font-size: 1.8rem;
    text-align: center;
    color: ${theme.white};
    letter-spacing: 2px;
    text-transform: uppercase;      
    font-weight: 500;
    border-bottom: 10px solid ${theme.main_background};
    line-height: 6rem;

    span{
      color:${theme.primary};
      font-weight: 600;
    }
`

export const HeroText = styled.h1`
    font-size: 5.2rem;
    line-height: 7.8rem;
    color: ${p => p.fontC};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
`

export const HeroPara = styled.p`
    font-size: 2.6rem;
    line-height: 3.9rem;
    color: ${p => p.fontC};
    text-align: center;
    cursor: ${p => p.pointer && "pointer"};
`