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
    <div class="pt-28 pb-14 lg:container md:max-w-[88%] lg:mx-auto mx-4 flex gap-16">
      <div class="w-1/2">
        <div class="pt-32 pb-12">
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
          class="font-bold text-3xl bg-green-900 text-white w-fit py-6 px-[42px] flex justify-center items-center h-auto rounded-xl transform
			transition duration-700
			hover:scale-105"
        >
          <span>
            {cta?.text}
          </span>
        </a>
      </div>
      <div class="w-1/2">
        {mapImage && (
          <Image
            width={540}
            height={640}
            class="w-full h-full"
            src={mapImage}
            alt={mapImage}
            decoding="async"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
