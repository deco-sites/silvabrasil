import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

interface CTA {
  href: string;
  text: string;
}

interface Props {
  /** @format rich-text */
  description?: string;
  mapImage: ImageWidget;
  cta: CTA;
}

export default function MapSection({
  description = "my description",
  mapImage,
  cta,
}: Props) {
  return (
    <div class="w-full container lg:px-16 xl:px-0 flex justify-center md:mb-16">
      <div class="bg-[#FEF5E6] md:rounded-xl flex flex-col lg:flex-row  items-center px-6 lg:px-28 py-12 gap-6 w-full">
        <div class="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6 items-start">
          <div class="text-4xl text-green-900 font-serif max-w-[312px] lg:max-w-[422px]">
            <p class="inline-flex">
              Presente
              <Icon width={39} height={54} id="LeafIcon" class="-mt-5 -ml-2 -mr-2" />
			  onde a
            </p>
            <p> restauração <br/> acontece no Brasil</p>
          </div>

          {/* Mobile Map */}

          <div class="w-full flex flex-col lg:hidden justify-center items-start lg:items-center">
            {mapImage && (
              <Image
                width={350}
                height={350}
                src={mapImage}
                alt="Mapa do Brasil"
                decoding="async"
                loading="lazy"
              />
            )}
          </div>
          <div
            class="text-base lg:text-lg text-dark lg:max-w-[410px]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <a
            href={cta?.href}
            target={cta?.href.includes("http") ? "_blank" : "_self"}
            class="flex font-bold text-base bg-green-900 text-white w-fit px-6 py-[14px] justify-center items-center h-auto rounded-xl transform transition duration-400 opacity-90 hover:opacity-100 hover:scale-105"
          >
            <span>{cta?.text}</span>
          </a>
        </div>

        {/* Desktop Map */}

        <div class="hidden lg:flex w-1/2 justify-end items-center">
          {mapImage && (
            <Image
              width={533}
              height={532}
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
