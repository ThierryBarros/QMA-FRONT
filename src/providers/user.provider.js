import axios from 'axios';
import { env } from './api.config';

class UserProvider {
    
    url = env.url.concat('students');

    create(userCredentials) {
        return axios.post(this.url, userCredentials);
    }

}

export default new UserProvider();