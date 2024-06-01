export interface Question {
  title: string;
  /** @format rich-text */
  answer: string;
}

export interface Props {
  title?: string;
  description?: string;
  questions?: Question[];
}

export default function FAQ({
  title = "FAQs",
  description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  questions = [
    {
      title: "Question #1 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
  ],
}: Props) {
  return (
    <div class="lg:container md:max-w-[88%] lg:mx-auto mx-4 text-sm py-12 lg:py-28">
      <div class="flex flex-col gap-10">
        <div class="flex justify-between items-center text-green-900">
          <p class="text-5xl font-bold">
            {title}
          </p>
          <p class="text-xl lg:max-w-[462px]">
            {description}
          </p>
        </div>

        <div class="flex-auto border-2 rounded-lg border-green-900">
          {questions?.map((question) => (
            <details class="[&:not(:last-child)]:border-b-2 group border-green-900 text-green-900">
              <summary class="text-lg cursor-pointer py-6 px-12 flex items-center">
                <span class="flex-auto ">{question.title}</span>
                <span class="flex-none transition group-open:rotate-180 duration-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                  >
                    <rect width="37" height="37" rx="18.5" fill="#004D3D" />
                    <path
                      d="M18.4579 8.64314C18.0104 8.64314 17.5811 8.81156 17.2647 9.11135C16.9482 9.41114 16.7704 9.81774 16.7704 10.2417L16.7704 22.9024L12.3379 18.7035C12.018 18.4211 11.5949 18.2674 11.1577 18.2747C10.7206 18.282 10.3034 18.4498 9.99426 18.7426C9.68508 19.0355 9.50798 19.4307 9.50027 19.8448C9.49255 20.2589 9.65483 20.6597 9.95291 20.9628L17.2654 27.8899C17.5818 28.1893 18.0107 28.3574 18.4579 28.3574C18.9051 28.3574 19.334 28.1893 19.6504 27.8899L26.9629 20.9628C27.1287 20.8164 27.2617 20.6399 27.3539 20.4439C27.4461 20.2478 27.4957 20.0361 27.4997 19.8215C27.5037 19.6068 27.4621 19.3936 27.3772 19.1946C27.2923 18.9955 27.166 18.8147 27.0057 18.6629C26.8455 18.5111 26.6546 18.3914 26.4445 18.311C26.2344 18.2306 26.0093 18.1911 25.7827 18.1949C25.5562 18.1987 25.3327 18.2457 25.1257 18.3331C24.9187 18.4204 24.7324 18.5464 24.5779 18.7035L20.1454 22.9024L20.1454 10.2417C20.1454 9.3593 19.3894 8.64314 18.4579 8.64314Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </summary>
              <div class="group-open:animate-fadeIn transition duration-300 bg-green-900 text-slate p-12 font-bold text-base">
                <p
                  class="leading-relaxed select-none"
                  dangerouslySetInnerHTML={{ __html: question.answer }}
                >
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
