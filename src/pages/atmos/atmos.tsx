import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";

import style from "./atmos.module.scss";
import AtmosScene from "./atmosScene";
import { ScrollControls } from "@react-three/drei";
import useAtmosStore from "../../stores/atmosStore";

import { Triangle } from "react-loader-spinner";
// import { getRandomText } from "../../libs/api";

const Atmos = () => {
    const isLoading = useAtmosStore(state => state.isLoading);
    // const changeText = useAtmosStore(state => state.changeText);
    // const changeIsLoading = useAtmosStore(state => state.changeIsLoading);

    // useEffect(() => {
    //     const init = async () => {
    //         changeIsLoading(true);
    //         const text = await getRandomText();
    //         changeText(text);
    //         changeIsLoading(false);
    //     };

    //     init();
    // }, []);
    return (
        <div className={style.atmos}>
            {isLoading ? (
                <Triangle
                    height="80vh"
                    width="80vw"
                    color="#fff"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass={style.spinner}
                    visible={true}
                />
            ) : null}
            <Suspense
                fallback={
                    <Triangle
                        height="80vh"
                        width="80vw"
                        color="#fff"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass={style.spinner}
                        visible={true}
                    />
                }>
                <Canvas>
                    <color attach="background" args={["#ececec"]} />

                    <ScrollControls pages={20} damping={1}>
                        <AtmosScene />
                    </ScrollControls>
                </Canvas>
            </Suspense>
        </div>
    );
};

export default Atmos;
