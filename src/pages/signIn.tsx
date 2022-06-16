import Footer from "../components/footer"
import { SignInFormStore } from "../components/forms/signIn"
import Navbar from "../components/navbar"

const SignInPage: React.FC = () => {
    return (
        <>

            <Navbar>

                <Navbar.SignIn />

            </Navbar>

            <main className="main bg-dark">

                <SignInFormStore />
                
            </main>

            <Footer />

        </>
    )
}

export default SignInPage