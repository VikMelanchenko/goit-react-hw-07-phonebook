import s from '../ContactsForms/ContactsForm.module.scss';
import { useDispatch, connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux';
import { useEffect } from 'react';
import Filter from '../Filter/Filter';

// список добавленных контактов и удаление при клике на кнопку
const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onRemoveContact = (id) =>
    dispatch(contactsOperations.removeContact(id));

  if (contacts.length === 0) return null;

  return (
    <div className={s.panel__container}>
      <Filter />
      <ul className={s.form__item}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.input__item}>
            <span>
              {name}: {number}
            </span>

            <button
              className={s.button__submit}
              onClick={() => onRemoveContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (contacts) => {
  return {
    contacts: contactsSelectors.getVisibleContacts(contacts),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
