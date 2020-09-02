import React from "react";
import ChatMessge from "./ChatMessage";
import ChatMessgeAdmin from "./ChatMessageAdmin";

const ChatMainScreenBody = (props) => {
  return (
    <div className="chatScreenBodyMain d-flex justify-content-end flex-column">
      <div className="chatScreenBody">
        {[...Array(2)].map((i) => {
          return <ChatMessge currentUser={props.currentUser} />;
        })}
        {[...Array(2)].map((i) => {
          return <ChatMessgeAdmin currentUser={props.currentUser} />;
        })}
        {[...Array(2)].map((i) => {
          return <ChatMessge currentUser={props.currentUser} />;
        })}
        {[...Array(2)].map((i) => {
          return <ChatMessgeAdmin currentUser={props.currentUser} />;
        })}
        {[...Array(2)].map((i) => {
          return <ChatMessge currentUser={props.currentUser} />;
        })}
        {[...Array(2)].map((i) => {
          return <ChatMessgeAdmin currentUser={props.currentUser} />;
        })}
        {[...Array(2)].map((i) => {
          return <ChatMessge currentUser={props.currentUser} />;
        })}
        {[...Array(2)].map((i) => {
          return <ChatMessgeAdmin currentUser={props.currentUser} />;
        })}
        {[...Array(2)].map((i) => {
          return <ChatMessge currentUser={props.currentUser} />;
        })}
        {[...Array(2)].map((i) => {
          return <ChatMessgeAdmin currentUser={props.currentUser} />;
        })}
        {[...Array(2)].map((i) => {
          return <ChatMessge currentUser={props.currentUser} />;
        })}
        {[...Array(2)].map((i) => {
          return <ChatMessgeAdmin currentUser={props.currentUser} />;
        })}
      </div>
    </div>
  );
};

export default ChatMainScreenBody;
