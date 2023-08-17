// import PropTypes from 'prop-types';
import css from './List.module.css';

export const List = ({ data, children }) => {
  return (
    <ul className={css.ul} >
      {data.map(({ id, name, number}) => {
        return (
          <li className={css.li} key={id}>{name}:<b>{number}</b>
          {children}
          </li>
        );
      })}
    </ul>
    )
}

// List.propTypes = {
//   name: PropTypes.array.isRequired,
//   number: PropTypes.string.isRequired,
// };

