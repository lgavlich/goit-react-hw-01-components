import React from 'react';
import Profile from './components/Profile/user';
import Statistics from './components/statistical/statistics';
import FriendList from './components/Friend-List/FriendList';
import TransactionHistory from './components/Transaction/TransactionHistory';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import user from './data/user.json';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
