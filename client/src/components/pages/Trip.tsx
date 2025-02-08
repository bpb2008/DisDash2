import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import TripForm from "../forms/TripForm";
import "../styles/trip-custom.css";

const Trip: React.FC = () => {
  const { user } = useAuth0();

  return (
    <div
      id="tripContainer"
      className="grid gap-6 md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid-rows-2 trip-custom"
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
      <section className="col-span-3 p-6 rounded-lg shadow-md">
        <TripForm />
      </section>
    </div>
  );
};

export default Trip;
