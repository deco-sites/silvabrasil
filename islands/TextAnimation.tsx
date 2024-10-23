import { useEffect, useRef, useState } from "preact/hooks";
import textContent from "site/content/text-lang.ts";
import { useUI } from "site/sdk/useUI.ts";

const TextAnimation = () => {
  const { languageSwitcher } = useUI();
  const [displayText, setDisplayText] = useState("");
  const [delayActive, setDelayActive] = useState(false);
  const indexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    const typeWriterEffect = () => {
      const word = textContent[languageSwitcher.value].mainBanner.animate[indexRef.current];
      const isDeleting = isDeletingRef.current;

      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText.length === 0) {
          isDeletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % textContent[languageSwitcher.value].mainBanner.animate.length;
          setDelayActive(false);
        }
      } else {
        setDisplayText((prev) => word.slice(0, prev.length + 1));
        if (displayText === word) {
          isDeletingRef.current = true;
          setDelayActive(true);
        }
      }
    };

    if (delayActive) {
      const delayTimeout = setTimeout(() => {
        setDelayActive(false);
      }, 2000);
      return () => clearTimeout(delayTimeout);
    }

    const intervalId = setInterval(typeWriterEffect, 100);

    return () => clearInterval(intervalId);
  }, [displayText, delayActive]);

  return (
    <div class="h-20">
      <span class="blink text-4xl font-bold lg:text-7xl text-white leading-10 lg:leading-[72px]">
        {displayText}
      </span>
    </div>
  );
};

export default TextAnimation;
