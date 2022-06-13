import { Container, Group, Image, Title } from "./style"

interface Props {
    children?: React.ReactNode
}

const Feature = ({children}: Props) => {
    return (
        <Container className="feature-item">
            
            {children}

        </Container>
    )
}

Feature.Group = ({children}: Props) => {
    return (
        <Group className="features">
            {children}
        </Group>
    )
}

Feature.GroupTitle = () => {
    return (
        <h2 className="sr-only">Features</h2>
    )
}

Feature.Image = ({src, alt}: {src: string, alt: string}) => {
    return (
        <Image 
            src={src} 
            alt={alt} 
            className="feature-icon" 
        />
    )
}

Feature.Title = ({children}: Props) => {
    return (
        <Title className="feature-item-title">
            {children}
        </Title>
    )
}

Feature.Description = ({children}: Props) => {
    return (
        <p className="feature-item-description">
            {children}
        </p>
    )
}

export default Feature