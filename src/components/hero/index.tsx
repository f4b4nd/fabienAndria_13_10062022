import { Container } from "./style"

import BankTreeImage from "../../assets/images/bank-tree.jpeg"

const Hero: React.FC = () => {
    return (
        <Container className="hero" backgroundImage={BankTreeImage}>

            <section className="hero-content">

                <h2 className="sr-only">Promoted Content</h2>

                <p className="subtitle">No fees.</p>

                <p className="subtitle">No minimum deposit.</p>

                <p className="subtitle">High interest rates.</p>

                <p className="text">Open a savings account with Argent Bank today!</p>

            </section>

        </Container>
    )
}

export default Hero