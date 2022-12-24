import css from './UserSocial.module.css';
import propTypes from 'prop-types';

export const UserSocial = () => {
  return (
    <>
      <div className={css.description}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          width={100}
          height={100}
          className={css.avatar}
        />
        <p className={css.name}>Petra Marica</p>
        <p className={css.tag}>@pmarica</p>
        <p className={css.location}>Salvador, Brasil</p>
      </div>
    </>
  );
};

UserSocial.propTypes = {
  user: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
};
