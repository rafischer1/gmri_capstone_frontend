import React from "react";

const ChatLoginCard = ({ chatLoginCallback }) => {
  /* login callback takes ev values for username and password */
  const loginSubmit = chatLoginCallback => ev => {
    ev.preventDefault();
    chatLoginCallback(ev.target[0].value, ev.target[1].value);
    ev.target[0].value = "";
    ev.target[1].value = "";
  };

  return (
    <div className="ChatSignUpFlow" style={{ width: "50%" }}>
      Login in to Flood Chat
      <form id="submitForm" onSubmit={loginSubmit(chatLoginCallback)}>
        <input type="text" label="Username" placeholder="Username" />
        <input type="text" label="Password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ChatLoginCard;
