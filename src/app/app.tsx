import Linkify from "react-linkify";
import React, { useCallback } from "react";
import style from "./app.module.scss";
import useAppStore from "../stores/appStore";
import { AvailableApis } from "../stores/appStore";

const apis = Object.entries(AvailableApis);

function shuffleArray(array: [string, AvailableApis][]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const App = () => {
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

    return (
        <main className={style.app}>
            <section className={style.section}>
                <header className={style.header}>Hi there, happy to see you :)</header>
            </section>
            <section className={style.section}>
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
                    }}>
                    <pre className={style.paragraph}>
                        {response ? response : "No response yet."}
                    </pre>
                </Linkify>
                currentApi: {AvailableApis[currentApi]}
                <button
                    className={style.button}
                    onClick={() => apiCall(currentApi)}
                    disabled={isLoading}>
                    Make API Call
                </button>
                <button className={style.button} onClick={nextApi} disabled={isLoading}>
                    Next API
                </button>
            </section>
            <section className={style.section}>
                <h2 className={style.subtitle}>This is a React app.</h2>
            </section>
        </main>
    );
};

export default App;
