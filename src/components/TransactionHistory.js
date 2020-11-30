import TransactionHistoryItem from './TransactionHistoryItem';
export default function TransactionHistory({ transactions }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
      <tr>
      <td>
        {transactions.map(obj => (
          
            
              <TransactionHistoryItem
                type={obj.type}
                amount={obj.amount}
                currency={obj.currency}
              />
            
          
        ))}
        </td>
        </tr>
      </tbody>
    </table>
  );
}
