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
            
            <main className="main bg-dark">

                <AccountContainer />
                
            </main>

            <Footer />
        </>
    )
}

export default UserPage