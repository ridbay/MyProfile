import { motion, useReducedMotion } from 'framer-motion';

interface FloatingArtProps {
  primary: string;
  secondary?: string;
  className?: string;
}

// Two layered 3D renders that bob gently, with a soft brand-coloured glow behind them.
export default function FloatingArt({ primary, secondary, className }: FloatingArtProps) {
  const reduceMotion = useReducedMotion();

  const float = (distance: number, duration: number, rotate: number) =>
    reduceMotion
      ? {}
      : {
          animate: { y: [0, -distance, 0], rotate: [0, rotate, 0] },
          transition: { duration, repeat: Infinity, ease: 'easeInOut' as const },
        };

  return (
    <div className={`aspect-square pointer-events-none select-none ${className ?? 'relative'}`} aria-hidden="true">
      <div
        className="absolute inset-[12%] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, #B600A8 0%, #7621B0 45%, transparent 70%)' }}
      />
      <motion.img
        src={primary}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.55)]"
        {...float(14, 5, 4)}
      />
      {secondary && (
        <motion.img
          src={secondary}
          alt=""
          loading="lazy"
          className="absolute -bottom-[6%] -left-[14%] w-[52%] h-[52%] object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.55)]"
          {...float(10, 4, -6)}
        />
      )}
    </div>
  );
}
