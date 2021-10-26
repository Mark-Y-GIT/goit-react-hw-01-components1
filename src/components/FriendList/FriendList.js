import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={styles.friend_list}>
      <FriendListItem friends={friends} />
    </ul>
  );
}
