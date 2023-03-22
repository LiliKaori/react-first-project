import styled from "styled-components"

export const ContainerButton = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 130px;
    background: ${props => props.isBack ? "none" : "rgba(0, 0, 0, 0.8)"};
    border-radius: 14px;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    border: ${props => props.isBack ? "1px solid #FFFFFF" : "none"};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    img{
        transform: ${props => props.isBack && "rotateY(180deg)"};
    }
`