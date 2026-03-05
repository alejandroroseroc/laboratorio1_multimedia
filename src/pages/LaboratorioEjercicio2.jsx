import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ModeloLaboratorio2 from "../components/ModeloLaboratorio2";

function LaboratorioEjercicio2() {
    const [luzActiva, setLuzActiva] = useState(false);

    const cambiarLuz = (estado) => {
        setLuzActiva(estado);
    };

    return (
        <div style={{ width: "100%", height: "80vh" }}>
            <Canvas dpr={1} camera={{ position: [6, 4, 6], fov: 45 }}>
                {/* Luz tenue inicial (pero que sí deje ver el modelo) */}
                <ambientLight intensity={0.6} />

                {/* Luz base suave */}
                <directionalLight position={[5, 10, 5]} intensity={0.4} />

                {/* Segunda luz fuerte (se activa con click) */}
                {luzActiva && (
                    <directionalLight position={[-5, 10, -5]} intensity={2} />
                )}

                <ModeloLaboratorio2 onCambiarLuz={cambiarLuz} />
                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default LaboratorioEjercicio2;