import axios from 'axios';

const URL = '';
export const authenticateSignup = async (data) => {
    try {
        const headers = {
            "Content-Type": "application/json"
        };
        return await axios.post(`${URL}/signup`, data, { headers });
    } catch (error) {
        console.log(error);
    }
}

export const authenticateLogin = async (data) => {
    try {
        const headers = {
            "Content-Type": "application/json"
        };
        return await axios.post(`${URL}/login`, data, { headers });
    } catch (error) {
        console.log(error);
        return error.response;
    }
}

export const payUsingPaytm = async (data) => {
    try {
        const headers = {
            "Content-Type": "application/json"
        };
        let response = await axios.post(`${URL}/paytm`, data,{ headers });
        return response.data;
    } catch (error) {
        console.log('Error while calling paytm API');
    }
}