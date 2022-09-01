import { get, post, _delete, _get } from './ajax_base.js';

function login(username, password, successFunction, errorFunction) {
  post('/users/login',
    {
      username: username,
      password: password
    },
    successFunction,
    errorFunction
  );
}

function register(username, password, email, successFunction, errorFunction) {
  post('/users/register',
    {
      username: username,
      password: password,
      email: email
    },
    successFunction,
    errorFunction
  );
}

export {
  login,
  register
}