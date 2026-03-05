import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

function LaboratorioEjercicio5() {
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <Canvas dpr={1} camera={{ position: [6, 3, 8], fov: 45 }}>
        {/* HDRI: una sola imagen 360° (.hdr) que ilumina la escena */}
        <Environment files="/assets/pergola.exr" background />

        {/* Un objeto “metal” para que se note el HDRI en reflejos */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1.3, 32, 32]} />
          <meshStandardMaterial metalness={1} roughness={0.2} />
        </mesh>

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default LaboratorioEjercicio5;