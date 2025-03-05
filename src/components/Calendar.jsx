import React, { useState, useEffect } from "react";
import { fetchAvailableSlots } from "../services/api";

const Calendar = ({ onSelectSlot }) => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    fetchAvailableSlots().then((data) => setSlots(data));
  }, []);

  return (
    <div className="calendar">
      <h2>Selecciona un horario</h2>
      <div className="time-slots">
        {slots.map((slot) => (
          <button
            key={slot.id}
            className={`time-slot ${slot.blocked ? "blocked" : ""}`}
            onClick={() => !slot.blocked && onSelectSlot(slot)}
            disabled={slot.blocked}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;