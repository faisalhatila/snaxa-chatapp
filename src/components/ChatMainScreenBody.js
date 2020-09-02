import React from "react";
import ChatMessge from "./ChatMessage";

const ChatMainScreenBody = (props) => {
  return (
    <div className="chatScreenBodyMain d-flex justify-content-end flex-column">
      <div className="chatScreenBody">
        {[...Array(15)].map((i) => {
          // return <h1>Faisal</h1>;
          return <ChatMessge currentUser={props.currentUser} />;
        })}
      </div>
    </div>
  );
};

export default ChatMainScreenBody;
