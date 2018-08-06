import axios from 'axios';
import { env } from './api.config';

class AuthProvider {
    
    url = env.url.concat('login');

    login(userCredentials) {
        return axios.post(this.url, userCredentials);
    }

}

export default new AuthProvider();