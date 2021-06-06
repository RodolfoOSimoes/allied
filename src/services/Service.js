import axios from 'axios';

class Service {
  static client() {
    return axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
    });
  }
}

export default Service;
