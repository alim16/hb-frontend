import axios from 'axios'
import {Buffer} from 'buffer'

const API_BASE_ADDRESS = 'http://localhost:3001';

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

export const createLoginSession = async () => {
    const creds = 'kurt@test.com' + ':' + 'password'
    //base64 encoded a3VydEB0ZXN0LmNvbTpzZWNyZXQ=
    
    const basicAuth = 'Basic ' + 'a3VydEB0ZXN0LmNvbTpzZWNyZXQ=';
    const config = {
        withCredentials: true,
        // "headers": {
        //     "Authorization": basicAuth,
        // },
        auth: {
            username: 'kurt@test.com',
            password: 'secret'
        }
    };

    axios.get( `${API_BASE_ADDRESS}/users/1`, config).then(function(response) {
        console.log('Authenticated',response);
      }).catch(function(error) {
        console.log('Error on Authentication',error);
      });
}

export const getPublic1 = async () => {
   
    const config = {
        "headers": {
            
        }
    };
    axios.get( `${API_BASE_ADDRESS}/public1`, config).then(function(response) {
        console.log('got content:',response);
      }).catch(function(error) {
        console.log(`Error didn't get content`,error);
      });
}
