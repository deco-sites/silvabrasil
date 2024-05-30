import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface socialCTA {
  network: "Instagram" | "Linkedin";
  href: string;
}

interface Props {
  title: string;
  /** @format rich-text */
  description?: string;
  mapImage: ImageWidget;
}

export default function MapSection(
  { title, description = "my description", mapImage }: Props,
) {
  return (
    <div class="pb-14 lg:container md:max-w-7xl lg:mx-auto mx-4">
      <div class="relative pt-32 pb-16">
        <h1>{title}</h1>
        <div
          class="lg:text-[35px] text-xl font-bold"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
      <div>
        {mapImage && (
          <Image
            width={640}
            height={742}
            class="absolute inset-0 w-full h-full object-cover -z-10"
            src={mapImage}
            alt={mapImage}
            decoding="async"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
