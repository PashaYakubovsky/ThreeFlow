import Linkify from "react-linkify";
import React, { useCallback, useEffect, useRef } from "react";
import style from "./home.module.scss";
import useAppStore from "../../stores/appStore";
import { AvailableApis } from "../../stores/appStore";
import { gsap } from "gsap";
import Cursor from "../../components/cursor/cursor";
import useAnimationStore from "../../stores/animationStore";
import AnimationText from "../../components/animation-text/animationText";
import "../../mainScene";

const apis = Object.entries(AvailableApis);

function shuffleArray(array: [string, AvailableApis][]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const App = () => {
    const mainRef = useRef<HTMLDivElement | null>(null);
    const timeline = useAnimationStore(state => state.timeline);
    const changeTimeline = useAnimationStore(state => state.changeTimeline);
    const sectionRefs = useRef<HTMLElement[]>([]);
    const apiCall = useAppStore(state => state.apiCall);
    const response = useAppStore(state => state.response);
    const currentApi = useAppStore(state => state.currentApi);
    const changeCurrentApi = useAppStore(state => state.changeCurrentApi);
    const isLoading = useAppStore(state => state.isLoading);

    const nextApi = useCallback(async () => {
        const _currentApi = shuffleArray(apis).find(item => {
            if (item[0] === currentApi) {
                return false;
            }
            return true;
        })?.[0] as unknown as AvailableApis;

        changeCurrentApi(_currentApi);

        await apiCall(_currentApi);
    }, [apis, currentApi, changeCurrentApi, shuffleArray]);

    useEffect(() => {
        if (!timeline) {
            const tl = gsap.timeline();

            changeTimeline(tl);

            tl.fromTo(
                sectionRefs.current[0],
                {
                    opacity: 0,
                    width: "0%",
                },
                {
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out",
                    width: "100%",
                }
            );
        }

        document.querySelector("#app")?.classList.add(style.app);
        return () => {
            document.querySelector("#app")?.classList.remove(style.app);
        };
    }, []);

    return (
        <main ref={mainRef} className={style.main}>
            <Cursor />

            <span className={style.scrollProgress}>
                <span id="scrollProgressBar" className={style.scrollProgressBar} />
            </span>
            <section ref={node => node && sectionRefs.current.push(node)} className={style.section}>
                <AnimationText className={style.header} text="Hi there, happy to see you :)" />
            </section>
            <section ref={node => node && sectionRefs.current.push(node)} className={style.section}>
                <Linkify
                    componentDecorator={text => {
                        if (/.(jpg|png|jpeg)/gi.test(text)) {
                            // fox api returns a string with the image url and some other stuff
                            try {
                                const _text = text.split(",")[0].replace('"', "");
                                return <img className={style.image} src={_text} />;
                            } catch (e) {
                                console.log(e);
                            }

                            return <>{text}</>;
                        }
                    }}
                >
                    <pre className={style.paragraph}>
                        {response ? response : "No response yet."}
                    </pre>
                </Linkify>
                currentApi: {AvailableApis[currentApi]}
                <button
                    className={style.button}
                    onClick={() => apiCall(currentApi)}
                    disabled={isLoading}
                >
                    Make API Call
                </button>
                <button className={style.button} onClick={nextApi} disabled={isLoading}>
                    Next API
                </button>
            </section>
            <section ref={node => node && sectionRefs.current.push(node)} className={style.section}>
                <h2 className={style.subtitle}>This is a React app.</h2>
            </section>
        </main>
    );
};

export default App;
