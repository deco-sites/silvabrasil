import { useEffect, useRef, useState } from 'preact/hooks';

const words = [
  "implementadores",
  "viveiristas",
  "sistemas agroflorestais",
  "desenvolvedores",
  "compensação ambiental",
  "implementadores",
  "viveiristas",
];

const TextAnimation = () => {
  const [displayText, setDisplayText] = useState('');
  const indexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    const typeWriterEffect = () => {
      const word = words[indexRef.current];
      const isDeleting = isDeletingRef.current;

      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
        if (displayText.length === 0) {
          isDeletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % words.length;
        }
      } else {
        setDisplayText(prev => word.slice(0, prev.length + 1));
        if (displayText === word) {
          isDeletingRef.current = true;
        }
      }
    };

    const intervalId = setInterval(typeWriterEffect, 150);

    return () => clearInterval(intervalId);
  }, [displayText]);

  return (
    <div class="h-20">
      {/* <style>{blinkKeyframes}</style> */}
      <span class="blink text-4xl font-bold lg:text-7xl text-white">
        {displayText}
      </span>
    </div>
  );
};

export default TextAnimation;
