import React from "react";

const ChatScreenTopComponent = (props) => {
  console.log(props.currentUser.name);
  const { currentUser } = props;
  return (
    <div className="pt-4 pb-4">
      <div>
        <div className="d-flex align-items-center">
          <span
            className={`chatScreenTopBulb mr-2 ${
              currentUser.isOnline
                ? "avatarActiveStatusColor"
                : "avatarInactiveStatus"
            }`}
          ></span>
          <h4 className="noMargin">{currentUser && currentUser.name}</h4>
        </div>
        <div className="d-flex align-items-center">
          <label className="noMargin smallFont11 heavyFont">
            {`${currentUser.isOnline ? "Online" : "Away"}`} |
          </label>
          <label className="noMargin smallFont11 heavyFont">
            &nbsp;Local time 2:20 PM
          </label>
        </div>
      </div>
    </div>
  );
};

export default ChatScreenTopComponent;
