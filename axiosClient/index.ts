import axios from 'axios';

export const axiosClient = {
  supcriptStripe: () => {
    return axios.get('/api/stripe');
  },
};
