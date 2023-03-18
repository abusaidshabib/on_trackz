import styled from "styled-components";
import theme from "./Theme/Dark";

export const FormContainer = styled.div`
      display: grid;
      grid-template-columns: repeat(${p => p.columns || "2, 1fr"});
      min-height: 100vh;
      height: auto;
      padding: 0 80px;
      background-color: ${theme.main_background};
`


export const ContainerImg = styled.div`
      background-image: url(${(p) => p.bgImg});
      background-position: center;
      background-repeat: no-repeat;
      place-content: center;
      background-size: 70%;
`

export const Form = styled.form`
  display: grid;
  place-content: center;
  padding: 30px 0;

  .paddingTop{
    padding-top: 30px;
  }

  .paddingDown{
    padding-bottom: 30px;
    font-size: 1.8rem;
    color: ${theme.white};
    line-height: 4rem;
  }

  .link{
    color: ${theme.primary}
  }
`

export const InputField = styled.input`
  font-size: 1.8rem;
  line-height: 2.5rem;
  letter-spacing: 2px;
  padding: 20px;
  border: none;
  background-color: ${theme.white};
  color: ${theme.main_background};

  &:focus{
    outline: none;
    background-color: ${theme.secondary};
  };

  &::placeholder{
    color: ${theme.gray}
  }
`

export const InputButton = styled.input`
    padding: 24px 28px;
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 800;
    border: none;
    background-color: ${theme.secondary};
    color: ${theme.white};

    &:hover{
      background-color: ${theme.gray};
      color: ${theme.white};
    }
`

export const SideContainer = styled.div`
    width: 250px;
    height: 100vh;
    place-content: top;
    background-color: ${theme.sub_background};
    position: fixed;

    ul{
      list-style-type: none;
      margin: 0;
      padding-top: 30px;
      display: grid;
      justify-content: center;
    }

    li{
      margin: 0;
      padding: 0;
    }

    .menu{
      text-decoration: none;
      font-size: 1.6rem;
      line-height: 3rem;
      letter-spacing: 2px;
      font-weight: 700;
      text-transform: uppercase;
      color: ${theme.primary};
    }

    .active{
      color: ${theme.white}
    }

`

export const Select = styled.select`

    margin: 30px 0;
    background-color: transparent;
    color: ${theme.white};
    font-size: 1.8rem;
    text-transform: capitalize;
    letter-spacing: 2px;
    padding: 10px;
    border: 2px solid ${theme.white};

    &:focus{
      background-color: ${theme.sub_background};
      color: ${theme.white}
    }
`

export const Button = styled.button`
    padding: 16px 28px;
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 800;
    border: none;
    background-color: ${theme.secondary};
    color: ${theme.white};

    &:hover{
      background-color: ${theme.gray};
      color: ${theme.white};
    }
`


