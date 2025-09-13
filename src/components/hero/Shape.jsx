import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="rgb(0, 138, 212)"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
      {/* eslint-disable react/no-unknown-property */}
      <ambientLight intensity={2} />
      {/* eslint-enable react/no-unknown-property */}
      {/* eslint-disable react/no-unknown-property */}
      <directionalLight position={[1, 2, 3]} />
      {/* eslint-enable react/no-unknown-property */}
    </>
  );
};

export default Shape;
