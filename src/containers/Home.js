import React, { useState } from "react";
import UsersListComponent from "../components/UsersList";
import ChatScreenComponent from "../components/ChatMainScreen";
const HomeContainer = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const handleCurrentUser = (user) => {
    setCurrentUser(user);
    console.log(user.name);
  };
  return (
    <div className="mainHomeContainer p-md-5">
      <div className="container wholeContentContainer pt-4 py-4">
        <div className="col-12 d-md-flex">
          <div className=" userListComponentMainDiv">
            <UsersListComponent handleCurrentUser={handleCurrentUser} />
          </div>
          <div
            className={`col-12 col-md-9 chatComponentMainDiv mt-3 mt-md-0 d-none d-md-block ${
              !currentUser && "noActiveUserChatBody"
            }`}
          >
            {!currentUser ? (
              <h1 style={{ transform: "translateY(40vh)" }}>
                Welcome to the chat board
              </h1>
            ) : (
              <ChatScreenComponent currentUser={currentUser} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeContainer;
