import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ObjetoLaboratorio3 from "../components/ObjetoLaboratorio3";

function LaboratorioEjercicio3() {
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <Canvas camera={{ position: [5, 3, 6], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} />

        <ObjetoLaboratorio3 />

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default LaboratorioEjercicio3;