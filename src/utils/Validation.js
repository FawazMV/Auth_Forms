export const FormValidate = (formData, formFields) => {
    const newErrors = {};
    const keys = Object.keys(formData)
    keys.map(key => {
        if (!formData[key]) newErrors[key] = formFields[key]?.error?.required;
        else if (key === 'email') {
            !/\S+@\S+\.\S+/.test(formData[key]) ? newErrors[key] = 'Email is invalid' : ''
        }
        else if (formFields[key]?.error?.length) {
            (formData[key].length < formFields[key].error.length) ? newErrors[key] = formFields[key].length.message : ''
        }
        else if (key === 'confirm_password') {
            formData.password !== formData.confirm_password ? newErrors[key] = 'Password is not match' : ''
        }
    })
    return newErrors;
}