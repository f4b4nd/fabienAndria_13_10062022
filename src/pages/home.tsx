import Navbar from "../components/navbar"
import HeroContainer from "../containers/hero"
import FeatureContainer from "../containers/feature"
import Footer from "../components/footer"

export default function HomePage () {
    return (
        <>
            <Navbar />

            <HeroContainer />

            <FeatureContainer />

            <Footer />
            
        </>
    )
}