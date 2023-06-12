import { Clone, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useMemo } from "react";
import * as THREE from "three";

export const Models = [
    { title: "Hammer", url: "./models/hammer.glb" },
    { title: "Drill", url: "./models/drill.glb" },
    { title: "Tape Measure", url: "./models/tapeMeasure.glb" },
];

const Model = ({ url }: { url: string }) => {
    const { scene } = useGLTF(url);

    const clock = useMemo(() => new THREE.Clock(), []);

    useFrame(() => {
        scene.rotateX(0.01);
        scene.rotateY(0.01);
        scene.rotateZ(0.01);

        // Traverse the scene and change the material colors
        scene.traverse(child => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                // Change the material color based on time
                const t = clock.getElapsedTime();
                child.material.color.set(
                    new THREE.Color(Math.sin(t * 2.7), Math.cos(t * 1.4), Math.cos(t * 3.1))
                );
            }
        });
    });

    return <primitive object={scene} />;
};

export default Model;
