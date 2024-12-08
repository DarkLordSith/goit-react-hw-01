import Profile from "./Components/Profile/Profile.jsx";
import userData from "./userData.json";
import FriendList from "./Components/FriendList/FriendList.jsx";
import friends from "./friends.json";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./transactions.json";

console.log(friends);

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
