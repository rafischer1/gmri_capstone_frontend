import React from "react";

const SignUpCard = ({ chatSignUpCallback }) => {
  /* Sign Up callback disregards the email input to not 'over-engineer' the project */
  const signUpSubmit = chatSignUpCallback => ev => {
    ev.preventDefault();
    chatSignUpCallback(
      ev.target[1].value.toLowerCase(),
      ev.target[2].value.toLowerCase()
    );
    ev.target[0].value = "";
    ev.target[1].value = "";
    ev.target[2].value = "";
  };

  return (
    <div className="ChatSignUpFlow" style={{ width: "50%" }}>
      Sign Up for Flood Chat
      <form id="submitForm" onSubmit={signUpSubmit(chatSignUpCallback)}>
        <input type="text" label="Email" placeholder="Email" required />
        <input type="text" label="Username" placeholder="Username" required />
        <input type="text" label="Password" placeholder="Password" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpCard;
