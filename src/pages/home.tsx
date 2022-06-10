import Navbar from "../components/navbar"
import HeroContainer from "../containers/hero"
import FeaturesContainer from "../containers/features"
import Footer from "../components/footer"

export default function HomePage () {
    return (
        <>
            <Navbar />

            <HeroContainer />

            <FeaturesContainer />

            <Footer />

        </>
    )
}