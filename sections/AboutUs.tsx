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
      class="lg:mt-32 lg:mb-16 my-12 w-full flex items-center flex-col lg:flex-row left-0"
    >
      <Picture class="-ml-48">
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
        <img src={image || ""} alt="Muda Silva" />
      </Picture>

      <div class="flex flex-col max-w-[422px] container p-6 lg:p-0">
        <h2 class="text-4xl lg:text-5xl font-bold text-green-900 mb-2 whitespace-nowrap w-fit font-serif">
          {title}
        </h2>
        <span class="text-xl text-dark mb-9">{subTitle}</span>

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
