import PropTypes from 'prop-types';
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="" width="48" />
      <p class="name">{name}</p>
    </>
  );
}

FriendListItem.ProTypes = {
  id: PropTypes.array,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
