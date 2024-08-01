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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat.",
    },
  ],
}: Props) {
  return (
    <div class="container lg:px-16 xl:px-0 py-12 lg:py-28">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col lg:flex-row text-green-900 max-lg:max-w-[312px] px-6 lg:px-0">
          <p class="font-serif text-4xl mb-4 pl-6">{title}</p>
        </div>

        <div class="flex-auto border rounded-lg border-[#99B8B1]">
          {questions?.map((question) => (
            <details class="[&:not(:last-child)]:border-b group border-[#99B8B1] text-dark">
              <summary class="text-lg cursor-pointer py-9 px-6 flex items-center">
                <span class="flex-auto ">{question.title}</span>
                <span class="flex-none transition group-open:rotate-180 duration-400">
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
              <div class="group-open:animate-fadeIn transition duration-300  border-t border-[#99B8B1] bg-[#E7F0DB] py-9 px-6">
                <p
                  class="leading-relaxed select-none text-base text-dark"
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
