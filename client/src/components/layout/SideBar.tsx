import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const SideBar: React.FC = () => {
  const { user } = useAuth0();

  return (
    <div className="text-center md:text-left">
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
    </div>
  );
};

export default SideBar;
