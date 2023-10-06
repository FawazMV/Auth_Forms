export const SignupinitialState = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirm_password: ''
}

export const LoginInitialState = {
    username: '',
    password: ''
}


export const SignupFormFields = {
    firstName: {
        label: 'First Name',
        placeholder: 'First Name',
        name: 'firstName',
        type: 'text',
        error: {
            required: 'First name is required'
        }
    },
    lastName: {
        label: 'Last Name',
        placeholder: 'Last Name',
        name: 'lastName',
        type: 'text',
        error: {
            required: 'Last name is required'
        }
    },
    username: {
        label: 'Username',
        placeholder: 'Username',
        name: 'username',
        type: 'text',
        error: {
            required: 'username name is required',
            length: {
                length: 4,
                message: 'Username need minimum 4 letters'
            }
        }
    },
    email: {
        label: 'Email Address',
        placeholder: 'leroy@jenkins.com',
        name: 'email',
        type: 'email',
        error: {
            required: 'Email address is required'
        }
    },
    password: {
        label: 'Password',
        placeholder: '******',
        name: 'password',
        type: 'password',
        error: {
            required: 'Password is required',
            length: {
                length: 4,
                message: 'Password need minimum 4 letters'
            }
        }
    },
    confirm_password: {
        label: 'Confirm password',
        placeholder: 'Confirm your password',
        name: 'confirm_password',
        type: 'text',
        error: {
            required: 'Please confirm your password'
        }
    }
}


export const LoginFormFields = {
    username: {
        label: 'Username',
        placeholder: 'Username',
        name: 'username',
        type: 'text',
        error: {
            required: 'username name is required',
        }
    },

    password: {
        label: 'Password',
        placeholder: '******',
        name: 'password',
        type: 'password',
        error: {
            required: 'Password is required',
        }
    }
}