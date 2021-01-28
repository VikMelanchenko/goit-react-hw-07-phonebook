import s from '../ContactsForms/ContactsForm.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts-selectors';

// список добавленных контактов и удаление при клике на кнопку
const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onRemoveContact = (id) =>
    dispatch(contactsOperations.removeContact(id));

  if (contacts.length === 0) return null;

  return (
    <div className={s.panel__container}>
      <h1>Contacts</h1>
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

export default ContactList;

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onRemoveContact: (id) => dispatch(contactsActions.removeContact(id)),
// });
