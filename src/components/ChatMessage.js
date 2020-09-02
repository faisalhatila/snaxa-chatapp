import React from "react";

const ChatMessge = (props) => {
  const { currentUser } = props;
  return (
    <div className="d-flex align-items-center mb-3">
      <img alt="userImage" src={currentUser.avatar} className="avatar" />
      <p className="noMargin chatMessage">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
    </div>
  );
};

export default ChatMessge;
