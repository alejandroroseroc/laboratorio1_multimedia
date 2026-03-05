import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function GruposLaboratorio4() {
  // Referencias para animar cada grupo
  const grupo1Ref = useRef();
  const grupo2Ref = useRef();

  // Estado para colores (un color para todo el grupo)
  const [colorGrupo1, setColorGrupo1] = useState("#ffffff");
  const [colorGrupo2, setColorGrupo2] = useState("#ffffff");

  // Movimiento diferente para cada grupo
  useFrame((state) => {
    // Grupo 1: rota constantemente
    if (grupo1Ref.current) {
      grupo1Ref.current.rotation.y += 0.01;
    }

    // Grupo 2: sube y baja (movimiento senoidal)
    if (grupo2Ref.current) {
      const t = state.clock.getElapsedTime();
      grupo2Ref.current.position.y = Math.sin(t) * 0.5;
    }
  });

  // Click en grupo 1: alterna color
  const handleClickGrupo1 = () => {
    setColorGrupo1((prev) => (prev === "#ffffff" ? "#ff7a00" : "#ffffff"));
  };

  // Click en grupo 2: alterna color
  const handleClickGrupo2 = () => {
    setColorGrupo2((prev) => (prev === "#ffffff" ? "#00c2ff" : "#ffffff"));
  };

  return (
    <>
      {/* GRUPO 1: 3 objetos (rota) */}
      <group ref={grupo1Ref} position={[-3, 0, 0]} onClick={handleClickGrupo1}>
        {/* Objeto 1 */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={colorGrupo1} />
        </mesh>

        {/* Objeto 2 */}
        <mesh position={[1.6, 0, 0]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color={colorGrupo1} />
        </mesh>

        {/* Objeto 3 */}
        <mesh position={[-1.6, 0, 0]}>
          <coneGeometry args={[0.6, 1.4, 32]} />
          <meshStandardMaterial color={colorGrupo1} />
        </mesh>
      </group>

      {/* GRUPO 2: 3 objetos (sube/baja) */}
      <group ref={grupo2Ref} position={[3, 0, 0]} onClick={handleClickGrupo2}>
        {/* Objeto 1 */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 1.6, 32]} />
          <meshStandardMaterial color={colorGrupo2} />
        </mesh>

        {/* Objeto 2 */}
        <mesh position={[1.6, 0, 0]}>
          <boxGeometry args={[1, 0.8, 1]} />
          <meshStandardMaterial color={colorGrupo2} />
        </mesh>

        {/* Objeto 3 */}
        <mesh position={[-1.6, 0, 0]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color={colorGrupo2} />
        </mesh>
      </group>
    </>
  );
}

export default GruposLaboratorio4;