import React from "react";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/Icon";

const social = [
    "dribble", "upwork", "youtube", "linkedin", "github"
]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <WrapperRight>
                        <TitleFooter>Let’s
                            Connect</TitleFooter>
                        <WrapperSocialIcon>
                            {social.map((s) => {
                                return <Link>
                                    <Icon iconId={s} width={"25"} height={"25"} viewBox={"0 0 25 25"}/>
                                </Link>
                            })}
                        </WrapperSocialIcon>
                    </WrapperRight>
                    <Form>
                        <label>Your name: <Field type={"text"}/></label>

                        <label>Your email address:<Field type={"email"}/></label>

                        <label>Tell about the project:<Field type={"text"}/></label>

                        <Button type={"submit"}>Send <Icon iconId={"arrowRight"} width={"30"} height={"30"}
                                                           viewBox={"0 0 30 30"}/></Button>
                    </Form>
                </FlexWrapper>
                <Copyright>Created by Zarror | All Reserved!</Copyright>
            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.secondaryBg};
    padding: 100px 0 50px;

    ${FlexWrapper} {
        gap: 256px;
        margin-bottom: 100px;

    }

    ${Container} {
        text-align: center;

    }
`
const WrapperRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const TitleFooter = styled.h2`
    margin-bottom: 31px;

`

const WrapperSocialIcon = styled.div`
    display: flex;
    gap: 50px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 500px;
    width: 100%;

    label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`
const Field = styled.input`
    width: 100%;
`
const Button = styled.button`
    background-color: unset;
    color: ${theme.colors.accentColor};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
}
`

const Copyright = styled.small``

const Link = styled.a`
    display: inline-block
`