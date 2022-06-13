import styled from "styled-components"

import { COLORS } from "../../constants"

export const Container = styled.div`
    flex: 1;
    padding: 2.5rem;
`

export const Group = styled.section`

    display: flex;
    flex-direction: column;
    
    @media (min-width: 920px) {
        flex-direction: row;        
    }

`
export const Title = styled.h3`
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`


export const Image = styled.img`
    width: 100px;
    border: 10px solid ${COLORS.green2};
    border-radius: 50%;
    padding: 1rem;
`