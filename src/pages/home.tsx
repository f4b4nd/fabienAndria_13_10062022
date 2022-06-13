import Navbar from "../components/navbar"
import HeroComponent from "../components/hero"
import FeaturesContainer from "../containers/features"
import Footer from "../components/footer"

const HomePage: React.FC = () => {
    return (
        <>
            <Navbar>
                
                <Navbar.SignIn />

            </Navbar>

            <HeroComponent />

            <FeaturesContainer />

            <Footer />

        </>
    )
}

export default HomePage