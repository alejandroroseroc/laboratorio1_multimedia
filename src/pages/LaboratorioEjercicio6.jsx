import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ModeloLaboratorio6 from "../components/ModeloLaboratorio6";

function LaboratorioEjercicio6() {
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <Canvas dpr={1} camera={{ position: [8, 5, 10], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} />

        <ModeloLaboratorio6 />

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default LaboratorioEjercicio6;