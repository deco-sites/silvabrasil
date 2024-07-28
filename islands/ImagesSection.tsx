import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;

  href: string;

  text: string;
}

interface Card {
  type: "Viveiristas" | "Compradores de mudas";

  imageBg: ImageWidget;

  /** @format rich-text */

  description?: string;

  /** @format rich-text */

  topics?: string;

  button?: CTA;
}

export interface Props {
  /** @format rich-text */

  title: string;

  cards: Card[];
}

export default function ImagesSection({
  title = "Titulo da sessão",

  cards,
}: Props) {
  return (
    <div class="w-full h-auto container lg:px-16 xl:px-0">
      <div class="bg-green-900 md:rounded-2xl md:p-16 flex items-center flex-col md:-mt-28 lg:-mt-36 xl:-mt-48 md:gap-12">
        <div
          class="w-full flex justify-center items-center text-white font-sans text-xl text-center max-w-[772px] px-6 py-9 md:py-0"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {/* Mobile */}

        <div class="flex w-full flex-col lg:flex-row justify-center pb-6 gap-3 md:gap-6">
          {cards?.map((card) => (
            <div
              id={`${card.button?.id}`}
              key={card.type}
              class="flex flex-col w-full lg:max-w-[542px]"
            >
              <div class="relative flex flex-col h-[260px]">
                <Image
                  class="absolute size-full inset-0 object-cover z-10 rounded-t-2xl"
                  width={800}
                  height={500}
                  src={card.imageBg}
                  alt={card.imageBg}
                  decoding="async"
                  loading="lazy"
                />

                <div class="absolute inset-0 object-cover rounded-t-2xl bg-gradient-to-r from-slate via-slate to-transparent opacity-80 z-20 size-full" />

                <div class="flex z-30 flex-col text-green-900 p-6 h-full">
                  <div class={`max-w-[256px] mb-auto flex flex-col`}>
                    <span class="text-2xl font-serif">Para</span>

                    <b class="text-4xl font-serif leading-9">{card.type}</b>
                  </div>

                  <div
                    class="font-sans text-base text-dark max-w-[356px] leading-normal"
                    dangerouslySetInnerHTML={{
                      __html: card.description || "",
                    }}
                  />
                </div>
              </div>

              <div class="w-full flex flex-col bg-slate rounded-b-2xl px-6 py-7 h-[260px]">
                <ul
                  class="list-disc list-inside mb-auto ml-4 text-base text-dark"
                  dangerouslySetInnerHTML={{
                    __html: card.topics || "",
                  }}
                />

                <a
                  id={card.button?.id}
                  href={card.button?.href}
                  target={
                    card.button?.href.includes("http") ? "_blank" : "_self"
                  }
                  class="font-bold text-base w-fit text-slate bg-green-900 px-6 py-4 flex rounded-lg transform

transition duration-400 opacity-90 hover:opacity-100 mt-auto"
                >
                  {card.button?.text}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop */}

        {/* <div class="hidden md:flex w-full flex-row gap-6 max-lg:flex-wrap">

{cards?.map((card) => (

<div

id={`${card.button?.id}`}

key={card.type}

class="columns-5 w-full relative p-12 pt-6 mb-3 flex flex-col"

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

<span class="text-2xl">Para</span>

<b class="text-5xl">{card.type}</b>

</div>

{card?.description && (

<div

class="mb-6 text-base h-24 text-dark"

dangerouslySetInnerHTML={{ __html: card.description }}

/>

)}

{card?.topics && (

<ul

class="list-disc list-inside mb-10 text-base text-dark"

dangerouslySetInnerHTML={{ __html: card.topics }}

/>

)}

<a

id={card.button?.id}

href={card.button?.href}

target={

card.button?.href.includes("http") ? "_blank" : "_self"

}

class="font-bold text-base w-fit text-slate bg-green-900 px-6 py-4 flex rounded-lg transform transition duration-400 opacity-90 hover:opacity-100 mt-auto"

>

{card.button?.text}

</a>

</div>

</div>

))}

</div> */}
      </div>
    </div>
  );
}
