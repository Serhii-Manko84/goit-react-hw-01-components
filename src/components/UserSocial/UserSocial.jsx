import css from './UserSocial.module.css';
import propTypes from 'prop-types';
import user from '../../assets/data/user.json';

export const UserSocial = () => {
  return (
    <>
      <div className={css.description}>
        <img
          src={user.avatar}
          alt="User avatar"
          width={100}
          height={100}
          className={css.avatar}
        />
        <p className={css.name}>{user.username}</p>
        <p className={css.tag}>{user.tag}</p>
        <p className={css.location}>{user.location}</p>
      </div>
    </>
  );
};

UserSocial.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
};
