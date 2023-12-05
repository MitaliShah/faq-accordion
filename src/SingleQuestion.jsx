import { useState } from "react";
import iconMinus from "./assets/icon-minus.svg";
import IconPlus from "./assets/icon-plus.svg";
import { styled } from 'styled-components';

export default function SingleQuestion({ title, info }) {
    const [show, setShow] = useState(false);

    return (
        <Wrapper>
            <details>
                <Summary onClick={() => setShow(!show)}>
                    <Title>{title}</Title>
                    {show ? <Img src={iconMinus} alt="" /> : <Img src={IconPlus} alt="" />}
                </Summary>
                <div>
                    <Info>{info}</Info>
                </div>
            </details>          
        </Wrapper>
    )
}
const Wrapper = styled.div`
    &:not(:first-of-type) {
        border-top: 0.0265rem solid #F8EEFF;
    }
`;

const Summary = styled.summary`
    list-style-type: none;
    color: #301534;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 0;
`;

const Info = styled.p`
    color: #8B6990;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
    padding-bottom: 1.25rem;

    @media (min-width: 37.5rem) {
        padding-bottom: 1.5rem;
    }
`;

const Title = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;

    @media (min-width: 37.5rem) {
        &:hover{
            color: #AD28EB;            
        }
    }    
`;

const Img = styled.img`
    width: 1.5rem;
    height: 1.5rem; 
    margin-left: 1.5rem;
`