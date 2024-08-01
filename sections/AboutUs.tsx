import { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

interface Props {
  title: string;
  subTitle: string;
  description?: string; // Use the rich-text format
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
      class="relative lg:mt-32 lg:mb-16 my-12 w-full flex justify-center"
    >
      <div class="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="relative lg:col-span-5">
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
            <img
              src={image || ""}
              alt="Muda Silva"
              class="max-w-full lg:max-w-none"
            />
          </Picture>
        </div>

        <div class="lg:col-span-7 w-full flex justify-center">
          <div class="flex flex-col items-start max-w-[422px] max-lg:px-6">
            <h2 class="text-4xl lg:text-5xl text-green-900 mb-2 font-serif">
              {title}
            </h2>
            <span class="text-xl text-dark mb-9">{subTitle}</span>
            <div
              class="font-regular text-base w-full"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
