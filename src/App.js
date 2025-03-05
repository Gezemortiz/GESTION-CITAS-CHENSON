import React, { useState } from "react";
import Calendar from "./components/Calendar";
import Confirmation from "./components/Confirmation";
import "./App.css";

function App() {
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sistema de Gestión de Citas Médicas</h1>
        <p>Reserva tu cita médica en línea.</p>
        <Calendar onSelectSlot={setSelectedSlot} />
        {selectedSlot && (
          <Confirmation
            userEmail="empleado@chenson.com"
            slot={selectedSlot}
          />
        )}
      </header>
    </div>
  );
}

export default App;
