import React from "react";
import LoginButton from "../authentication/LoginButton";
import LogoutButton from "../authentication/LogoutButton";
import { Link } from "react-router-dom";
import "../styles/home-custom.css";

const Home: React.FC = () => {
  return (
    <div
      id="homeContainer"
      className="grid gap-6 home-custom md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid-rows-2"
    >
      <aside className="text-center md:text-left">
        <h2 className="text-xl font-bold">Insert Logo Here!</h2>
        <nav className="mt-4">
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/trip/create">Create A Trip</Link>
            </li>
          </ul>
          <div id="logout">
            <LogoutButton />
          </div>
        </nav>
      </aside>
      <section>
        <h1>Welcome To DisDash!</h1>
        <p> All of your magical plans in one place!</p>
        <p>
          Plan your next theme park vacation with ease by adding your resort
          reservations, theme park tickets, flight information, rental car
          reservation, dining, and more.
        </p>
        <LoginButton />
      </section>
    </div>
  );
};

export default Home;
