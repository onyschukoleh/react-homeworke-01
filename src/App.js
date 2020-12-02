///////////////////////////////////////
//Задание 1 - Профиль социальной сети
//////////////////////////////////////
// import user from './user.json';
// import Profile from './components/social-profile/Profile';
// import ProfileStats from './components/social-profile/ProfileStats';
// export default function App() {
//   return (
//     <div className="profile">
//       <Profile
//         name={user.name}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//       />
// <ProfileStats
//         followers={user.stats.followers}
//         views={user.stats.views}
//         likes={user.stats.likes}
//        />

//     </div>
//   );
// }

/////////////////////////////////////
// Задание 2 - Секция статистики
////////////////////////////////////
import statisticalData from './statistical-data.json';
import StatisticalData from './components/statistics/StatisticalData';
import Statistics from './components/statistics/Statistics';
export default function App() {
  return (
    <>
      <Statistics title="Upload stats">
        <StatisticalData stats={statisticalData} />
      </Statistics>
    </>
  );
}

///////////////////////////////////////
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

// ///////////////////////////////////////
// //Задание 4 - История транзакций
// //////////////////////////////////////
// import transactions from './transactions.json';
// import TransactionHistory from './components/TransactionHistory';
// export default function App() {
//   return (
//     <div>
//       <TransactionHistory transactions={transactions} />
//     </div>
//   );
// }
