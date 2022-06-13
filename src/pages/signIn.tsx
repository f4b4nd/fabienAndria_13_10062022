import Footer from "../components/footer"
import SignInForm from "../components/forms/signIn"
import Navbar from "../components/navbar"

const SignInPage: React.FC = () => {
    return (
        <>

            <Navbar>

                <Navbar.SignIn />

            </Navbar>

            <SignInForm />

            <Footer />

        </>
    )
}

export default SignInPage