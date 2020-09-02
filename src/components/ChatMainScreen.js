import React from "react";
import ChatScreenTopComponent from "./ChatMainScreenTop";
import ChatMainScreenBody from "./ChatMainScreenBody";
import ChatMainScreenFooter from "./ChatMainScreenFooter";

const ChatScreenComponent = (props) => {
  return (
    <div>
      <ChatScreenTopComponent />
      <ChatMainScreenBody />
      <ChatMainScreenFooter />
    </div>
  );
};

export default ChatScreenComponent;
