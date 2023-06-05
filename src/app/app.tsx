import React from "react";
import style from "./app.module.scss";

const App = () => {
    return (
        <main className={style.app}>
            <section className={style.section}>
                <header className={style.header}>Hi there happy to see you :)</header>
            </section>
            <section className={style.section}>
                <h1 className={style.title}>Hello, World!</h1>
            </section>
            <section className={style.section}>
                <h2 className={style.subtitle}>This is a React app.</h2>
            </section>
        </main>
    );
};

export default App;
