import React, { useEffect, useRef, useState, ReactNode } from "react";

interface RevealOnScrollProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
    children,
    direction = "up",
    delay = 0,
}) => {
    const [isVisible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Set visible when in viewport
                    if (entry.isIntersecting) {
                        setVisible(true);
                    } else {
                        // Hide again when scrolled out
                        setVisible(false);
                    }
                });
            },
            { threshold: 0.1 } // visible only when 20% of section is shown
        );

        const current = ref.current;
        if (current) observer.observe(current);
        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    const directions: Record<string, string> = {
        up: "translate-y-10",
        down: "-translate-y-10",
        left: "-translate-x-10",
        right: "translate-x-10",
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out transform ${isVisible
                ? "opacity-100 translate-x-0 translate-y-0"
                : `opacity-0 ${directions[direction]}`
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;
