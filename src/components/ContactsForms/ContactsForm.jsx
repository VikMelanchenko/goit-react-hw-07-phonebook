import s from './ContactsForm.module.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getContacts } from '../../redux/contacts-selectors';

import { contactsOperations } from '../../redux';

export default function ContactsForms({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '') {
      return toast.info('Please input name');
    }

    // check unique contact name
    if (contacts.find((contact) => contact.name === name)) {
      return toast.error(`${name} is already in contacts`);
    }

    dispatch(contactsOperations.addContact(name, number));
    onSubmit(name, number);
    onReset();
  };

  const onReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={s.panel__container}>
      <h1>Phonebook</h1>
      <form className={s.form__item} onSubmit={handleSubmit}>
        <h2>Add a new contact</h2>
        <label>
          Name
          <input
            className={s.input__item}
            type="text"
            name="name"
            value={name}
            placeholder="enter contact name"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Pnone number
          <input
            className={s.input__item}
            type="tel"
            name="number"
            value={number}
            placeholder="enter phone number"
            onChange={handleChange}
          ></input>
        </label>
        <button className={s.button__submit} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (name, number) =>
//     dispatch(contactsActions.addContact(name, number)),
// });

// export default connect(null, mapDispatchToProps)(ContactsForms);
