import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

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
    <div class="w-full flex justify-center p-4 lg:p-8">
      <div class="bg-[#FEF5E6] rounded-xl flex flex-col lg:flex-row justify-between items-center px-6 py-8 lg:py-12 gap-6 w-full max-w-screen-lg">
        <div class="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6 text-center lg:text-left">
          <h1 class="text-3xl lg:text-4xl font-bold text-green-900 font-serif">
            <span class="after:content-leafIcon after:inline-block after:w-8">
              Presente
            </span>{" "}
            <Icon id="LeafIcon" />
            onde a restauração acontece no Brasil
          </h1>
          <div class="text-base lg:text-lg text-dark" dangerouslySetInnerHTML={{ __html: description }} />
          <div class="flex justify-center lg:justify-start">
            <a
              href={cta?.href}
              target={cta?.href.includes("http") ? "_blank" : "_self"}
              class="flex font-bold text-base bg-green-900 text-white w-fit px-6 py-[14px] justify-center items-center h-auto rounded-xl transform transition duration-400 opacity-90 hover:opacity-100 hover:scale-105"
            >
              <span>{cta?.text}</span>
            </a>
          </div>
        </div>
        <div class="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
          {mapImage && (
            <Image
              class="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[350px]"
              width={350}
              height={350}
              src={mapImage}
              alt="Mapa do Brasil"
              decoding="async"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
  );
}
