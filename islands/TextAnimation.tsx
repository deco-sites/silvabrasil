import { animate, stagger } from "motion";
import { useEffect, useRef } from "preact/hooks";

// Words array
const words = [
  "implementadores",
  "viveiristas",
  "sistemas agroflorestais",
  "desenvolvedores",
  "compensação ambiental",
  "implementadores",
  "viveiristas",
];

// Animation Component
const TextAnimation = () => {
  const currentWord = 0;
  const wordRef = useRef<HTMLElement | null>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const animateWord = () => {
      if (wordRef.current) {
        animate(wordRef.current, { opacity: [0, 1], y: [20, 0] }, {
          duration: 1,
        })
          .finished.then(() => {
            return animate(wordRef.current!, { opacity: [1, 0], y: [0, -20] }, {
              duration: 1,
              delay: stagger(0.2),
            }).finished;
          })
          .then(() => {
            indexRef.current = (indexRef.current + 1) % words.length;
            if (wordRef.current) {
              wordRef.current.textContent = words[indexRef.current];
            }
            animateWord();
          });
      }
    };

    animateWord();
  }, []);

  return (
    <>
      <span
        ref={wordRef}
        class="lg:text-[64px] text-2xl font-bold text-white p-[14px] lg:p-6 -mt-2
		 lg:-mt-8"
      >
        {words[currentWord]}.
      </span>
    </>
  );
};

export default TextAnimation;
