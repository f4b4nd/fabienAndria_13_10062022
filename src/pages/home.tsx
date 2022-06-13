import Navbar from "../components/navbar"
import HeroContainer from "../containers/hero"
import FeaturesContainer from "../containers/features"
import Footer from "../components/footer"

const HomePage: React.FC = () => {
    return (
        <>
            <Navbar>
                
                <Navbar.SignIn />

            </Navbar>

            <HeroContainer />

            <FeaturesContainer />

            <Footer />

        </>
    )
}

export default HomePage