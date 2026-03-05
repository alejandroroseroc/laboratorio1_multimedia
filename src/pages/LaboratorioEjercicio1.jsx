import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ObjetoLaboratorio1 from "../components/ObjetoLaboratorio1";

function LaboratorioEjercicio1() {
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <Canvas camera={{ position: [6, 4, 6], fov: 45 }}>
        {/* Luz ambiental */}
        <ambientLight intensity={1} />

        {/* Luz direccional */}
        <directionalLight position={[5, 10, 5]} intensity={1.5} />

        {/* Objeto del ejercicio */}
        <ObjetoLaboratorio1 />

        {/* Control de cámara */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default LaboratorioEjercicio1;