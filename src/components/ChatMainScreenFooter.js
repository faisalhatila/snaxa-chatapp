import React from "react";

const ChatMainScreenFooter = (props) => {
  return (
    <div className="chatMainScreenFooterMainDiv">
      <div class="form-group chatMainScreenInputDiv noMargin d-flex align-items-center">
        <input
          type="email"
          class="form-control"
          placeholder="Type message ...
        "
        />
        <label className="noMargin sendButton mr-1">Send</label>
      </div>
    </div>
  );
};

export default ChatMainScreenFooter;
