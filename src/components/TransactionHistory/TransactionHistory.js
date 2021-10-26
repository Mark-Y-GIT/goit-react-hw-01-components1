import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
export default function TransactionHistory({ items }) {
  return (
    <table className={s.transaction_history}>
      <thead>
        <tr className={s.tr}>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={s.tr} key={item.id}>
            <td className={s.td}>{item.type}</td>
            <td className={s.td}>{item.amount}</td>
            <td className={s.td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.defaultProps = {
  items: [
    {
      id: 'id',
      type: 'type of transaction',
      amount: 'no data',
      currency: 'no data',
    },
  ],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};
