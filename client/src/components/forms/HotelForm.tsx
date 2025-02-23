import React, { useState } from "react";
import SideBar from "../layout/SideBar";

const HotelForm: React.FC = () => {
  const [hotelName, setHotelName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  return (
    <div>
      <aside className="text-center md:text-left">
        <SideBar />
      </aside>
      <section></section>
    </div>
  );
};

export default HotelForm;
