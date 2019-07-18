import React from "react";
import Friends from "../components/friends";

function FriendsPage() {
  return (
    <Friends
      getFriends={() => console.log("fetching friends")}
      isFetchingFriends={false}
      friends={[
        {
          id: 1,
          name: "Hal",
          age: 33,
          email: "hal@gmail.com"
        },
        {
          id: 2,
          name: "George",
          age: 22,
          email: "gg@gmail.com"
        }
      ]}
    />
  );
}

export default FriendsPage;
