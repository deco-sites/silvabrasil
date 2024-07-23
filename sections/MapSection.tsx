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

export default function MapSection({
  title,
  description = "my description",
  mapImage,
  cta,
}: Props) {
  return (
    <div class="w-full flex flex-col lg:flex-row items-center">
      <div class="bg-slate lg:rounded-lg flex flex-col justify-between px-6 py-12 gap-4 items-start">
        <div class="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 class="text-4xl font-bold text-green-900 font-serif">
            <span class="after:content-leafIcon after:inline-block after:w-8">
              Presente
            </span>{" "}
            onde a restauração acontece no Brasil
          </h1>
          {mapImage && (
            <Image
              class="block lg:hidden"
              width={810}
              height={806}
              src={mapImage}
              alt={mapImage}
              decoding="async"
              loading="lazy"
            />
          )}
          <div
            class="text-base lg:text-xl text-dark text-start"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>
        <div class="w-full lg:w-1/2 flex flex-col">
          {mapImage && (
            <Image
              class="hidden lg:block"
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
            class="flex font-bold text-base bg-green-900 text-white w-fit px-6 py-[14px] justify-center items-center h-auto rounded-xl transform
			transition duration-400
			opacity-90 hover:opacity-100 "
          >
            <span>{cta?.text}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
