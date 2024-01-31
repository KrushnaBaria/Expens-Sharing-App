export default function FriendsList({ friends, selectedFriend }) {
    function onFriendSelected(friend) {
      selectedFriend(friend);
    }
  
    return (
      <div><p>
        <h3>Friends Details(click on name)</h3>
      </p>
        <ul>
          {friends.map((friend) => (
            <li key={friend.id} onClick={() => onFriendSelected(friend)}>
              {friend.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }