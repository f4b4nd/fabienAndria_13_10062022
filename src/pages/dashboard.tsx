import Footer from "../components/footer"
import AccountContainer from "../containers/account"
import Navbar from "../components/navbar"

const DashboardPage: React.FC = () => {
    return (
        <>
            <Navbar />
            
            <main className="main bg-dark">

                <AccountContainer />
                
            </main>

            <Footer />
        </>
    )
}

export default DashboardPage