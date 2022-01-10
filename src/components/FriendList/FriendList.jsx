import PropTypes from "prop-types";
import { Friends, Wrapper } from "./FriendList.styled";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      <Friends>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        ))}
      </Friends>
    </Wrapper>
  );
};
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
