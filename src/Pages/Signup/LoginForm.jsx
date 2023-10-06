// SignUpForm.js
import React, { useState } from 'react'
import InputField from '../Components/InputField'
import { FormValidate } from '../../utils/Validation'
import { LoginInitialState, LoginFormFields } from '../../utils/helpers'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../../api/authApi'
import Button from '../Components/Button'

const LoginForm = () => {
    const [formData, setFormData] = useState(LoginInitialState)
    const [formErrors, setFormErrors] = useState(LoginInitialState)
    const [apiError, setApiError] = useState('')
    const navigate = useNavigate()

    const handleInputChange = ({ name, value }) => {
        setFormData({ ...formData, [name]: value })
    }

    const handleSignUp = async e => {
        setApiError('')
        setFormErrors(LoginInitialState)
        e.preventDefault()
        const err = FormValidate(formData, LoginFormFields)
        setFormErrors(err)
        if (Object.keys(formErrors).length) return
        const result = await userLogin(formData)
        if (result?.status) {
            navigate('/')
        } else setApiError(result?.message)
    }


    return (
        <form className='relative bg-slate-300 p-8 w-full sm:w-auto h-full sm:h-auto place-content-center grid place-items-center sm:px-14 sm:py-10 rounded' onSubmit={handleSignUp}>
            <div className='mb-4 text-center'>
                <h4 className='mb-1 text-slate-700 uppercase font-bold text-xl'>Login Form</h4>
                <p className='text-red-500 text-xs '> {apiError}</p>
            </div>
            <InputField
                field={LoginFormFields.username}
                formError={formErrors}
                onChange={handleInputChange}
            />
            <InputField
                field={LoginFormFields.password}
                formError={formErrors}
                onChange={handleInputChange}
            />

            <Button text="Login" />

            <p className='mt-2 text-sm'>Don't have an account? <Link to='/signup' className='text-blue-900 underline'>Signup here</Link></p>
        </form>
    )
}

export default LoginForm
