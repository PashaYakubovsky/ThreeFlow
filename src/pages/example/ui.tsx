import React from "react";
import style from "./ui.module.scss";

const ExampleUI = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className={style.ui} ref={ref}>
            <div>ExampleUI</div>
        </div>
    );
});
export default ExampleUI;
