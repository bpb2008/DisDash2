import React, { useState } from "react";
import "../styles/trip-custom.css";

const TripForm: React.FC = () => {
  const [tripName, setTripName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (new Date(endDate) < new Date(startDate)) {
      setError("End date must be after start date");
      return;
    }

    setError("");
    console.log({ tripName, startDate, endDate });

    alert("Trip created successfully!");
    //Need to put the API stuff in here?!?!?!
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
          className="border-[#0e4a80] bg-[#158fd4] hover:bg-[#9daecc] text-white border-2 rounded-md p-2 mt-4 w-full"
        >
          Create Trip
        </button>
      </form>
    </div>
  );
};

export default TripForm;
