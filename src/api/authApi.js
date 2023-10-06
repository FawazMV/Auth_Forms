import { axios1, axios2 } from './axiosInstance'

export const userLogin = async data => {
    try {
        const [response1, response2] = await Promise.all([
            axios1.post('/api/v1/login', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }),
            axios2.post('/user/login', {
                ...data,
                role: 'user',
                usertype: 'app'
            })
        ])

        localStorage.setItem('token', response1.data.token)

        return { status: true }
    } catch (error) {
        console.log(error.response)
        if (error.response.status >= 400 && error.response.status < 500)
            return { status: false, message: 'Invalid Credentials' }
    }
}

export const userSignUp = async ({
    firstName,
    lastName,
    username,
    email,
    password
}) => {
    const data = { firstName, lastName, username, email, password }
    try {
        const [response1, response2] = await Promise.all([
            axios1.post('/api/v1/signup', data),
            axios2.post('/user/add', {
                ...data,
                usertype: 'app',
                role: 'user',
                status: 'active'
            })
        ])
        return { status: true }
    } catch (error) {
        console.log(error.response)
        return {
            status: false,
            message:
                error?.response?.data?.message ??
                'Something went wrong, Please try again'
        }
    }
}
