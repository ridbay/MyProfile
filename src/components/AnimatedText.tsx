import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef, type CSSProperties } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span style={{ position: 'relative', display: 'inline-block', whiteSpace: 'pre' }}>
      <span style={{ visibility: 'hidden' }}>{char}</span>
      <motion.span style={{ opacity, position: 'absolute', left: 0, top: 0 }}>
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  // Group characters by word so lines only break between words.
  const words = text.split(' ');
  const total = text.length;
  let index = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, w) => {
        const chars = w < words.length - 1 ? `${word} ` : word;
        return (
          <span key={w} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {chars.split('').map((char) => {
              const start = index / total;
              const end = start + 1 / total;
              index += 1;
              return <Char key={index} char={char} progress={scrollYProgress} range={[start, end]} />;
            })}
          </span>
        );
      })}
    </p>
  );
}
