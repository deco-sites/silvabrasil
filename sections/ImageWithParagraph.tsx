import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  style?: "Outline" | "Ghost";
}

export interface Props {
  image1: ImageWidget;
  image2: ImageWidget;
  button1: CTA;
  button2: CTA;
}

export default function ImageWithParagraph({
  image1,
  image2,
  button1,
  button2,
}: Props) {
  return (
      <div class="relative flex w-full h-[332px] md:h-[824px] flex-col lg:flex-row">
        <div class="w-full relative md:w-1/2 p- border border-r-2 border-[#85B549]">
          <span>Sou</span>
          <Image
            class="absolute inset-0 w-full h-full object-cover -z-10"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image1}
            alt={image1}
            decoding="async"
            loading="lazy"
          />
          <a
              key={button1?.id}
              id={button1?.id}
              href={button1?.href}
              target={button1?.href.includes("http") ? "_blank" : "_self"}
              class="font-normal btn btn-primary btn-outline"
            >
              {button1?.text}
            </a>
        </div>
        <div class="w-full relative md:w-1/2 p-">
          <span>Sou</span>
          <Image
            class="absolute inset-0 w-full h-full object-cover -z-10"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image2}
            alt={image2}
            decoding="async"
            loading="lazy"
          />
          <div>
            <a
              key={button2?.id}
              id={button2?.id}
              href={button2?.href}
              target={button2?.href.includes("http") ? "_blank" : "_self"}
              class="font-normal btn btn-primary btn-outline"
            >
              {button2?.text}
            </a>
          </div>
        </div>
      </div>
  );
}
