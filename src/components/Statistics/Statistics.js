import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = function ({ title, stats }) {
  return (
    <section className="statistic">
      {title !== undefined && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.list}>
        {stats.map(stat => (
          <li className={styles.item} key={stat.id}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percent}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
