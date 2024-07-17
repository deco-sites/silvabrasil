import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
interface CTA {
  href: string;
  text: string;
}
interface Props {
  title: string;
  image: ImageWidget;
  /**
   * @format rich-text
   */
  description?: string;
  cta: CTA;
}

export default function Section({
  title = "Work with us",
  image,
  description = "Description text",
  cta,
}: Props) {
  return (
    <div
      id="work-with-us"
      class="py-16 lg:container lg:max-w-[70%] lg:mx-auto px-3"
    >
      <Image
        class="absolute size-full inset-0 object-cover z-10 rounded-2xl"
        width={533}
        height={400}
        src={image}
        alt={image}
        decoding="async"
        loading="lazy"
      />
      <div class="py-10 lg:py-16 px-4 lg:px-28 bg-slate rounded-2xl text-green-900 flex flex-col items-center">
        <div class="mb-10 whitespace-nowrap">
          <h2 class="text-2xl lg:text-4xl font-serif">{title}</h2>
        </div>
        <div
          class="mb-8 lg:mb-16 text-center font-regular text-xl lg:text-2xl"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        {cta && (
          <a
            href={cta?.href}
            target="_blank"
            class="font-bold text-xl lg:text-2xl bg-green-900 text-white px-7 py-2 lg:py-5 lg:px-12 flex justify-center items-center h-auto rounded-xl transform
			transition duration-400
			hover:scale-105"
          >
            {cta?.text}
          </a>
        )}
      </div>
    </div>
  );
}
