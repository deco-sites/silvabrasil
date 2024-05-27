import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  style?: "Outline" | "Ghost";
}

export interface Props {
  /** @format textarea */
  title?: string;
  image1: ImageWidget;
  image2: ImageWidget;
  button1: CTA;
  button2: CTA;
}

export default function ImageWithParagraph({
  title = "Here's an intermediate size heading you can edit",
  image1,
  image2,
  button1,
  button2,
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm">
      <div
        class="flex w-full flex-col lg:flex-row">
        <div class="w-full md:w-1/2 border border-secondary rounded-lg overflow-hidden">
          <span>Sou</span>
          <Image
            width={640}
            height={640}
            class="object-fit z-10"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image1}
            alt={image1}
            decoding="async"
            loading="lazy"
          />
        </div>
        <div class="w-full md:w-1/2 border border-secondary rounded-lg overflow-hidden">
          
<span>Sou</span>
          <Image
            width={640}
            height={640}
            class="object-fit z-10"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image2}
            alt={image2}
            decoding="async"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
