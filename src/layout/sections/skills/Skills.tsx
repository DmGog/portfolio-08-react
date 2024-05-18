import React from "react";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/Icon";
import {theme} from "../../../styles/Theme";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper justify={"center"} align={"center"}>
                    <Icon iconId={"figma"}/>
                    <Icon iconId={"html"}/>
                    <Icon iconId={"css"}/>
                    <Icon iconId={"sass"}/>
                </FlexWrapper>
            </Container>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: ${theme.colors.secondaryBg};
    padding: 50px 0;

    ${FlexWrapper} {
        gap: 170px;
    }
`
