import Footer from "../components/footer"
import AccountContainer from "../containers/account"
import Navbar from "../components/navbar"

const UserPage: React.FC = () => {
    return (
        <>
            <Navbar>

                <Navbar.SignOut />

                <Navbar.User userName="Tony" />

            </Navbar>
                
            <AccountContainer />

            <Footer />
        </>
    )
}

export default UserPage