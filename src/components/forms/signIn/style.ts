import styled from "styled-components"

import { Link as RouterLink } from "react-router-dom"
import { COLORS } from "../../../constants"

export const Container = styled.section`

    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;

    .sign-in-icon {
        font-size: 5rem;
    }

    .error-login {
        color: red;
    }
    
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;

    input {
        padding: 5px;
        font-size: 1.2rem;
    }

`

export const CheckboxWrapper = styled.div`
    display: flex;

    label {
        margin-left: 0.25rem;
    }
`

export const Link = styled(RouterLink)`
    text-decoration: none;
`

export const Button = styled.button`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: ${COLORS.green2};
    background-color: ${COLORS.green2};
    color: #fff;
`