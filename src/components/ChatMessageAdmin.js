import React from "react";

const ChatMessgeAdmin = (props) => {
  const { currentUser } = props;
  return (
    <div className="d-flex align-items-center mb-3">
      <p className="noMargin chatMessage text-right">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <img
        alt="userImage"
        src={`assets/img/avatars/admin.jpg`}
        className="avatar"
      />
    </div>
  );
};

export default ChatMessgeAdmin;
