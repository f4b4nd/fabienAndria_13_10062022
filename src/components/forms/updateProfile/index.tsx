import { useState } from "react"

import { Container, InputWrapper, Button } from "./style"


const UpdateProfileForm = () => {

    const [firstName, setFirstName] = useState("" as string)
    const [lastName, setLastName] = useState("" as string)

    return (
        <Container>

            <InputWrapper className="input-wrapper">
                <label htmlFor="firstname">Firstname</label>
                <input type="text" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </InputWrapper>

            <InputWrapper className="input-wrapper">
                <label htmlFor="lastname">Lastname</label>
                <input type="text" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </InputWrapper>
            
            <Button> Save </Button>
            
            <Button> Cancel </Button>

        </Container>
    )
}

export default UpdateProfileForm