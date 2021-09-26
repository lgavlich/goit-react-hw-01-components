import React from 'react';
import PropTypes from 'prop-types';
import FriendItem from './FriendListItem';
import defaultImage from '../default.jpg';
import s from './Friend-List.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline = true }) => (
        <FriendItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.defaultProps = {
  avatar: defaultImage,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.oneOf([true, false]),
    }),
  ).isRequired,
};
