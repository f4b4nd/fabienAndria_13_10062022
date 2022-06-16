import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { SignInFormStore } from "../components/forms/signIn"

const SignInPage: React.FC = () => {
    return (
        <>

            <Navbar />
            
            <main className="main bg-dark">

                <SignInFormStore />
                
            </main>

            <Footer />

        </>
    )
}

export default SignInPage