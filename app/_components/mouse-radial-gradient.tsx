"use client";

import { tw } from "@/utils/tailwind";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseRadialGradient(props: any) {
  const [mounted, setMounted] = useState(false);
  const [hasMouseMoved, setHasMouseMoved] = useState(false);
  let mouseX = useMotionValue(-100000);
  let mouseY = useMotionValue(-100000);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleMouseMove({
      clientX,
      clientY,
    }: {
      clientX: number;
      clientY: number;
    }) {
      setHasMouseMoved(true);
      mouseX.set(clientX);
      mouseY.set(clientY);
    }

    function handleMouseDown(e: MouseEvent) {
      setHasMouseMoved(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className={tw(
          "pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300",
          mounted &&
            hasMouseMoved &&
            "lg:group-hover/body:opacity-100 motion-reduce:lg:group-hover/body:opacity-0",
        )}
        style={{
          background: useMotionTemplate`
                radial-gradient(
                  750px circle at ${mouseX}px ${mouseY}px,
                  rgba(210, 192, 192, 0.08) 0%,
                  rgba(210, 192, 192, 0.06) 15%,
                  rgba(170, 182, 192, 0.05) 30%,
                  rgba(150, 160, 175, 0.04) 45%,
                  rgba(130, 140, 160, 0.03) 60%,
                  rgba(109, 120, 134, 0.02) 75%,
                  transparent 100%
                )
              `,
        }}
      />
    </div>
  );
}
