//styled components, instalar biblioteca:
//npm install --save styled-components
import styled from "styled-components"

export const Image = styled.img`
    margin-top: 30px;
    
`

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    padding-left: 25px;

    p{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`