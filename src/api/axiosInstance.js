import Axios from "axios"
export const axios1 = Axios.create({
    baseURL: "http://bd-userservice-lb-staging-233784656.us-east-1.elb.amazonaws.com",
})

export const axios2 = Axios.create({
    baseURL: "http://3.84.171.136:5000",
    headers: { 'Content-Type': 'application/json' }
})