import PropTypes from 'prop-types';
// import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {stats.map(({ id, label, percentage }) => {
            return (
              <li key={id} className="item">
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      repcentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
