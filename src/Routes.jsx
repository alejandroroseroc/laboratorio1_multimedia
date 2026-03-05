// src/app/router.jsx
import React from "react";
import Inicio from "./pages/Inicio";
import Ejercicio2 from "./pages/Ejercicio2";
import Ejercicio3 from "./pages/Ejercicio3";
import Ejercicio4 from "./pages/Ejercicio4";
import Ejercicio5 from "./pages/Ejercicio5";
import Luces from "./pages/Luces";
import LaboratorioEjercicio1 from "./pages/LaboratorioEjercicio1";
import LaboratorioEjercicio2 from "./pages/LaboratorioEjercicio2";
import LaboratorioEjercicio3 from "./pages/LaboratorioEjercicio3";
import LaboratorioEjercicio4 from "./pages/LaboratorioEjercicio4";
import LaboratorioEjercicio5 from "./pages/LaboratorioEjercicio5";
import LaboratorioEjercicio6 from "./pages/LaboratorioEjercicio6";


const routes = [
  { path: "/", element: <Inicio />, index: true },
  // Practicas 1
  { path: "ejercicio2", element: <Ejercicio2 /> },
  { path: "ejercicio3", element: <Ejercicio3 /> },
  { path: "ejercicio4", element: <Ejercicio4 /> },
  { path: "ejercicio5", element: <Ejercicio5 /> },
  { path: "luces", element: <Luces />},
  { path: "laboratorio/ejercicio1", element: <LaboratorioEjercicio1  />},
  { path: "laboratorio/ejercicio2", element: <LaboratorioEjercicio2  />},
  { path: "laboratorio/ejercicio3", element: <LaboratorioEjercicio3  />},
  { path: "laboratorio/ejercicio4", element: <LaboratorioEjercicio4  />},
  { path: "laboratorio/ejercicio5", element: <LaboratorioEjercicio5  />},
  { path: "laboratorio/ejercicio6", element: <LaboratorioEjercicio6  />},

];

export default routes;
