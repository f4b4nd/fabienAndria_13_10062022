import React, { useState, useCallback } from "react"
import { useSelector, useDispatch} from 'react-redux'
import { userSelector } from "../../../store/userSelectors"

import { updateUserProfileAction } from "../../../store/userActions"
import { Container, InputWrapper, Button, Row } from "./style"

import updateUserProfileAPI from "../../../helpers/updateUserProfileAPI"

interface Props {
    setFormIsDisplayed: React.Dispatch<React.SetStateAction<boolean>>
}

const UpdateProfileForm = ({setFormIsDisplayed}: Props) => {

    const user = useSelector(userSelector)

    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    
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

        const response: IProfileResponse | undefined = await updateUserProfileAPI(user.token, newProfile)
        if (response?.body) {
            updateProfile({...user, ...response.body})
        }

    }

    const hideForm = (e: React.FormEvent) => {
        e.preventDefault()
        setFormIsDisplayed(false)
    }

    return (
        <Container>

            <Row className="inputs">
                <InputWrapper className="input-wrapper">
                    <input type="text" id="firstname" placeholder={user.firstName} value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </InputWrapper>

                <InputWrapper className="input-wrapper">
                    <input type="text" id="lastname" placeholder={user.lastName} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </InputWrapper>
            </Row>

            <Row>
                <Button onClick={(e) => handleSubmit(e)}> Save </Button>
                
                <Button onClick={(e) => hideForm(e)}> Cancel </Button>
            </Row>

        </Container>
    )
}

export default UpdateProfileForm