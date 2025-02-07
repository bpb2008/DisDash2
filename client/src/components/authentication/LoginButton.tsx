import { useAuth0 } from "@auth0/auth0-react";

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="border-white bg-[#158fd4] hover:bg-[#9daecc] text-white border-2 rounded-md p-2"
      onClick={() =>
        loginWithRedirect({
          appState: { returnTo: "/dashboard" },
        })
      }
    >
      Log In / Sign Up
    </button>
  );
};

export default LoginButton;
