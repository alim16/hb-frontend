import axios from 'axios'

const API_BASE_ADDRESS = 'http://localhost:4000';

export const getItems = async () => {
    const result = await axios(
    `${API_BASE_ADDRESS}/items`,
    )
    return result
}

export const getUsers = async () => {
    const result = await axios(
        `${API_BASE_ADDRESS}/users`,
        )
    return result
}