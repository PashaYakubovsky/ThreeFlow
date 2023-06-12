import { MeshProps } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { BufferGeometry, Material, Mesh, NormalBufferAttributes } from "three";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Box = (props: MeshProps) => {
    const ref = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>>(null);
    const [count, setCount] = useState(0);
    const geometry = useMemo(
        () => [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.785398)],
        []
    );

    useEffect(() => {
        console.log(ref.current?.geometry.uuid);
    });

    useFrame((_, delta) => {
        if (!ref.current) return;
        ref.current.rotation.x += delta;
        ref.current.rotation.y += 0.5 * delta;
    });

    return (
        <mesh
            geometry={geometry[count]}
            ref={ref}
            {...props}
            onPointerDown={() => setCount((count + 1) % 2)}
        >
            <meshBasicMaterial color={"lime"} wireframe />
        </mesh>
    );
};

export default Box;
