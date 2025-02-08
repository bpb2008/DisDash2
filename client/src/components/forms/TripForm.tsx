import React, { useState } from "react";
import "../styles/trip-custom.css";
import { useNavigate } from "react-router-dom";

const TripForm: React.FC = () => {
  const [tripName, setTripName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);

    if (!tripName || !startDate || !endDate) {
      setError("All fields are reqiired.");
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      setError("End date must be after start date.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:6000/api/trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tripName,
          startDate,
          endDate,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create trip.");
      }

      alert("Trip created successfully!");
      navigate("/dashboard");
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="tripForm" className="trip-custom">
      <h1 className="text-2xl font-bold text-center mb-4">Create a New Trip</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Trip Name Input */}
        <div>
          <label>Trip Name</label>
          <input
            type="text"
            placeholder="Enter Trip Name"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
            required
          />
        </div>
        {/* Start Date Input */}
        <div>
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        {/* End Date Input */}
        <div>
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="border-[#0e4a80] bg-[#158fd4] hover:bg-[#9daecc] hover:border-white text-white border-2 rounded-md p-2 mt-4 w-full"
          disabled={loading}
        >
          {loading ? "Creating Trip..." : "Create Trip"}
        </button>
      </form>
    </div>
  );
};

export default TripForm;
