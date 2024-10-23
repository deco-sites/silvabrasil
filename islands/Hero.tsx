import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import TextAnimation from "site/islands/TextAnimation.tsx";
import textContent from "site/content/text-lang.ts";
import { useUI } from "site/sdk/useUI.ts";

interface CTA {
  id?: string;
  href: string;
  text: string;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @format rich-text
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  image?: ImageWidget;
  cta?: CTA;
}

export default function HeroFlats({
  image,
  cta,
}: Props) {
  const { languageSwitcher } = useUI();

  return (
    <div class="flex flex-col items-center">
      <div class="relative flex w-full xl:mx-auto h-[83vh] md:h-screen flex-col items-center justify-center text-center ">
        {image && (
          <Image
            width={1079}
            height={484}
            class="absolute inset-0 w-full h-full object-cover -z-10"
            src={image}
            alt={image}
            preload
            loading="eager"
            fetchPriority="high"
          />
        )}
        <div class="container mt-14 lg:mt-0 font-serif flex flex-col items-center justify-center px-6 lg:px-16 xl:px-0 mb-9 lg:mb-28">
          <div
            class="text-green-100 text-4xl lg:text-[64px] font-bold leading-10 lg:leading-[72px] mb-2"
          >
            {textContent[languageSwitcher.value].mainBanner.static}
          </div>
          <TextAnimation />
        </div>
        <a
          href={cta?.href}
          target={cta?.href.includes("http") ? "_blank" : "_self"}
          class="cursor-pointer lg:hidden font-sans font-bold text-base bg-slate text-dark
			px-6 py-[14px] flex justify-center items-center w-fit rounded-lg transform
			transition duration-400
			opacity-90 hover:opacity-100"
        >
          <span>{textContent[languageSwitcher.value].menu.menuCta}</span>
        </a>
      </div>
    </div>
  );
}
