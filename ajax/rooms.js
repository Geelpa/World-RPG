import { get, post, _delete, _get } from './ajax_base.js';

function getRooms(successFunction, errorFunction) {
  get('/rooms', {},
    successFunction,
    errorFunction
  );
}

export {
  getRooms
}