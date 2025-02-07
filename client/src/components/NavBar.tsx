import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./authentication/LoginButton";
import LogoutButton from "./authentication/LogoutButton";

const NavBar: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="bg-[#158fd4] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">DisDash</h1>
        <ul className="flex">
          <li>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
