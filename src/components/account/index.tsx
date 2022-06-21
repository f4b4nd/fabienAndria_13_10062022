import React, { useState } from "react"
import { useSelector } from "react-redux"
import { userSelector } from "../../store/userSelectors"

import UpdateProfileForm from "../forms/updateProfile"

import { GroupHeader, Container,  Wrapper, Title, Text, Button } from "./style"


interface Props {
    children?: React.ReactNode
}

interface RestProps {
    [key: string]: any,
}

type ChildrenAndRestProps = Props & RestProps

const Account = ({children}: Props) => {

    return (
        <Container className="account">

            {children}

        </Container>
    )
}


Account.GroupHeader = function GroupHeaderComponent () {
    
    const user = useSelector(userSelector)

    const [formIsDisplayed, setFormIsDisplayed] = useState(false)

    return (
        <GroupHeader className="header">

            <h1>Welcome back <br /> {user.firstName} !</h1>

            <Button 
                className="edit-button" 
                onClick={() => setFormIsDisplayed(!formIsDisplayed)}
            >
                Edit Name
            </Button>

            {formIsDisplayed && <UpdateProfileForm />}

        </GroupHeader>
    )
}

Account.Wrapper = ({children, ...restProps}: ChildrenAndRestProps) => {
    return (
        <Wrapper {...restProps}> {children} </Wrapper>
    )
}

Account.Title = ({children}: Props) => {
    return (
        <Title className="account-title"> {children} </Title>
    )
}

Account.Text = ({children, ...restProps}: ChildrenAndRestProps) => {
    return (
        <Text {...restProps}> {children} </Text>
    )
}

Account.Button = ({children, ...restProps}: ChildrenAndRestProps) => {
    return (
        <Button {...restProps}> {children} </Button>
    )
}


export default Account