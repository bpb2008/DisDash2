import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { user } = useAuth0();

  return (
    <div>
      <aside>
        <h2>Welcome, {user?.name}!</h2>
        <nav>
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

      <section>
        <h2>Your Trips</h2>
        <p>
          No trips yet? <Link to="/trip/create">Create one!</Link>
        </p>
      </section>
    </div>
  );
};

export default Dashboard;
