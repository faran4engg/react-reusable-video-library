const KEY = 'islaamify-360-admin-login-status-key';
const VAL = 'islaamify-360-admin-loggedin-true';

const encodedVal = window.btoa(VAL);
const decodedVal = window.atob(encodedVal);

export { KEY, encodedVal, decodedVal };
