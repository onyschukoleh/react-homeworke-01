// import PropTypes from 'prop-types';
export default function TransactionHistoryItem
({ type, amount, currency }) {
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

// FriendListItem.ProTypes = {
//   id: PropTypes.array,
//   avatar: PropTypes.string,
//   name: PropTypes.string,
//   isOnline: PropTypes.bool,
// };