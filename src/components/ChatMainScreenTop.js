import React from "react";

const ChatScreenTopComponent = (props) => {
  return (
    <div className="pt-4 pb-4">
      <div>
        <div className="d-flex align-items-center">
          <span className="chatScreenTopActiveBulb mr-2"></span>
          <h4 className="noMargin">Faisal</h4>
        </div>
        <div className="d-flex align-items-center">
          <label className="noMargin smallFont11 heavyFont">Away |</label>
          <label className="noMargin smallFont11 heavyFont">
            &nbsp;Local time 2:20 PM
          </label>
        </div>
      </div>
    </div>
  );
};

export default ChatScreenTopComponent;
