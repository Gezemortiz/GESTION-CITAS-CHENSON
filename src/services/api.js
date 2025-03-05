// Simulación de una API para obtener horarios disponibles
export const fetchAvailableSlots = async () => {
    return [
      { id: 1, date: "2024-03-10", time: "09:00", blocked: false },
      { id: 2, date: "2024-03-10", time: "09:30", blocked: true },
      { id: 3, date: "2024-03-10", time: "10:00", blocked: false },
    ];
  };
  
  // Simulación de una API para enviar confirmación
  export const sendConfirmation = async (email, slot) => {
    console.log(`Enviando confirmación a ${email} para la cita a las ${slot.time}`);
    // Aquí iría la lógica real para enviar un correo o SMS
  };