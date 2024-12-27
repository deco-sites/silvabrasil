import type { JSX } from "preact";
import Icon from "site/components/ui/Icon.tsx";
import { useUI } from "site/sdk/useUI.ts";
import textContent from "site/content/text-lang.ts";

interface CTA {
  href: string;
  text: string;
}

interface Props {
  title: string;
  subTitle: string;
  /** @format rich-text */
  description?: string;
  cta: CTA;
}

export default function TalkWithUsSection({
  cta,
}: Props) {
  const { languageSwitcher } = useUI();

  return (
    <div class="container w-full lg:px-16 xl:px-0">
      <div
        id="talk-with-us"
        class="size-full flex flex-col lg:flex-row bg-green-900 lg:bg-opacity-90 md:rounded-xl"
      >
        <div class="w-full h-auto lg:px-28 pt-9 lg:py-[92px] bg-green-900 md:rounded-xl px-6 mb-9 lg:mb-0">
          <div class="h-full justify-between flex flex-col items-start text-left">
            <div class="mb-6 lg:max-w-[407px]">
              <h2 class="text-4xl lg:text-5xl font-bold text-slate mb-5 font-serif">
                {textContent[languageSwitcher.value].contactSection.title}
              </h2>
              <h3 class="text-xl text-white mb-6">{textContent[languageSwitcher.value].contactSection.subtitle}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: `<span class="text-white text-left text-base">${textContent[languageSwitcher.value].contactSection.text}</span>`,
                }}
              ></p>
            </div>
            <a
              href={cta?.href}
              target={cta?.href.includes("http") ? "_blank" : "_self"}
              class="inline-flex items-center justify-center font-bold text-base bg-green-500 text-white py-4 px-6 rounded-lg transform transition duration-400
			opacity-90 hover:opacity-100"
            >
              <Icon id="WhatsApp" width={14} height={16} class="mr-2" />
              {textContent[languageSwitcher.value].contactSection.mobileButton}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
