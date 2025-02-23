import React from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "../styles/tripDetails-custom.css";
import SideBar from "../layout/SideBar";

const TripDetails: React.FC = () => {
  const { id, name } = useParams();
  const { user } = useAuth0();

  return (
    <div
      id="tripDetails"
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
          <ul>
            <li className="mt-5">Add To Your Trip</li>
            <li>
              <Link to="/trip/hotel">Hotel</Link>
            </li>
            <li>
              <Link to="/trip/flight">Flight</Link>
            </li>
            <li>
              <Link to="/trip/rentalCar">Rental Car</Link>
            </li>
            <li>
              <Link to="/trip/dining">Dining Reservation</Link>
            </li>
            <li>
              <Link to="/trip/excursion">Excursion</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="col-span-3 p-6 rounded-lg shadow-md">
        <h1>Trip Name: {name}</h1>
        <p>Trip ID: {id}</p>
        {/* Show trip plans and options to edit here! */}
      </section>
    </div>
  );
};

export default TripDetails;
