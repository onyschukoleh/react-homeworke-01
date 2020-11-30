import PropTypes from 'prop-types';
export default function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
}

TransactionHistoryItem.ProTypes = {
  avatar: PropTypes.string,
  amount: PropTypes.number,
  type: PropTypes.string,
};
