import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import textContent from "site/content/text-lang.ts";
import { useUI } from "site/sdk/useUI.ts";

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
  const { languageSwitcher } = useUI();
  return (
    <div class="w-full container lg:px-16 xl:px-0 flex justify-center md:mb-16">
      <div class="bg-[#FEF5E6] md:rounded-xl flex flex-col lg:flex-row  items-center px-6 lg:px-28 py-12 gap-6 w-full">
        <div class="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6 items-start">
          <div class="text-4xl text-green-900 font-serif max-w-[312px] lg:max-w-[422px]">
            <span
            //   class="inline-flex"
              dangerouslySetInnerHTML={{
                __html: textContent[languageSwitcher.value].mapSection.title
              }}
            />
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
            class="text-base text-dark lg:max-w-[410px] mb-9"
            dangerouslySetInnerHTML={{ __html: textContent[languageSwitcher.value].mapSection.description }}
          />
          <a
            href={cta?.href}
            target={cta?.href.includes("http") ? "_blank" : "_self"}
            class="flex font-bold text-base bg-green-900 text-white w-fit px-6 py-[14px] justify-center items-center h-auto rounded-xl transform transition duration-400
			opacity-90 hover:opacity-100"
          >
            <span class="font-bold">{textContent[languageSwitcher.value].mapSection.cta}</span>
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
