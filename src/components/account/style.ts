import styled from "styled-components"
import { COLORS } from "../../constants"

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    padding: 1.5rem;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 2rem;

    @media (min-width: 720px) {
        flex-direction: row;
    }

`

export const GroupHeader = styled.div`
    color: #fff;
    margin-bottom: 2rem;
`

export const Wrapper = styled.div`
    width: 100%;
    flex: 1;

    @media (min-width: 720px) {
        &.account-content-wrapper.cta {
            flex: 0;
        }    
    }

`

export const Title = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
`

export const Text = styled.p`

    &.account-amount {
        margin: 0;
        font-size: 2.5rem;
        font-weight: bold;
    }

    &.account-amount-description {
        margin: 0;
    }

`

export const Button = styled.button`

    &.edit-button {
        border-color: ${COLORS.green2};
        background-color: ${COLORS.green2};
        color: #fff;
        font-weight: bold;
        padding: 10px;
    }

    &.transaction-button {
        display: block;
        width: 100%;
        padding: 8px;
        font-size: 1.1rem;
        font-weight: bold;
        margin-top: 1rem;
        border-color: ${COLORS.green2};
        background-color: ${COLORS.green2};
        color: #fff;
    }

    @media (min-width: 720px) {
        &.transaction-button {
            width: 200px;
        }     
    }

`

