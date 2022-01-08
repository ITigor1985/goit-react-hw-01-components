import PropTypes from "prop-types";

const FriendListItem = ({avatar, isOnline, name}) =>{
    return <li className="item" >
                <span className="status">{isOnline}</span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
            </li>
}
export default FriendListItem;


FriendListItem.propTypes = {    
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  };