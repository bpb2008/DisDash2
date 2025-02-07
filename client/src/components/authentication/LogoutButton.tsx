import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="border-white bg-[#158fd4] hover:bg-[#9daecc] text-white border-2 rounded-md p-2"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
