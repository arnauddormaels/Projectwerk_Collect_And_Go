// TimingList.js

import React, { useEffect, useState } from "react";
import TimingItem from "./TimingItem"; // Verander dit naar de juiste import voor TimingItem

const TimingList = () => {
  const [timings, setTimings] = useState([]);

  const fetchTimings = async () => {
    try {
      const response = await fetch("https://localhost:7226/api/Timing");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTimings(data);
    } catch (error) {
      console.error("Er ging iets mis met het ophalen van api/Timings", error);
    }
  };

  useEffect(() => {
    fetchTimings();
  }, []);

  return (
    <div>
      {timings.map((timing) => (
        // De key prop zou nu moeten overeenkomen met een uniek veld uit je timing object
        <TimingItem key={timing.timingId} timing={timing} />
      ))}
    </div>
  );
};

export default TimingList;
