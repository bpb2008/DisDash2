import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "../styles/dashboard-custom.css";

interface Trip {
  id: number;
  tripName: string;
  startDate: string;
  endDate: string;
}

const Dashboard: React.FC = () => {
  const { user } = useAuth0();
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/trips");

        if (!response.ok) {
          throw new Error("Failed to fetch trips");
        }

        const data = await response.json();
        setTrips(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, []);

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
        {loading && <p>Loading Trips...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {trips.length === 0 && !loading && !error && !error ? (
          <p>
            No trips yet?{" "}
            <Link to="/trip/create" className="text-blue-500">
              Create one!
            </Link>
          </p>
        ) : (
          <ul className="space-y-4">
            {trips.map((trip) => (
              <li key={trip.id} id="tripBox">
                <h2>{trip.tripName}</h2>
                <p>
                  {new Date(trip.startDate).toLocaleDateString()} -{" "}
                  {new Date(trip.endDate).toLocaleDateString()}
                </p>
                <Link to={`/trip/${trip.id}`} className="text-blue-500">
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
