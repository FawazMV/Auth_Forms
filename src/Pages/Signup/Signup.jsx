// SignUpForm.js
import { useState } from 'react'
import InputField from '../Components/InputField'
import { FormValidate } from '../../utils/Validation'
import { SignupFormFields, SignupinitialState } from '../../utils/helpers'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Components/Button'
import { userSignUp } from '../../api/authApi'

const SignUpForm = () => {
    const [formData, setFormData] = useState(SignupinitialState)
    const [formErrors, setFormErrors] = useState(SignupinitialState)
    const [apiError, setApiError] = useState('')
    const navigate = useNavigate()

    const handleInputChange = ({ name, value }) => {
        setFormData({ ...formData, [name]: value })
    }

    const handleSignUp = async (e) => {
        setApiError('')
        setFormErrors(SignupinitialState)
        e.preventDefault()
        const err = FormValidate(formData, SignupFormFields)
        setFormErrors(err)
        if (Object.keys(formErrors).length) return
        const result = await userSignUp(formData)
        if (result?.status) {
            navigate('/')
        } else setApiError(result?.message)
    }


    return (
        <form className='bg-slate-300 p-8 w-full sm:w-auto h-full sm:h-auto grid place-items-center sm:px-14 sm:py-10 rounded' onSubmit={handleSignUp}>

            <div className='mb-4 text-center'>
                <h4 className='mb-1 text-slate-700 uppercase font-bold text-xl'>Signup Form</h4>
                <p className='text-red-500 text-xs '> {apiError}</p>
            </div>
            <InputField
                field={SignupFormFields.firstName}
                formError={formErrors}
                onChange={handleInputChange}
            />
            <InputField
                field={SignupFormFields.lastName}
                formError={formErrors}
                onChange={handleInputChange}
            />
            <InputField
                field={SignupFormFields.username}
                formError={formErrors}
                onChange={handleInputChange}
            />
            <InputField
                field={SignupFormFields.email}
                formError={formErrors}
                onChange={handleInputChange}
            />
            <InputField
                field={SignupFormFields.password}
                formError={formErrors}
                onChange={handleInputChange}
            />
            <InputField
                field={SignupFormFields.confirm_password}
                formError={formErrors}
                onChange={handleInputChange}
            />
            <Button text='Signup' />

            <p className='mt-2 text-sm'>Already have an account? <Link to='/login' className='text-blue-900 underline'>Login here</Link></p>
        </form>
    )
}

export default SignUpForm
