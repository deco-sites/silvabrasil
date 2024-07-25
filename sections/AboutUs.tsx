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
      class="lg:mt-32 lg:mb-16 my-12 w-full flex flex-col lg:flex-row items-center justify-between "
    >
      <div class="w-full  lg:w-2/3 mb-9 lg:mb-0">
        <Picture>
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
          <img src={image || ""} alt="Muda Silva" class="max-w-[667px]" />
        </Picture>
      </div>

      <div class="w-full flex justify-end lg:mr-48 2xl:mr-96">
        <div class="w-full  px-6 lg:px-0 lg:max-w-[422px] flex flex-col items-start">
          <h2 class="text-4xl lg:text-5xl text-green-900 mb-2 font-serif">
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
    </div>
  );
}
