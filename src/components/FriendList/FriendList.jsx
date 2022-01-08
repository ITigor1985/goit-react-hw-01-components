import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem/FriendListItem";



const FriendList = ({friends}) =>{
    return <ul className="friend-list">
                {friends.map((item) => <FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isOnline} key={item.id}/>)}
            </ul>
        
}
export default FriendList;


FriendList.propTypes = {    
    friends: PropTypes.array.isRequired,
  };

