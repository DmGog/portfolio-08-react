import React from "react";
import styled from "styled-components";
import {Icon} from "../../../../components/Icon";

type WorkPropsType = {
    iconId: string
    title: string
}


export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Icon iconId={props.iconId} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
            <WorkText>
                {props.title}
            </WorkText>

        </StyledWork>
    );
};

const StyledWork = styled.div`
    max-width: 288px;
    padding: 36px 32px;
    width: 100%;
    height: 295px;
    background-color: #c4c4c4;;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const WorkText = styled.h2`
    margin-bottom: 10px;
`