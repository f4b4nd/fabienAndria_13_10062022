interface Props {
    children?: React.ReactNode
}

const Feature = ({children}: Props) => {
    return (
        <div className="feature-item">
            
            {children}

        </div>
    )
}

Feature.Group = ({children}: Props) => {
    return (
        <section className="features">
            {children}
        </section>
    )
}

Feature.GroupTitle = () => {
    return (
        <h2 className="sr-only">Features</h2>
    )
}

Feature.Image = ({src, alt}: {src: string, alt: string}) => {
    return (
        <img 
            src={src} 
            alt={alt} 
            className="feature-icon" 
        />
    )
}

Feature.Title = ({children}: Props) => {
    return (
        <h3 className="feature-item-title">
            {children}
        </h3>
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