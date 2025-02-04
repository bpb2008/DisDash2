import React from "react";
import LoginButton from "../authentication/LoginButton";
import LogoutButton from "../authentication/LogoutButton";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome To DisDash!</h1>
      <LoginButton />
      <LogoutButton />
    </div>
  );
};

export default Home;
