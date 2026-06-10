"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, animate, motion } from "framer-motion";
import { useLenis } from "lenis/react";

const IntroContext = createContext(false);

export const useIntroDone = () => useContext(IntroContext);

const ease = [0.76, 0, 0.24, 1] as const;

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1.5,
      ease: "easeInOut",
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => setDone(true),
    });
    return () => controls.stop();
  }, []);

  useEffect(() => {
    if (!lenis) return;
    if (done) {
      lenis.start();
    } else {
      lenis.stop();
    }
  }, [lenis, done]);

  return (
    <IntroContext.Provider value={done}>
      <AnimatePresence>
        {!done && (
          <motion.div
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease }}
            className="fixed inset-0 z-150 flex flex-col justify-between bg-ink px-6 py-8 md:px-10"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-[0.3em] text-muted uppercase"
            >
              Portfolio © {new Date().getFullYear()}
            </motion.p>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                exit={{ y: "-110%", transition: { duration: 0.5, ease } }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="display text-[clamp(2.5rem,8vw,7rem)]"
              >
                Alejandro <span className="text-stroke">Labastie</span>
              </motion.h2>
            </div>

            <div className="flex items-end justify-between">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-mono text-xs tracking-[0.3em] text-muted uppercase"
              >
                Buenos Aires, AR
              </motion.p>
              <span className="display text-6xl text-accent tabular-nums md:text-8xl">
                {count}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </IntroContext.Provider>
  );
}
