import React from "react";
import { sendConfirmation } from "../services/api";

const Confirmation = ({ userEmail, slot }) => {
  const handleConfirm = async () => {
    await sendConfirmation(userEmail, slot);
    alert("¡Cita confirmada! Revisa tu correo.");
  };

  return (
    <div className="confirmation">
      <p>
        Has seleccionado la cita para el día <strong>{slot.date}</strong> a las{" "}
        <strong>{slot.time}</strong>.
      </p>
      <button className="btn-primary" onClick={handleConfirm}>
        Confirmar Cita
      </button>
    </div>
  );
};

export default Confirmation;