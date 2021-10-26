import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
function FriendListItem({ friends }) {
  return friends.map(friend => (
    <li className={styles.item} key={friend.id}>
      <span
        className={styles.status}
        style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
      ></span>
      <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
      <p className={styles.name}>{friend.name}</p>
    </li>
  ));
}

export default FriendListItem;

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
