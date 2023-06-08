import React, { useEffect, useRef } from "react";
import style from "./cursor.module.scss";
import { gsap } from "gsap";

const Cursor = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const followerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.set(followerRef.current, { xPercent: -50, yPercent: -50 });
        gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

        document.addEventListener("mousemove", onMouseMove);
        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    const onMouseMove = (e: MouseEvent) => {
        // setCursorPos({ x: e.clientX, y: e.clientY });

        if (e.target instanceof HTMLAnchorElement) {
        } else if (e.target instanceof HTMLButtonElement) {
            gsap.to(cursorRef.current, { scale: 5, duration: 1, ease: "power4" });
        } else {
            gsap.to(cursorRef.current, { scale: 1, duration: 1, ease: "power4" });
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
