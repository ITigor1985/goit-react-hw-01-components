import PropTypes from "prop-types";
import { Friends } from "./FriendList.styled";
import FriendListItem from "./FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map((item) => (
        <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          key={item.id}
        />
      ))}
    </Friends>
  );
};
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
