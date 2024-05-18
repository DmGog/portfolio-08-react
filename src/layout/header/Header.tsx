import React from "react";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/Icon";


const items = [
    {
        title: "Home",
        href: "#",
    },
    {
        title: "About",
        href: "#",
    },
    {
        title: "Services",
        href: "#",
    },
]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <StyledLogo><Icon iconId={"logo"} width={"93"} height={"65"} viewBox={"0 0 93 65"}/></StyledLogo>
                    <StyledNav>
                        <StyledItem>
                            {items.map((item) => {
                                return <StyledListItem><Link href={item.href}>{item.title}</Link></StyledListItem>
                            })}
                        </StyledItem>
                    </StyledNav>
                    <StyledButton>Contact me</StyledButton>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
    background-color: gray;

`
const StyledLogo = styled.a`
   
`
const StyledNav = styled.nav`
    display: flex;
    align-items: center;
`
const StyledItem = styled.ul`
    display: flex;
    gap: 40px;
`
const StyledListItem = styled.li``
const Link = styled.a``
const StyledButton = styled.button``