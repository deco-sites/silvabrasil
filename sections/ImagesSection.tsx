import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
}

interface Card {
  type: "Viveirista" | "Comprador";
  imageBg: ImageWidget;
  /** @format rich-text  */
  description?: string;
  /** @format rich-text  */
  topics?: string;
  button?: CTA;
}

export interface Props {
  cards: Card[];
}

export default function ImagesSection({
  cards,
}: Props) {
  return (
    <div id="viveiros" class="flex w-full h-auto flex-col lg:flex-row">
      {cards?.map((card, index) => (
        <div
          key={card.type}
          class={`w-full relative lg:w-1/2 ${
            index === 0 ? "lg:border-r-[3px] border-green-500" : ""
          } px-3 py-10 lg:py-28  lg:px-28`}
        >
          <Image
            class="absolute inset-0 w-full h-full object-cover -z-10"
            width={960}
            height={824}
            src={card.imageBg}
            alt={card.imageBg}
            decoding="async"
            loading="lazy"
          />

          <div class="flex flex-col lg:max-w-[565px] text-slate">
            <div class="flex flex-col mb-16">
              <span class="text-3xl">Sou</span>
              <b class="text-5xl">{card.type}</b>
            </div>

            {card?.description && (
              <div
                class="max-w-[428px] mb-16 text-2xl h-24"
                dangerouslySetInnerHTML={{
                  __html: card.description,
                }}
              />
            )}

            {card?.topics &&
              (
                <ul
                  class="list-disc list-inside mb-8 text-lg h-[152px]"
                  dangerouslySetInnerHTML={{
                    __html: card.topics,
                  }}
                />
              )}
            <a
              id={card.button?.id}
              href={card.button?.href}
              target={card.button?.href.includes("http") ? "_blank" : "_self"}
              class="font-bold text-xl lg:text-2xl max-w-fit bg-slate text-green-900 p-4 lg:p-6 flex justify-center items-center h-auto rounded-xl transform
				  transition duration-700
				  hover:scale-105"
            >
              {card.button?.text}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
