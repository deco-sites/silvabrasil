import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @format rich-text
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  image?: ImageWidget;
  cta?: CTA[];
}



export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description =
    "Description text",image,
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: Props) {
  return (
      <div class="flex flex-col items-center gap-8">
        <div
          class="relative flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 flex-col items-center justify-center text-center lg:py-36 gap-12 md:gap-20 items-center"
        >
          {image && (
            <Image
              width={640}
              class="absolute inset-0 w-full h-full object-cover -z-10"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
          )}
          <div
            class="mx-6 text-green-900 lg:mx-auto lg:w-full space-y-4 gap-4
              flex flex-col items-center justify-center"
          >
            <div
              class="inline-block lg:text-[70px] text-4xl leading-none font-bold"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            >
            </div>
            <div
              class="text-base md:text-[32px] leading-[150%]"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            >
            </div>
            <div class="flex items-center justify-center gap-3">
              {cta?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`font-normal btn btn-primary ${
                    item.outline && "btn-outline"
                  }`}
                >
                  {item?.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}
