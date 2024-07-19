import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
interface CTA {
  href: string;
  text: string;
}
interface Props {
  title: string;
  subTitle: string;
  image?: ImageWidget;
  /**
   * @format rich-text
   */
  description?: string;
  cta: CTA;
}

export default function Section({
  title = "Work with us",
  subTitle= "sub title text",
  image,
  description = "Description text",
  cta,
}: Props) {
  return (
    <div
      id="work-with-us"
      class="w-full px-6 py-12 flex flex-col lg:flex-row items-center container bg-slate md:rounded-2xl gap-10 mb-16"
    >
      <div class="size-full hidden lg:flex max-w-[50%]">
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

      <div class="flex flex-col items-start lg:max-w-[50%]">
        <h2 class="text-5xl font-serif text-green-900 mb-2">{title}</h2>
        <h3 class="text-xl font-sans text-dark mb-9">{subTitle}</h3>
		<div class="size-full lg:hidden flex mb-6">
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
            class="font-bold text-base bg-green-900 text-white px-6 py-4 lg:py-5 lg:px-12 flex justify-center items-center h-auto rounded-xl transform
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
