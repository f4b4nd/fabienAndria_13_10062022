import styled from "styled-components"

import { COLORS } from "../../../constants"


export const Container = styled.form`
    margin: 0 auto;
    margin-top: 1em;
    width: 300px;
`

export const InputWrapper = styled.div`    
    margin-bottom: 1rem;

    input {
        padding: 5px;
        font-size: 1.2rem;
        max-width: 200px;
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
    justify-content: center;
    column-gap: 1em;

    @media screen and (max-width: 600px) {
        &.inputs {
            flex-direction: column;

            .input-wrapper {
                width: 100%;
                overflow: hidden;  
            }

            input {
                width: 100%;
                max-width: 100%;
            }        
        }
    }
`