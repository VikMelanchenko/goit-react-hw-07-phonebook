import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from './contacts-actions';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040';

const addContact = (name, number) => (dispatch) => {
  const contact = {
    name,
    number,
    complited: false,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(removeContactSuccess(id)))
    .catch((error) => dispatch(removeContactError(error)));
};

export default {
  addContact,
  removeContact,
};
