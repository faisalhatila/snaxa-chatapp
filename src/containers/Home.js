import React from "react";
import UsersListComponent from "../components/UsersList";
import ChatScreenComponent from "../components/ChatMainScreen";
const HomeContainer = (props) => {
  return (
    <div className="mainHomeContainer p-5">
      <div className="container wholeContentContainer pt-4">
        <div className="col-12 d-flex">
          <div className="col-3 userListComponentMainDiv">
            <UsersListComponent />
          </div>
          <div className="col-9 chatComponentMainDiv">
            <ChatScreenComponent />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeContainer;
