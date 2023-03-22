import styled from "styled-components"
import Background1 from "../../assets/Background1.svg"
import Background from "../../assets/Background.svg"

export const Div = styled.div`
    background: url(${Background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;

    ${props => props.user && `
        background: url(${Background1});
        background-size: cover;    
    `}
`