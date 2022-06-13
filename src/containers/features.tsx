import Feature from "../components/feature"
import ChatIcon from "../assets/icons/icon-chat.png"
import MoneyIcon from "../assets/icons/icon-money.png"
import SecurityIcon from "../assets/icons/icon-security.png"

const FeaturesContainer: React.FC = () => {
    return (
        <Feature.Group>
            
            <Feature.GroupTitle />

            <Feature>
                
                <Feature.Image src={ChatIcon} alt="Chat Icon" />
                
                <Feature.Title> You are our #1 priority </Feature.Title>

                <Feature.Description> 
                    Need to talk to a representative? You can get in touch through our
                    24/7 chat or through a phone call in less than 5 minutes. 
                </Feature.Description>

            </Feature>

            <Feature>
                
                <Feature.Image src={MoneyIcon} alt="Money Icon" />
                
                <Feature.Title> More savings means higher rates </Feature.Title>

                <Feature.Description>
                    The more you save with us, the higher your interest rate will be!
                </Feature.Description>

            </Feature>

            <Feature>
                
                <Feature.Image src={SecurityIcon} alt="Security Icon" />
                
                <Feature.Title> Security you can trust </Feature.Title>

                <Feature.Description>
                    We use top of the line encryption to make sure your data and money
                    is always safe.
                </Feature.Description>

            </Feature>

        </Feature.Group>

    )
}

export default FeaturesContainer