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
    <div class="py-16 lg:container md:max-w-7xl lg:mx-auto mx-4">
      <div class="py-16 px-28 bg-green-900 rounded-2xl text-slate flex flex-col items-center">
        <div class="border-2 border-slate rounded-[106px] px-7 py-2 mb-10">
          <h2 class="text-4xl">{title}</h2>
        </div>
        <div
          class="mb-16 text-center font-regular text-[30px]"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        {cta && (
          <a
            href={cta?.href}
            target="_blank"
            class="font-bold text-2xl bg-green-500 text-white py-5 px-12 flex justify-center items-center h-auto rounded-xl transform
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