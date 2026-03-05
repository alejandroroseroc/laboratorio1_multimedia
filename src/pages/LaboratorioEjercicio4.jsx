import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GruposLaboratorio4 from "../components/GruposLaboratorio4";

function LaboratorioEjercicio4() {
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <Canvas camera={{ position: [8, 4, 10], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} />

        <GruposLaboratorio4 />

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default LaboratorioEjercicio4;