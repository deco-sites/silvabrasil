import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import textContent from "site/content/text-lang.ts";
import { useUI } from "site/sdk/useUI.ts";
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
  image,
  cta,
}: Props) {
  const { languageSwitcher } = useUI();

  return (
    <div class="container lg:px-16 xl:px-0">
      <div
        id="work-with-us"
        class="w-full px-6 py-12 flex flex-col lg:flex-row items-center bg-slate md:rounded-2xl gap-10 mb-16"
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
          <h2 class="text-4xl lg:text-5xl font-serif text-green-900 mb-[18px]">
            {textContent[languageSwitcher.value].workWithUsSection.title}
          </h2>
          <h3 class="text-xl font-sans text-dark mb-9">
            {textContent[languageSwitcher.value].workWithUsSection.subtitle}
          </h3>
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
            class="mb-5 font-regular text-base text-dark font-sans"
            dangerouslySetInnerHTML={{
              __html: textContent[languageSwitcher.value].workWithUsSection.description,
            }}
          />
          <a
            href={cta?.href}
            target="_blank"
            class="font-bold text-base bg-green-900 text-white px-6 py-4 lg:py-5 lg:px-12 flex justify-center items-center h-auto rounded-xl transform
              transition duration-400 opacity-90 hover:opacity-100"
          >
            {textContent[languageSwitcher.value].workWithUsSection.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
