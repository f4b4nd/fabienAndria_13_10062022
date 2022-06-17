import { useState, useCallback } from "react"
import { useSelector, useDispatch} from 'react-redux'
import { userSelector } from "../../../store/userSelectors"

import { updateUserProfileAction } from "../../../store/userActions"
import { Container, InputWrapper, Button, Row } from "./style"

import updateProfileAPI from "../../../helpers/updateProfileAPI"

const UpdateProfileForm = () => {

    const user = useSelector(userSelector)

    const [firstName, setFirstName] = useState("" as string)
    const [lastName, setLastName] = useState("" as string)
    
    const dispatch = useDispatch()

    const updateProfile = useCallback((user: IUser) => {
        dispatch(updateUserProfileAction(user))
    }, [dispatch])

    const handleSubmit = async (e: React.FormEvent) => {
        
        e.preventDefault()

        if (firstName === "" || lastName === "") return

        const newProfile = {
            firstName: firstName,
            lastName: lastName,
        }

        const newUserState = await updateProfileAPI(user.token, newProfile)
        updateProfile({...user, ...newUserState?.body})

    }

    return (
        <Container>

            <InputWrapper className="input-wrapper">
                <label htmlFor="firstname">Firstname</label>
                <input type="text" id="firstname" placeholder={user.firstName} value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </InputWrapper>

            <InputWrapper className="input-wrapper">
                <label htmlFor="lastname">Lastname</label>
                <input type="text" id="lastname" placeholder={user.lastName} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </InputWrapper>


            <Row>
                <Button onClick={(e) => handleSubmit(e)}> Save </Button>
                
                <Button> Cancel </Button>
            </Row>

        </Container>
    )
}

export default UpdateProfileForm