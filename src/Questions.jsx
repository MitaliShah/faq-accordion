import SingleQuestion from "./SingleQuestion";
import iconStar from "./assets/icon-star.svg";
import { styled } from 'styled-components';

export default function Questions({ questions }) {
    return (
        <section>
            <Header>
                <IMG src={iconStar} alt=""/>
                <Heading>FAQs</Heading>
            </Header>            
            {questions.map((question) => (
                <SingleQuestion key={question.id} {...question} />
            ))}
        </section>
    )
}

const Header = styled.header`
    display: flex;
    text-align: left;
    display: flex;
    align-items: center;
`;

const IMG = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1.5rem;
`;

const Heading = styled.h1`
    color: #301534;
    font-family: Work Sans;
    font-size: 2rem;
    font-weight: 700;   
`;