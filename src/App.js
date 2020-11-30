// ///////////////////////////////////////
// //Задание 1 - Профиль социальной сети
// //////////////////////////////////////
// import user from './user.json';
// import Profile from './components/Profile';
// export default function App() {
//   return (
//     <div>
//       <Profile
//         name={user.name}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}

//       />
//     </div>
//   );
// }

// ///////////////////////////////////////
// //Задание 2 - Секция статистики
// //////////////////////////////////////
// import statisticalData from './statistical-data.json';
// import Statistics from './components/StatisticalData';
// export default function App() {
//   return (
//     <div>
//       <Statistics title="Upload stats" stats={statisticalData} />
//     </div>
//   );
// }

// ///////////////////////////////////////
// //Задание 3 - Список друзей
// //////////////////////////////////////
// import friends from './friends.json';
// import FriendList from './components/FriendList';
// export default function App() {
//   return (
//     <div>
//       <FriendList friends={friends} />
//     </div>
//   );
// }

///////////////////////////////////////
//Задание 4 - История транзакций
//////////////////////////////////////
import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory';
export default function App() {
  return (
    <div>
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
