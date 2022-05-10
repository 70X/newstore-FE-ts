import axios from 'axios';

const {
  REACT_APP_BASEURL_API,
  REACT_APP_TOKEN,
} = process.env;

const instanceAPI = axios.create({
  baseURL: `${REACT_APP_BASEURL_API}`,
  headers: {
    'Authorization': `Bearer ${REACT_APP_TOKEN}`,
  },
});

export default instanceAPI;
