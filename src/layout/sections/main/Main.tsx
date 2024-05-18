import React from "react";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Mail from "../../../assets/images/mail.svg"
import Download from "../../../assets/images/download.svg"
import Photo from "../../../assets/images/img-fon.png"
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper>
                    <div>
                        <StyledName>Hello!
                            I’m Zarror Nibors</StyledName>
                        <StyledText>
                            I’am freelance <span>web developer</span> based in Indonesia who loves to craft attractive
                            design experiences
                            for the web.
                        </StyledText>
                        <div>
                            <StyledButton>
                                <img src={Mail} alt="mail"/>Email me
                            </StyledButton>
                            <StyledButton>
                                <img src={Download} alt="download"/>Download CV
                            </StyledButton>
                        </div>
                    </div>
                    <StyledPhoto src={Photo} alt="photo"/>

                </FlexWrapper>
            </Container>

        </StyledMain>
    );
};

const StyledMain = styled.section`
    background-color: ${theme.colors.primaryBg};
`
const StyledName = styled.span``
const StyledText = styled.p``
const StyledButton = styled.button``
const StyledPhoto = styled.img``