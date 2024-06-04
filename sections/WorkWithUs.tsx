interface CTA {
  href: string;
  text: string;
}
interface Props {
  title: string;
  /**
   * @format rich-text
   */
  description?: string;
  cta: CTA;
}

export default function Section(
  { title = "Work with us", description = "Description text", cta }: Props,
) {
  return (
    <div
      id="work-with-us"
      class="py-16 lg:container lg:max-w-[88%] lg:mx-auto px-3"
    >
      <div class="py-10 lg:py-16 px-4 lg:px-28 bg-green-900 rounded-2xl text-slate flex flex-col items-center">
        <div class="border-2 border-slate rounded-[106px] px-7 py-2 mb-10 whitespace-nowrap">
          <h2 class="text-2xl lg:text-4xl">{title}</h2>
        </div>
        <div
          class="mb-8 lg:mb-16 text-center font-regular text-xl lg:text-3xl"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        {cta && (
          <a
            href={cta?.href}
            target="_blank"
            class="font-bold text-xl lg:text-2xl bg-green-500 text-white px-7 py-2 lg:py-5 lg:px-12 flex justify-center items-center h-auto rounded-xl transform
			transition duration-700
			hover:scale-105"
          >
            {cta?.text}
          </a>
        )}
      </div>
    </div>
  );
}
