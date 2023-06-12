import React, { useRef } from "react";
import style from "./example.module.scss";
import { Canvas, useLoader } from "@react-three/fiber";
import Polyhedron from "../../components/polyndrone";
import * as THREE from "three";
import { Perf } from "r3f-perf";
import useAppStore from "../../stores/appStore";
import { OrbitControls, PointerLockControls } from "@react-three/drei";
import { useControls } from "leva";
import Floor from "../../components/floor";
// import ExampleUI from "./ui";
import Lights from "./lights";
import { useGetQueryValues } from "../../hooks/useGetQueryValues";

const Example = () => {
    const uiRef = useRef<HTMLDivElement>(null);

    const control = useAppStore(state => state.control);
    const debug = useAppStore(state => state.debug);
    const texture = useLoader(THREE.TextureLoader, "./img/grid.png");

    const color = useControls({
        value: "#001122",
    });

    useGetQueryValues();

    return (
        <main className={style.app}>
            {/* <ExampleUI ref={uiRef} /> */}
            <Canvas camera={{ position: [4, 4, 1.5] }} shadows>
                {control === "point" ? (
                    <PointerLockControls
                        onLock={() => {
                            document.body.style.cursor = "none";
                            if (uiRef.current) uiRef.current.style.display = "none";
                        }}
                        onUnlock={() => {
                            document.body.style.cursor = "default";
                            if (uiRef.current) uiRef.current.style.display = "";
                        }}
                    />
                ) : null}

                {control === "orbit" ? <OrbitControls /> : null}

                <color attach="background" args={[color.value]} />

                {debug ? (
                    <>
                        <Perf position="top-left" />
                        <axesHelper args={[5]} />
                        <gridHelper rotation-x={Math.PI / 4} args={[20, 20, 0xff0000, "teal"]} />
                    </>
                ) : null}

                {debug ? <Lights /> : <ambientLight />}

                <Polyhedron
                    name="meshBasicMaterial"
                    position={[-3, 1, 0]}
                    material={new THREE.MeshBasicMaterial({ map: texture })}
                />
                <Polyhedron
                    name="meshNormalMaterial"
                    position={[-1, 1, 0]}
                    material={new THREE.MeshNormalMaterial({ flatShading: true })}
                />
                <Polyhedron
                    name="meshPhongMaterial"
                    position={[1, 1, 0]}
                    material={
                        new THREE.MeshPhongMaterial({
                            color: "lime",
                            flatShading: true,
                            map: texture,
                        })
                    }
                />
                <Polyhedron
                    name="meshStandardMaterial"
                    position={[3, 1, 0]}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: 0xff0033,
                            flatShading: true,
                            map: texture,
                        })
                    }
                />

                <Floor />
            </Canvas>
        </main>
    );
};

export default Example;
