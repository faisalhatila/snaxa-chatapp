import React from "react";
import ChatScreenTopComponent from "./ChatMainScreenTop";
import ChatMainScreenBody from "./ChatMainScreenBody";
import ChatMainScreenFooter from "./ChatMainScreenFooter";

const ChatScreenComponent = (props) => {
  return (
    <div className="mt-3 mt-md-0">
      <ChatScreenTopComponent currentUser={props.currentUser} />
      <ChatMainScreenBody currentUser={props.currentUser} />
      <ChatMainScreenFooter />
    </div>
  );
};

export default ChatScreenComponent;
