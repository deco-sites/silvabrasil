import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface CTA {
  href: string;
  text: string;
}

interface Props {
  title: string;
  /** @format rich-text */
  description?: string;
  mapImage: ImageWidget;
  cta: CTA;
}

export default function MapSection(
  { title, description = "my description", mapImage, cta }: Props,
) {
  return (
    <div class="pt-0 pb-14 lg:py-14 lg:container lg:max-w-[88%] lg:mx-auto px-6 flex gap-16 flex-col lg:flex-row">
      <div class="w-full lg:w-1/2">
        <div class="lg:pt-32 lg:pb-12 text-center lg:text-start">
          <h1 class="text-3xl lg:text-5xl font-bold text-green-900 mb-12">
            {title}
          </h1>
          <div
            class="text-xl lg:text-3xl font-bold text-green-600"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>

        <a
          href={cta?.href}
          target={cta?.href.includes("http") ? "_blank" : "_self"}
          class="hidden lg:flex font-bold text-3xl bg-green-900 text-white w-fit py-6 px-[42px] justify-center items-center h-auto rounded-xl transform
			transition duration-700
			hover:scale-105"
        >
          <span>
            {cta?.text}
          </span>
        </a>
      </div>
      <div class="w-full lg:w-1/2 flex flex-col items-center">
        {mapImage && (
          <Image
            width={810}
            height={806}
            src={mapImage}
            alt={mapImage}
            decoding="async"
            loading="lazy"
          />
        )}
        <a
          href={cta?.href}
          target={cta?.href.includes("http") ? "_blank" : "_self"}
          class="flex lg:hidden mt-8 font-bold text-3xl bg-green-900 text-white w-full lg:w-fit py-3 lg:py-6 px-[42px] justify-center items-center h-auto rounded-xl transform
			transition duration-700
			hover:scale-105"
        >
          <span class="text-base lg:text-3xl">
            {cta?.text}
          </span>
        </a>
      </div>
    </div>
  );
}
