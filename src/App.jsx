// import React from "react";
import Profile from "./Components/Profile/Profile.jsx";
import userData from "./userData.json";
import FriendList from "./Components/FriendList/FriendList.jsx";
import friends from "./friends.json";

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
    </>
  );
};

export default App;
