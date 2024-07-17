import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
interface CTA {
  href: string;
  text: string;
}
interface Props {
  title: string;
  image?: ImageWidget;
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
      class="w-full p-6 flex flex-row items-center container bg-slate rounded-2xl gap-10 mb-32"
    >
      <div class="size-full flex max-w-[50%]">
        <Image
          class="rounded-2xl"
          width={533}
          height={400}
          src={image || ""}
          alt={image}
          decoding="async"
          loading="lazy"
        />
      </div>

      <div class="flex flex-col items-start max-w-[50%]">
        <h2 class="text-5xl font-serif text-green-900 mb-2">{title}</h2>
        <div
          class="mb-5 font-regular text-xl text-dark font-sans"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        {cta && (
          <a
            href={cta?.href}
            target="_blank"
            class="font-bold text-base bg-green-900 text-white px-7 py-2 lg:py-5 lg:px-12 flex justify-center items-center h-auto rounded-xl transform
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
