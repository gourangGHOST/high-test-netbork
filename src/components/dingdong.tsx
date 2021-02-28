import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import dingdong from "../resources/dingdong.jpg"
import imageee from "../resources/abcd.png"

export function DingDong() {
    const x = useMotionValue(200);
    const y = useMotionValue(200);

    const rotateX = useTransform(y, [0, 400], [45, -45]);
    const rotateY = useTransform(x, [0, 400], [-45, 45]);

    const areaRef = React.useRef(null);

    function handleMouse(event: any) {
        // using a ref because event.target will switch to the values of the child div when you hover over it
        // @ts-ignore
        var rect = areaRef.current.getBoundingClientRect();
        // calculating the x and y position within the element
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    return (
        <motion.div
            style={{
                width: 400,
                height: 400,
                display: "flex",
                placeItems: "center",
                placeContent: "center",
                borderRadius: 30,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                perspective: 1000
            }}
            ref={areaRef}
            onMouseMove={handleMouse}
        >
            <motion.img
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    rotateX: rotateX,
                    rotateY: rotateY,
                }}
                src={dingdong}
            />
        </motion.div>
    );
}
