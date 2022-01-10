import PropTypes from "prop-types";
import { Item, Image, Name } from "./FriendListItem.styled";

const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <Item isOnline={isOnline}>
      <Image className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
