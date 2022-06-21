import Account from "../components/account"

const AccountContainer: React.FC = () => {

    const response = [
        {
            title: "Argent Bank Checking (x8349)",
            amount: "$2,082.79",
            description: "Available Balance"
        },
        {
            title: "Argent Bank Savings (x6712)",
            amount: "$10,928.42",
            description: "Available Balance"
        },
        {
            title: "Argent Bank Savings (x8349)",
            amount: "$184.30",
            description: "Current Balance"
        },
    ]

    return (
        <>
        
            <Account.GroupHeader />

            <h2 className="sr-only">Accounts</h2>

            {response && response.map((item, idx) => (
                <Account key={idx}>

                    <Account.Wrapper className="account-content-wrapper">
                        <Account.Title> {item.title} </Account.Title>
                        <Account.Text className="account-amount"> {item.amount} </Account.Text>
                        <Account.Text className="account-amount-description"> {item.description} </Account.Text>
                    </Account.Wrapper>
    
                    <Account.Wrapper className="account-content-wrapper cta">
                        <Account.Button className="transaction-button">View transactions</Account.Button>
                    </Account.Wrapper>

                </Account>       
            ))}

        </>
    )
}

export default AccountContainer
