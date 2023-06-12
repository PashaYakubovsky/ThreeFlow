import { useRef } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { useControls } from "leva";

export default function Polyhedron(props: MeshProps) {
    const ref = useRef<any>(null);

    useFrame((_, delta) => {
        if (!ref.current) return;
        ref.current.rotation.x += 0.2 * delta;
        ref.current.rotation.y += 0.05 * delta;
    });

    useControls((props as { name: string })?.name, {
        wireframe: {
            value: false,
            onChange: v => {
                if (!ref.current) return;
                ref.current.material.wireframe = v;
            },
        },
        flatShading: {
            value: true,
            onChange: v => {
                if (!ref.current) return;
                ref.current.material.flatShading = v;
                ref.current.material.needsUpdate = true;
            },
        },
        color: {
            value: "lime",
            onChange: v => {
                if (!ref.current) return;
                ref.current.material.color = new THREE.Color(v);
            },
        },
    });

    return (
        <mesh castShadow receiveShadow {...props} ref={ref}>
            <icosahedronGeometry args={[1, 1]} />
        </mesh>
    );
}
