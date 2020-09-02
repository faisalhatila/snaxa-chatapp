import React from "react";
import ChatScreenTopComponent from "./ChatMainScreenTop";
import ChatMainScreenBody from "./ChatMainScreenBody";

const ChatScreenComponent = (props) => {
  return (
    <div>
      <ChatScreenTopComponent />
      <ChatMainScreenBody />
    </div>
  );
};

export default ChatScreenComponent;
