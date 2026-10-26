import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface Portrait {
  src: string;
  alt: string;
  // A full photo (with its background) rather than a cut-out: shown as a rounded card.
  framed?: boolean;
}

interface PortraitSwitcherProps {
  portraits: Portrait[];
  interval?: number;
}

// Cross-fades between portraits on a timer; click or tap swaps immediately, hover pauses.
export default function PortraitSwitcher({ portraits, interval = 2000 }: PortraitSwitcherProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const next = () => setIndex((i) => (i + 1) % portraits.length);

  useEffect(() => {
    if (paused || reduceMotion || portraits.length < 2) return;
    const id = window.setTimeout(next, interval);
    return () => window.clearTimeout(id);
    // Restarting the timer on every index change gives a manual swap a full interval before the next auto swap.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused, reduceMotion, interval, portraits.length]);

  useEffect(() => {
    portraits.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, [portraits]);

  const current = portraits[index];

  return (
    <button
      type="button"
      onClick={next}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Show another photo of Ridwan"
      className="relative block w-full aspect-[4/5] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B600A8] rounded-3xl"
    >
      <div
        className="absolute inset-x-[8%] top-[18%] bottom-0 rounded-full blur-3xl opacity-35"
        style={{ background: 'radial-gradient(ellipse at center, #B600A8 0%, #7621B0 45%, transparent 72%)' }}
        aria-hidden="true"
      />
      <AnimatePresence initial={false}>
        <motion.img
          key={current.src}
          src={current.src}
          alt={current.alt}
          draggable={false}
          className={
            current.framed
              ? 'absolute inset-x-[7%] top-[3%] bottom-[5%] w-[86%] h-[92%] object-cover object-top rounded-[28px] sm:rounded-[36px] border-2 border-[#D7E2EA]/80 shadow-[0_30px_60px_rgba(0,0,0,0.6)]'
              : 'absolute inset-0 w-full h-full object-contain object-bottom'
          }
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ transformOrigin: '50% 100%' }}
        />
      </AnimatePresence>
    </button>
  );
}
