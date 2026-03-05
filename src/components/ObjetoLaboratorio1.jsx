import { useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function ObjetoLaboratorio1() {
  // Estado para saber cuál textura está activa
  const [usarTexturaUno, setUsarTexturaUno] = useState(true);

  // Cargamos las dos texturas desde la carpeta public/assets
  const [textura1, textura2] = useLoader(TextureLoader, [
    "/assets/texture1.jpg",
    "/assets/texture2.jpg",
  ]);

  // Elegimos qué textura mostrar según el estado
  const texturaActual = usarTexturaUno ? textura1 : textura2;

  return (
    <mesh
      position={[0, 0, 0]}
      rotation={[0.4, 0.6, 0]}
      onClick={() => setUsarTexturaUno(!usarTexturaUno)}
    >
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial map={texturaActual} />
    </mesh>
  );
}

export default ObjetoLaboratorio1;