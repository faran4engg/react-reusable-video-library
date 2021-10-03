import axios from 'axios';

const defaultOptions = {
  baseURL: 'https://islaamify360-default-rtdb.firebaseio.com/',
};

const firebaseInstance = axios.create(defaultOptions);

const loginOptions = {
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
};
const axiosLogin = axios.create(loginOptions);

export { firebaseInstance, axiosLogin };
