import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function ModeloLaboratorio2({ onCambiarLuz }) {
  const gltf = useLoader(GLTFLoader, "/assets/cockpit.glb");
  const scene = gltf.scene;

  const originalPrender = "group1331758738";
  const originalApagar  = "mesh2026890297_1";

  useEffect(() => {
    const prender = scene.getObjectByName(originalPrender);
    const apagar  = scene.getObjectByName(originalApagar);

    if (prender) prender.name = "ASIENTO_PRENDER";
    if (apagar)  apagar.name  = "ASIENTO_APAGAR";

    console.log("Renombrado prender:", prender);
    console.log("Renombrado apagar:", apagar);
  }, [scene]);

  const handleClick = (event) => {
    console.log("Objeto clickeado:", event.object.name);

    if (event.object.name === "ASIENTO_PRENDER") {
      onCambiarLuz(true);   
    }

    if (event.object.name === "ASIENTO_APAGAR") {
      onCambiarLuz(false);  
    }
  };

  return (
    <primitive object={scene} scale={1.5} position={[0, -1, 0]} onClick={handleClick} />
  );
}

export default ModeloLaboratorio2;