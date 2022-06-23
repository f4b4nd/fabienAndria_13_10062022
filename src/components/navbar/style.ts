import styled from "styled-components"

import { Link as RouterLink } from "react-router-dom"

import { COLORS } from "../../constants"

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
`

export const Link = styled(RouterLink)`

    font-weight: bold;
    color: ${COLORS.grey};

    &.router-link-exact-active {
        color: ${COLORS.green1};
    }

    &.main-nav-item {
        text-decoration: none;
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
        column-gap: 0.2em;

        &:hover {
            text-decoration: underline;
        }

    }
    
    &.main-nav-logo {
        display: flex;
        align-items: center;

        .main-nav-logo-image {
            max-width: 100%;
            width: 200px;
        }
    }

`

export const Items = styled.div`
    display: flex;
    align-items: center ;
    justify-self: right;
    column-gap: 0.5em;
`