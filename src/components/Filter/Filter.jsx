// import PropTypes from 'prop-types';
import { changeFilter } from '../../redux';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts-selectors';
import s from '../ContactsForms/ContactsForm.module.scss';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        <h1>Find contacts by name</h1>
        <input
          className={s.filter__item}
          type="text"
          value={value}
          onChange={(event) => dispatch(changeFilter(event.target.value))}
        />
      </label>
    </div>
  );
};

export default Filter;

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   filter: PropTypes.string,
// };

// const mapStateToProps = (state) => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (event) =>
//     dispatch(contactActions.changeFilter(event.target.value)),
// });
