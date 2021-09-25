import React from 'react';

const FriendItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className="item">
      <span className={[isOnline ? true : false].join(' ')} />
      <img className={avatar} src={avatar} alt={name} width="48" />
      <p className={name}>{name}</p>
    </li>
  );
};

export default FriendItem;
