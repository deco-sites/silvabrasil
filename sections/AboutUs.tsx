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
      class="lg:mt-32 lg:mb-16 my-12 w-full flex flex-col lg:flex-row items-center justify-center"
    >
      <div class="flex justify-center lg:justify-end lg:w-1/2 mb-8 lg:mb-0">
        <Picture class="w-full max-w-xs lg:max-w-lg">
          <Source
            media="(max-width: 768px)"
            src={image || ""}
            width={245}
            height={213}
          />
          <Source
            media="(min-width: 768px)"
            src={image || ""}
            width={667}
            height={581}
          />
          <img src={image || ""} alt="Muda Silva" class="w-full" />
        </Picture>
      </div>

      <div class="flex flex-col items-center lg:items-start lg:w-1/2 p-6 lg:p-0 lg:pl-12">
        <h2 class="text-4xl lg:text-5xl font-bold text-green-900 mb-2 font-serif">
          {title}
        </h2>
        <span class="text-xl text-dark mb-9">{subTitle}</span>

        <div
          class="font-regular text-base lg:text-xl w-full max-w-lg"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </div>
  );
}
