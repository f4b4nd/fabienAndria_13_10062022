import styled from "styled-components"

import { COLORS } from "../../../constants"


export const Container = styled.form`
    margin: 0 auto;
    margin-top: 1em;
    width: 300px;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
    flex-basis: 40%;

    input {
        padding: 5px;
        font-size: 1.2rem;
    }

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

export const Row = styled.div`
    display: flex;
`