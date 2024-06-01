import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
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
  description?: string;
  image?: ImageWidget;
  cta?: CTA;
}

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description = "Description text",
  image,
  cta,
}: Props) {
  //   const [currentWord, setCurrentWord] = useState(0);
  //   const words = ["Word1", "Word2", "Word3"];

  return (
    <div class="flex flex-col items-center gap-8">
      <div class="relative flex w-full xl:mx-auto py-20 mx-5 md:mx-10 flex-col items-center justify-center text-center lg:py-36 gap-12 md:gap-20">
        {image && (
          <Image
            width={640}
            height={742}
            class="absolute inset-0 w-full h-full object-cover -z-10"
            src={image}
            alt={image}
            decoding="async"
            loading="lazy"
          />
        )}
        <div class="text-green-900 lg:container md:max-w-full lg:mx-auto mx-4 lg:gap-12 gap-4 flex flex-col items-center justify-center">
          <div
            class="inline-block lg:text-[70px] text-4xl leading-none font-bold"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          >
          </div>
          <div
            class="text-base md:text-[32px] leading-[150%]"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          >
          </div>
          <a
            href={cta?.href}
            target={cta?.href.includes("http") ? "_blank" : "_self"}
            class="font-bold text-2xl bg-green-900 text-white py-6 px-[42px] flex justify-center items-center h-auto rounded-xl transform
			transition duration-700
			hover:scale-105"
          >
            <span>
              {cta?.text}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
