import { get, post, _delete, _get } from './ajax_base.js';

function login(username, password, successFunction, errorFunction, ip = '') {
  post('/users/login',
    {
      username: username,
      password: password,
      ip: ip
    },
    successFunction,
    errorFunction
  );
}

function deleteUser(successFunction, errorFunction) {
  _delete('/api/Users', successFunction, errorFunction);
}

function changePassword(oldPassword, newPassword, successFunction, errorFunction) {
  post('/api/Users/change-password',
    {
      oldPassword: oldPassword,
      newPassword: newPassword
    },
    successFunction,
    errorFunction,
    true);
}

function getMyIp(successFunction, errorFunction) {
  _get('https://api64.ipify.org/?format=json', {}, successFunction, errorFunction, true);
}

function getUser(successFunction, errorFunction) {
  get('/api/Users', {}, successFunction, errorFunction, true);
}

function addAdditionalInfo(form, successFunction, errorFunction) {
  post('/api/Users/additional-info', form, successFunction, errorFunction, true);
}

function addUser(
  name,
  email,
  password,
  role,
  ref,
  successFunction,
  errorFunction) {
  post('/api/Users',
    {
      name: name,
      email: email,
      password: password,
      role: role,
      refUserId: ref
    },
    successFunction,
    errorFunction
  );
}

function passwordRecovery(email, successFunction, errorFunction) {
  post('/api/Users/forgot-password',
    {
      email: email
    },
    successFunction,
    errorFunction
  );
}

function checkCodeIsValid(code, successFunction, errorFunction) {
  post('/api/Users/is-code-valid',
    {
      code: code
    },
    successFunction,
    errorFunction
  );
}

function changePasswordWithCode(code, newPassword, successFunction, errorFunction) {
  post('/api/Users/change-password-with-code',
    {
      code: code,
      newPassword: newPassword
    },
    successFunction,
    errorFunction
  );
}

export {
  login,
  addUser,
  getUser,
  addAdditionalInfo,
  deleteUser,
  changePassword,
  passwordRecovery,
  checkCodeIsValid,
  changePasswordWithCode,
  getMyIp
}