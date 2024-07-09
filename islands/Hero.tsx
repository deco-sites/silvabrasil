import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import TextAnimation from "site/islands/TextAnimation.tsx";

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
  title = "Click here to tweak this text however you want.",
  image,
  cta,
}: Props) {
  return (
    <div class="flex flex-col items-center gap-8">
      <div class="relative flex w-full xl:mx-auto py-24 flex-col items-center justify-center text-center lg:py-36 gap-12 lg:gap-20">
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
        <div class="container font-['Rufina'] px-3 lg:px-0 lg:max-w-7xl xl:max-w-[70%] mx-auto lg:gap-12 gap-4 flex flex-col items-center justify-center">
          <div
            class="text-[#CEE1B6] lg:leading-[5rem] font-bold lg:text-[64px] text-2xl max-w-[1360px]"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <TextAnimation />

          <a
            href={cta?.href}
            target={cta?.href.includes("http") ? "_blank" : "_self"}
            class="block lg:hidden font-bold text-2xl bg-green-900 text-white
			px-[25px] py-[14px] lg:px-[42px] lg:py-6 flex justify-center items-center w-fit rounded-xl transform
			transition duration-700
			hover:scale-105"
          >
            <span>{cta?.text}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
