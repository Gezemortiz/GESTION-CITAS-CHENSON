import React, { useState } from 'react';

function AgendaCitas() {
  const [citas, setCitas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [telefono, setTelefono] = useState('');
  const [departamento, setDepartamento] = useState('');

  // Lista de departamentos
  const departamentos = [
    'ALMACEN',
    'AUDITORIA',
    'CHB',
    'COMERCIO EXTERIOR',
    'COMPRAS',
    'CONTABILIDAD',
    'CONTACT CENTER CHB',
    'CREDITO Y COBRANZA',
    'CRM',
    'DISTRIBUCION',
    'GERENCIA ADMINISTRATIVA',
    'INMUEBLES',
    'INNOVACION Y DESARROLLO DE PRODUCTO',
    'INTELIGENCIA DE NEGOCIOS',
    'MANTENIMIENTO',
    'MANUFACTURA Y CALIDAD',
    'PROCESOS',
    'MERCADOTECNIA',
    'SAC',
    'SERVICIOS GENERALES',
    'TALENTO Y CULTURA',
    'TECNOLOGIAS DE INFORMACION',
    'TESORERIA',
    'VENTAS DE CADENA',
    'VENTAS DIGITALES',
    'VENTAS INTERNACIONALES',
    'TIENDAS GDL',
    'DF',
    'OTRO'
  ];

  const manejarEnvio = (e) => {
    e.preventDefault();

    // Validar teléfono
    const telefonoValido = /^\d{10}$/.test(telefono);
    if (!telefonoValido) {
      alert('El teléfono debe tener 10 dígitos.');
      return;
    }

    const nuevaCita = {
      id: Date.now(),
      nombre,
      correo,
      telefono,
      fecha,
      hora,
      departamento
    };

    setCitas([...citas, nuevaCita]);

    // Limpiar el formulario
    setNombre('');
    setCorreo('');
    setTelefono('');
    setFecha('');
    setHora('');
    setDepartamento('');
  };

  return (
    <div>
      <h2>Agendar nueva cita</h2>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Teléfono (10 dígitos)"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          pattern="\d{10}"
          required
        />
        <select
          value={departamento}
          onChange={(e) => setDepartamento(e.target.value)}
          required
        >
          <option value="">Selecciona un departamento</option>
          {departamentos.map((dep) => (
            <option key={dep} value={dep}>
              {dep}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />
        <button type="submit">Agendar</button>
      </form>

      <h3>Citas programadas:</h3>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>
            {cita.nombre} - {cita.fecha} a las {cita.hora} - {cita.telefono} -{' '}
            {cita.departamento}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AgendaCitas;
