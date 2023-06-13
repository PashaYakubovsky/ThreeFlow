import WiseDogOnACloud from "../../components/WiseDogOnAcloud";
import * as THREE from "three";
import Background from "../../components/background/background";
import CumulusClouds from "../../components/CumulusClouds";
import Jet from "../../components/Jet";
import {
    Float,
    // OrbitControls,
    PerspectiveCamera,
    // PointerLockControls,
    // ScrollControls,
    Text,
    useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import useAtmosStore from "../../stores/atmosStore";

const LINE_CR_POINTS = 1200;

const AtmosScene = () => {
    const text = useAtmosStore(state => state.text);
    const airplane = useRef<THREE.Group>(null);
    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3(
            [
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(-2, 0, -10),
                new THREE.Vector3(-3, 0, -20),
                new THREE.Vector3(0, 0, -30),
                new THREE.Vector3(5, 0, -40),
                new THREE.Vector3(7, 0, -50),
                new THREE.Vector3(5, 0, -60),
                new THREE.Vector3(0, 0, -70),
                new THREE.Vector3(10, 0, -80),
                new THREE.Vector3(5, 0, -90),
                new THREE.Vector3(-5, 0, -100),
                new THREE.Vector3(2, 0, -110),
                new THREE.Vector3(8, 0, -120),
                new THREE.Vector3(4, 0, -130),
                new THREE.Vector3(0, 0, -140),
            ],
            false,
            "catmullrom",
            0.5
        );
    }, []);

    const linePoints = useMemo(() => {
        return curve.getPoints(LINE_CR_POINTS);
    }, [curve]);

    const shape = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.lineTo(0, 1);
        shape.lineTo(1, 1);
        shape.lineTo(1, 0);
        shape.lineTo(0, 0);
        return shape;
    }, []);

    const cameraGroup = useRef<THREE.Group>(null);

    const scroll = useScroll();

    useFrame((_state, delta) => {
        if (scroll?.offset === null || scroll?.offset === undefined) return;
        const curPointIndex = Math.min(
            Math.round(scroll.offset * linePoints.length),
            linePoints.length - 1
        );

        const curPoint = linePoints[curPointIndex];
        const pointAhead = linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)];

        const xDisplacement = (pointAhead.x - curPoint.x) * 80;

        // Math.PI / 2 --> LEFT
        // -Math.PI / 2 --> RIGHT

        const angleRotation =
            (xDisplacement < 0 ? 1 : 0) * Math.min(Math.abs(xDisplacement), 1, Math.PI / 2);

        const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(
                airplane.current!.rotation.x,
                airplane.current!.rotation.y,
                angleRotation
            )
        );

        const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(
                cameraGroup.current!.rotation.x,
                angleRotation,
                cameraGroup.current!.rotation.z
            )
        );

        airplane.current!.quaternion.slerp(targetAirplaneQuaternion, delta * 2);
        cameraGroup.current!.quaternion.slerp(targetCameraQuaternion, delta * 2);
        cameraGroup.current!.position.lerp(curPoint, delta * 24);
    });

    return (
        <>
            <group ref={cameraGroup}>
                {/* <PointerCamera
                    camera={new THREE.PerspectiveCamera(30)}
                    position={[0, 5, 30]}
                    makeDefault
                /> */}

                <PerspectiveCamera fov={60} position={[-15, 5, 30]} makeDefault />

                {/* <OrbitControls enableZoom={false} /> */}

                <Background />

                <Float floatIntensity={1} speed={2} rotationIntensity={0.5}>
                    <group ref={airplane}>
                        <Jet
                            scale={[0.5, 0.5, 0.5]}
                            rotation={new THREE.Euler(-0.2, 2.6)}
                            position-y={0.1}
                        />
                    </group>
                </Float>
            </group>

            {/* Text */}
            <Text
                color="#fff"
                anchorX="left"
                anchorY="middle"
                maxWidth={2.5}
                position={[0, 0, 10]}
                font="/fonts/FiraCode-Bold.ttf"
                fontSize={0.5}>
                Welcome to my new app!
                {text}
            </Text>

            {/* Line */}
            <group position={[0, -4, 0]}>
                <mesh>
                    <extrudeGeometry
                        args={[
                            shape,
                            {
                                bevelEnabled: false,
                                steps: LINE_CR_POINTS,
                                extrudePath: curve,
                            },
                        ]}
                    />
                    <meshStandardMaterial color="#040404" opacity={0.7} transparent />
                </mesh>
            </group>

            <CumulusClouds scale={[5, 5, 5]} position={[0, 4, -50]} />
            <CumulusClouds scale={[5, 5, 5]} position={[20, 4, -150]} />
            <CumulusClouds scale={[5, 5, 5]} position={[-20, 4, -100]} />
            <CumulusClouds scale={[5, 5, 5]} position={[30, 8, 10]} />
            <CumulusClouds scale={[5, 5, 5]} position={[-10, 8, -20]} />
            <CumulusClouds scale={[5, 5, 5]} position={[-10, 8, 20]} />
            <WiseDogOnACloud
                rotation={new THREE.Euler(100, 90)}
                scale={[2, 2, 2]}
                position={[7, 4, -60]}
            />
            <WiseDogOnACloud
                scale={[5, 5, 5]}
                rotation={new THREE.Euler(100, 90)}
                position={[2, -1, -4]}
            />
            <WiseDogOnACloud scale={[12, 12, 12]} position={[22, 0, -50]} />
        </>
    );
};

export default AtmosScene;
