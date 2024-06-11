import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
// import { ContainerStyled } from "../../Styled/SharedStyled/ContainerStyled";


export const BoxLinksCategories = styled.div`
    display: flex;
    gap: 28px;
    margin-top: 20px;
    margin-bottom: 40px;
`





export const Links = styled(NavLink)`
    color: rgba(239, 237, 232, 0.4);
    &.active{
        color: #FFFFFF;
        position: relative;
        &::before{
            position: absolute;
            width: 100%;
            height: 4px;
            bottom: -4px;
            content: ' ';
            background-color: rgba(239, 137, 100, 1);
            border-radius: 2px;
        }
    }
`

