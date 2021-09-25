import React from 'react';
import Profile from './components/Profile/user';
import FriendList from './components/Friend-List/FriendList';
import user from './data/user.json';

const App = () => {
  return (
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};

export default App;
