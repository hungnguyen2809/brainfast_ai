import axios from 'axios';

export const apis = {
  supcriptStripe: () => {
    return axios.get('/api/stripe');
  },
};
