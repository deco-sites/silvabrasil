export interface Question {
  title: string;
  /** @format rich-text */
  answer: string;
}

export interface Props {
  title?: string;
  questions?: Question[];
}

export default function FAQ({
  title = "FAQs",
  questions = [
    {
      title: "Question #1 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
  ],
}: Props) {
  return (
    <div class="lg:container lg:max-w-[70%] lg:mx-auto px-3 text-sm py-12 lg:py-28">
      <div class="flex flex-col gap-10">
        <div class="flex flex-col lg:flex-row justify-between items-center text-center lg:text-start text-green-900">
          <p class="font-serif text-2xl lg:text-5xl font-bold mb-4 lg:mb-0">
            {title}
          </p>
        </div>

        <div class="flex-auto border-2 rounded-lg border-green-900">
          {questions?.map((question) => (
            <details class="[&:not(:last-child)]:border-b-2 group border-green-900 text-green-900">
              <summary class="text-lg cursor-pointer py-6 px-8 lg:px-12 flex items-center">
                <span class="flex-auto ">{question.title}</span>
                <span class="flex-none transition group-open:rotate-180 duration-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="16"
                    viewBox="0 0 44 16"
                    fill="none"
                  >
                    <path
                      d="M27.6875 9.71875L22.6875 14.7188C22.5 14.9062 22.25 15 22 15C21.7188 15 21.4688 14.9062 21.2812 14.7188L16.2812 9.71875C15.875 9.34375 15.875 8.6875 16.2812 8.3125C16.6562 7.90625 17.3125 7.90625 17.6875 8.3125L21 11.5938V2C21 1.46875 21.4375 1.03125 21.9688 1.03125C22.4688 1.03125 23 1.46875 23 2V11.5938L26.2812 8.3125C26.6562 7.90625 27.3125 7.90625 27.6875 8.3125C28.0938 8.6875 28.0938 9.34375 27.6875 9.71875Z"
                      fill="#004D3D"
                    />
                  </svg>
                </span>
              </summary>
              <div class="group-open:animate-fadeIn transition duration-300 bg-green-900 text-slate py-6 px-8 lg:px-12  font-bold text-base">
                <p
                  class="leading-relaxed select-none"
                  dangerouslySetInnerHTML={{ __html: question.answer }}
                ></p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
