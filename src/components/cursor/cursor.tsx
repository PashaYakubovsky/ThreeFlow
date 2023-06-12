import React, { useEffect, useRef } from "react";
import style from "./cursor.module.scss";
import { gsap } from "gsap";
import useAnimationStore from "../../stores/animationStore";

const Cursor = () => {
    const timeline = useAnimationStore(state => state.timeline);
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const followerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!timeline) return;
        const root = document.querySelector("#root") as HTMLDivElement;
        if (root) root.style.overflow = "hidden";

        gsap.set(followerRef.current, { xPercent: -50, yPercent: -50 });
        gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

        timeline?.fromTo(
            followerRef.current,
            {
                x: "50vw",
                y: "50vh",
                width: "100vw",
                height: "100vh",
                duration: 3,
                borderRadius: "0%",
            },
            {
                width: "100px",
                height: "100px",
                duration: 5,
                onComplete: () => {
                    document.addEventListener("mousemove", onMouseMove);
                    timeline?.to(followerRef.current, {
                        borderRadius: "50%",
                        duration: 1,
                    });

                    if (root) root.style.overflow = "";
                },
            }
        );

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, [timeline]);

    const onMouseMove = (e: MouseEvent) => {
        // setCursorPos({ x: e.clientX, y: e.clientY });

        if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
            gsap.to(cursorRef.current, {
                scale: 5,
                duration: 1,
                ease: "power4",
                borderRadius: "50%",
            });
        } else if (e.target instanceof HTMLImageElement) {
            gsap.to(cursorRef.current, {
                scale: 3,
                duration: 1,
                ease: "power4",
                borderRadius: "5px",
            });
        } else {
            gsap.to(cursorRef.current, {
                scale: 1,
                duration: 1,
                ease: "power4",
                borderRadius: "50%",
            });
        }

        gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.2 });
        gsap.to(followerRef.current, { x: e.clientX, y: e.clientY, duration: 0.5 });
    };

    return (
        <>
            <div ref={cursorRef} className={style.cursor} />
            <div ref={followerRef} className={style.follower}></div>
        </>
    );
};

export default Cursor;
