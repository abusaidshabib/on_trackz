import styled from "styled-components";
import theme from "./Theme/Dark";

export const Container = styled.div`
      padding: ${(p) => p.padding || "auto"};
      margin: ${(p) => p.margin || "auto"};
      display: grid;
      background-color: ${theme.main_background};
      width: 100%;
      min-height: ${p => p.height};
      height: auto;
      place-content: center;
      background-image: url(${p => p.bgImg});
      background-repeat: no-repeat;
      background-position:  bottom right;
      grid-template-columns: repeat(${p => p.column || "1,1fr"});
      gap: 30px;
      justify-items: center;
      border-bottom: ${p => p.border || "none"};

      .largeLink{
            text-decoration: none;
            padding: 50px 100px;
            background-color: ${theme.sub_background};
            width: 90%;
            text-align: center;
            font-size: 3rem;
            text-transform: uppercase;
            color: ${theme.primary};
            font-weight: 600;
            letter-spacing: 3px;
            border-radius: 20px;
      }

      .largeLink:hover{
            background-color: ${theme.secondary};
      }
`

export const IconText = styled.div`
      display: grid;
      place-content: center;
      justify-items: center;
      grid-template-rows: 8fr 4fr;

      img{
        width: 40%;
        padding-bottom: 30px;
      }
      span{

      }
`

export const TableContainer = styled.div`
      padding: ${(p) => p.padding || "auto"};
      background-color: ${theme.main_background};
      width: 100%;
      min-height: ${p => p.height};
      height: auto;
`

export const Table = styled.table`
      border-collapse: collapse;
      width: 100%;
       overflow-x: scroll;


      tr{
        display: flex;
        justify-content: space-between;
        color: ${theme.white};
        align-items: center;

      }

      th,td{
        font-size: 1.8rem;
        border: 1px solid ${theme.white};
        width: 100%;
        padding: ${(p) => p.padding || "20px 0"};
        display: flex;
        justify-content: center;
      }

      .padding{
            padding: 0;
      }

      td:hover{
            background-color: ${theme.white};
            color: ${theme.main_background}
      }

      .head{
            background-color: ${theme.primary};
            color: ${theme.main_background}
      }
`

export const TableData = styled.td`
      font-size: 1.8rem;
        border: 1px solid ${theme.white};
        width: 100%;
        padding: 20px 0;
        display: flex;
        justify-content: center;
        
        &:hover input{
            color: ${theme.main_background};
        }

      input:hover{
            cursor: pointer;
      }

      input{
            text-align: center;
            font-size: 1.8rem;
            background-color: transparent;
            border: none;
            color: ${theme.white};
            width: 100%;
            height: 100%;
      }

      input:focus{
            outline: none;
            cursor: pointer;
      }
`

export const ContainerCenter = styled.div`
            display: flex;

            .date{
                  font-size: 1.6rem;
                  line-height: 2.6rem;
                  text-align: center;
                  color: ${theme.white};
                  letter-spacing: 2px;
                  background-color: ${theme.secondary};
                  border: none;
            }

            .date:focus{
                  outline: none;
            }

            .react-datepicker__month-container{
                  width: 250px;
                  height: 250px;
                  place-content: center;
                  font-size: 1.4rem;
                  line-height: 2.6px;
            }
`