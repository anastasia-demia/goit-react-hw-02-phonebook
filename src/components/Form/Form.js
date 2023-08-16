import PropTypes from 'prop-types';
import css from './Form.module.css';

export const Form = ({ name, number }) => {
  return (
    <form className={css.form}>
      <h2 className={css.title}>{name}</h2>
      <input
        name="name"
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
      ></input>
      <h2 className={css.title}>{number}</h2>
      <input
        name="number"
        type="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      ></input>
    </form>
  );
};

Form.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
