import css from './SocialLink.module.css';
import propTypes from 'prop-types';

console.log(css);

export const SocialLink = () => {
  return (
    <>
      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>1000</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>2000</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>3000</span>
        </li>
      </ul>
    </>
  );
};

SocialLink.propTypes = {
  Followers: propTypes.number.isRequired,
  Views: propTypes.number,
  Likes: propTypes.number,
};
