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


Account.GroupHeader = ({userName}: {userName?: string}) => {
    return (
        <GroupHeader className="header"> 
            <h1>Welcome back <br /> {userName || null} !</h1>
            <Button className="edit-button">Edit Name</Button>
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