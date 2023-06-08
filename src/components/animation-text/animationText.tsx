import React, { useEffect } from "react";
import style from "./animationText.module.scss";
import { gsap } from "gsap";

const animationText = ({ text, className }: { text: string; className?: string }) => {
    const ref = React.useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const timeline = gsap.timeline();

        if (ref.current === null || timeline === null) return;
        // Animate the text using GSAP
        // Add animations to the timeline
        timeline.fromTo(ref.current, { x: "-100%", duration: 10 }, { x: "100%", duration: 20 });
        // timeline.to(ref.current, { rotation: 360, duration: 2 });

        // Set up the infinite loop
        timeline.repeat(-1);
    }, [ref]);

    return (
        <div className={style.animationText}>
            <span ref={ref} className={className}>
                {text}
            </span>
        </div>
    );
};

export default animationText;
