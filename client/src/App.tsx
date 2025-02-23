import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/layout/Layout";
import Trip from "./components/pages/Trip";
import TripDetails from "./components/pages/TripDetails";
import HotelForm from "./components/forms/HotelForm";
import FlightForm from "./components/forms/FlightForm";
import RentalCarForm from "./components/forms/RentalCarForm";
import DiningForm from "./components/forms/DiningForm";
import ExcursionForm from "./components/forms/ExcursionForm";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trip/create"
            element={
              <ProtectedRoute>
                <Trip />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trip/details" // Change this to /trip/:id
            element={
              <ProtectedRoute>
                <TripDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trip/hotel"
            element={
              <ProtectedRoute>
                <HotelForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trip/flight"
            element={
              <ProtectedRoute>
                <FlightForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trip/rentalCar"
            element={
              <ProtectedRoute>
                <RentalCarForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trip/dining"
            element={
              <ProtectedRoute>
                <DiningForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trip/excursion"
            element={
              <ProtectedRoute>
                <ExcursionForm />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
