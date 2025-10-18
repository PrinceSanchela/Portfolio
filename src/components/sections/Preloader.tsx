import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
    onFinish: () => void;
}

const typingText = "Prince Sanchela";

const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(false);
    const [zoomOut, setZoomOut] = useState(false);

    useEffect(() => {
        let index = 0;
        const typingSpeed = 100;
        const postTypingDelay = 500;
        const extraDelay = 1000;
        const fadeOutDuration = 800;

        const typingInterval = setInterval(() => {
            if (index < typingText.length) {
                setDisplayText(typingText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(typingInterval);
                setShowCursor(true);
                setTimeout(() => setZoomOut(true), postTypingDelay);
            }
        }, typingSpeed);

        const totalDuration =
            typingText.length * typingSpeed + postTypingDelay + extraDelay + fadeOutDuration;
        const finishTimer = setTimeout(() => onFinish(), totalDuration);

        return () => {
            clearInterval(typingInterval);
            clearTimeout(finishTimer);
        };
    }, [onFinish]);
    const particleCount = 30;
    const particles = Array.from({ length: particleCount });
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex flex-col items-center justify-center"
                style={{ background: "#13151a" }}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <motion.img
                    src="/logo.png"
                    alt="Prince Logo"
                    className="w-28 h-28 md:w-32 md:h-32 mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{
                        scale: zoomOut ? 1.2 : 1,
                        rotate: zoomOut ? 20 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 12 }}
                />

                {/* Floating Particles */}
                {particles.map((_, i) => {
                    const size = Math.random() * 6 + 2;
                    const posX = Math.random() * 100;
                    const posY = Math.random() * 100;
                    const duration = 5 + Math.random() * 5;
                    const delay = Math.random() * 5;
                    const color = `rgba(${Math.floor(
                        Math.random() * 255
                    )}, ${Math.floor(Math.random() * 255)}, 255, 0.4)`;
                    return (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                width: size,
                                height: size,
                                background: color,
                                top: `${posY}%`,
                                left: `${posX}%`,
                                filter: "blur(1px)",
                            }}
                            animate={{ y: ["0%", "100%", "0%"] }}
                            transition={{
                                duration: duration,
                                repeat: Infinity,
                                repeatType: "loop",
                                delay: delay,
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}
                <motion.h1
                    className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 ..."
                    animate={{ scale: zoomOut ? 1.05 : 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <span>{displayText}</span>
                    {showCursor && (
                        <motion.span
                            className="inline-block w-[2px] h-7 ml-1 bg-black"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 0.6,
                                ease: "easeInOut",
                            }}
                        />
                    )}
                </motion.h1>
            </motion.div>
        </AnimatePresence>
    );
};

export default Preloader;
