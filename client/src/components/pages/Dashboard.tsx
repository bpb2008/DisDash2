import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "../styles/dashboard-custom.css";

const Dashboard: React.FC = () => {
  const { user } = useAuth0();

  return (
    <div
      id="dashContainer"
      className="grid gap-6 md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid-rows-2 dashboard-custom"
    >
      <aside className="text-center md:text-left">
        <h2 className="text-l font-bold">Welcome, {user?.name}!</h2>
        <img src={user?.picture} alt={user?.name} />
        <nav className="mt-4">
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/trip/create">Create A Trip</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <section className="col-span-3 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Your Trips</h1>
        <p>
          No trips yet? <Link to="/trip/create">Create one!</Link>
        </p>
      </section>
    </div>
  );
};

export default Dashboard;
