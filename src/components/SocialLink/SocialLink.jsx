import propTypes from 'prop-types';
import css from './SocialLink.module.css';
import user from '../../assets/data/user.json';

export const SocialLink = () => {
  return (
    <>
      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{user.stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{user.stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </>
  );
};

SocialLink.propTypes = {
  Followers: propTypes.number.isRequired,
  Views: propTypes.number.isRequired,
  Likes: propTypes.number.isRequired,
};
