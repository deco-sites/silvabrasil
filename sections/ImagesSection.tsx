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
  /** @format rich-text  */
  title: string;
  cards: Card[];
}

export default function ImagesSection({
  title = "Titulo da sessão",
  cards,
}: Props) {
  return (
    <div id="viveiros" class="w-full h-auto container">
      <div class="bg-green-900 rounded-2xl py-16  px-16	flex items-center flex-col -mt-48 gap-12">
        <div
          class="w-full flex justify-center items-center text-white font-sans text-xl text-center max-w-[772px]"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div class="w-full flex">
          {cards?.map((card) => (
            <div
              key={card.type}
              class="flex columns-5 w-full relative first:mr-6 p-12 pt-6"
            >
              <Image
                class="absolute size-full inset-0 object-cover z-10 rounded-2xl"
                width={960}
                height={824}
                src={card.imageBg}
                alt={card.imageBg}
                decoding="async"
                loading="lazy"
              />

              <div class="absolute inset-0 object-cover rounded-2xl bg-gradient-to-r from-slate via-slate to-transparent opacity-80 z-20 size-full" />

              <div class="w-full flex flex-col z-30 max-w-[300px]">
                <div class="flex flex-col mb-8 font-serif text-green-900">
                  <span class="text-2xl lg:text-2xl">Para</span>
                  <b class="text-5xl">{card.type}</b>
                </div>

                {card?.description && (
                  <div
                    class="mb-6 text-base  h-24 text-dark"
                    dangerouslySetInnerHTML={{
                      __html: card.description,
                    }}
                  />
                )}

                {card?.topics && (
                  <ul
                    class="list-disc list-inside mb-10 text-base text-dark"
                    dangerouslySetInnerHTML={{
                      __html: card.topics,
                    }}
                  />
                )}
                <a
                  id={card.button?.id}
                  href={card.button?.href}
                  target={
                    card.button?.href.includes("http") ? "_blank" : "_self"
                  }
                  class="font-bold text-base w-fit text-slate bg-green-900 px-6 py-4 flex  rounded-lg transform
				transition duration-400	opacity-90 hover:opacity-100 mt-auto"
                >
                  {card.button?.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
