import { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

interface Props {
  title: string;
  subTitle: string;
  /**
   * @format rich-text
   */
  description?: string;
  image: ImageWidget;
}

export default function AboutUsSection({
  title = "About us",
  subTitle = "Subtitle text",
  description = "Description text",
  image,
}: Props) {
  return (
    <div
      id="about-us"
      class="py-16 flex w-full justify-between pr-10"
    >
      <div
        class="scale-x-[-1]

		  max-sm:w-[65%] max-md:w-[67%] md:w-[33%]"
      >
        <Picture>
          <Source
            media="(max-width: 768px)"
            src={image || ""}
            width={332}
            height={240}
          />
          <Source
            media="(min-width: 768px)"
            src={image || ""}
            width={714}
            height={705}
          />
          <img src={image || ""} alt="Muda Silva" />
        </Picture>
      </div>

      <div class="flex flex-col justify-center lg:justify-between mb-8 max-w-[422px]">
        <h2 class="text-xl lg:text-2xl font-bold text-green-900 mb-4 whitespace-nowrap w-fit">
          {title}
        </h2>
        <span class="text-black text-lg">{subTitle}</span>

        <div
          class="relative font-regular text-base lg:text-xl w-full md:max-w-[60%] lg:max-w-[600px] xl:max-w-[680px]"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </div>
  );
}
