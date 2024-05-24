import React from "react";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import {theme} from "../../../styles/Theme";


const workData = [
    {
        iconId: "computer",
        title: "Front End Developer"
    },
    {
        iconId: "paint",
        title: "UI/UX Designer"
    },
    {
        iconId: "thunder",
        title: "Branding Designer"
    },

]


export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <FlexWrapper justify={"space-between"}>

                    <StyledText>Years
                        Experience
                        Working</StyledText>

                    <WrapperWorks>
                        <Title>
                            Developer and Designer, specialized in<br/>
                            UI/UX and Web Developer
                        </Title>
                        <FlexWrapper>
                            {workData.map((w) => {
                                return (<Work iconId={w.iconId} title={w.title}/>)
                            })}
                        </FlexWrapper>

                    </WrapperWorks>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    padding: 100px 0;
    background-color: ${theme.colors.primaryBg};
`
const StyledText = styled.p`
    max-width: 207px;
    width: 100%;
    margin-right: 96px;
`
const WrapperWorks = styled.div`
    max-width: 894px;
    width: 100%;
    ${FlexWrapper}{
        gap: 10px;
    }

`
const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`