import type { JSX } from "preact";
import Button from "site/components/ui/Button.tsx";
import {
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_MESSAGE,
  PLACEHOLDER_NAME,
  PLACEHOLDER_ORGANIZATION,
  PLACEHOLDER_PHONE,
} from "site/components/ui/Input/constants.ts";
import Input from "site/components/ui/Input/index.tsx";
interface CTA {
  href: string;
  text: string;
}

export interface Inputs {
  /** @title Nome */
  name?: string;
  /** @title Nome da empresa*/
  organization?: string;
  /** @title Telefone */
  phone?: string;
  /** @title E-mail */
  email?: string;
  /** @title Mensagem */
  message?: string;
}

interface Form {
  title?: string;
  placeholder?: Inputs;
  buttonLabel?: string;
}

interface Props {
  title: string;
  /** @format rich-text */
  description?: string;
  cta: CTA;
  form?: Form;
  inputs?: Inputs;
}

export default function TalkWithUsSection(
  { title, description = "my description", cta, form, inputs }: Props,
) {
  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem("email") as RadioNodeList)
      ?.value;
    const name = (e.currentTarget.elements.namedItem("name") as RadioNodeList)
      ?.value;

    try {
      await console.log(email, name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="lg:pt-28 pb-14 lg:container lg:max-w-[88%] lg:mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
      <div class="w-full lg:w-1/2">
        <div class="lg:pb-12 flex flex-col items-center text-center  lg:items-start lg:text-start">
          <div class="rounded-[191px] px-9 py-[18px] w-fit border-4 border-green-900 mb-6 lg:mb-20">
            <span class="text-3xl lg:text-4xl font-bold text-green-900 mb-12">
              {title}
            </span>
          </div>
          <div
            class="text-3xl lg:text-5xl font-bold text-green-600"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>

        <div class="hidden lg:flex items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="190"
            height="75"
            viewBox="0 0 190 75"
            fill="none"
          >
            <path
              d="M65.4758 71.6527C65.1189 71.2978 65.1019 70.9375 65.4644 70.5771C65.4701 70.9375 65.4701 71.2924 65.4758 71.6527Z"
              fill="#004D3D"
            />
            <path
              d="M65.4758 71.6527C65.1189 71.2978 65.1019 70.9375 65.4644 70.5771C65.4701 70.9375 65.4701 71.2924 65.4758 71.6527Z"
              fill="#004D3D"
            />
            <path
              d="M188.445 68.8742C185.143 67.8796 184.395 65.611 184.44 62.6274C184.548 56.2677 184.525 49.8972 184.452 43.5375C184.378 37.2423 181.087 32.904 174.883 30.6891C172.487 29.8343 169.989 29.3989 167.457 29.2107C162.256 28.8183 157.141 29.1193 152.405 31.4632C148.162 33.5652 145.607 36.7961 145.386 41.4678C145.29 43.5053 146.151 44.9514 148.213 45.6933C152.592 47.2738 155.758 45.5427 156.382 41.199C157.033 36.694 160.908 34.3017 166.023 35.2479C170.782 36.1295 173.082 39.5808 171.807 44.0106C170.924 47.0964 168.42 48.2522 165.389 48.7521C161.288 49.4241 157.146 49.9187 153.119 50.8595C147.539 52.1551 143.783 55.3376 142.757 60.9931C141.658 67.0195 144.236 71.8309 149.788 73.863C157.095 76.5402 166.76 74.363 172.096 68.6699C172.81 71.6159 174.566 73.6533 177.597 73.9544C180.877 74.277 184.225 74.1049 187.539 74.0297C189.018 73.9974 189.771 72.9921 189.958 71.6589C190.134 70.4224 189.782 69.2774 188.445 68.8742ZM170.997 63.1757C169.156 67.8904 164.222 70.202 159.191 68.686C156.603 67.9065 155.062 65.9873 154.88 63.3155C154.659 59.9985 156.2 57.3052 159.044 56.0311C160.466 55.3914 162.013 55.1979 163.531 54.9398C166.369 54.4721 169.241 54.2087 172.159 53.1604C172.187 56.7461 172.227 60.0254 170.997 63.1757Z"
              fill="#004D3D"
            />
            <path
              d="M65.4755 71.6533C64.5068 73.68 62.8469 74.2015 60.5753 74.1369C55.4994 73.9918 50.4123 74.0617 45.3308 74.1047C43.5916 74.1208 42.232 73.6907 41.8411 71.9113C41.4616 70.1856 42.283 69.1158 44.0165 68.546C46.3165 67.7934 47.2795 66.1645 47.2795 63.912C47.2625 56.676 47.2625 49.4454 47.2795 42.2148C47.2852 39.9892 46.2712 38.4839 43.9768 37.9033C42.5493 37.5485 41.7958 36.7636 41.7562 35.3659C41.7165 33.8929 42.4813 32.9145 43.9145 32.5005C47.6931 31.4254 51.4603 30.3287 55.2785 29.3879C58.1563 28.6836 59.5612 29.7857 59.5726 32.6511C59.6009 42.5642 59.6292 52.472 59.5556 62.3852C59.5329 65.4548 60.1051 67.9977 63.7023 68.9223C64.6031 69.1535 64.739 70.1588 65.4641 70.5781C65.1016 70.9383 65.1186 71.2985 65.4755 71.6533Z"
              fill="#004D3D"
            />
            <path
              d="M38.3176 58.6117C38.9974 66.1487 36.3009 70.9601 30.0581 73.2772C26.3871 74.6373 22.5293 74.9222 20.167 74.9007C14.587 74.8738 10.5762 74.5728 6.76362 73.1965C3.02473 71.8472 0.390509 69.557 0.0336144 65.4928C-0.226975 62.5361 1.03065 60.7298 3.69886 60.2836C6.605 59.7998 8.70105 61.1061 9.5338 63.9231C10.6838 67.8099 13.9752 69.4764 19.4815 68.9549C23.4414 68.584 25.7357 66.5196 26.0246 63.0737C26.2852 59.9825 24.7953 57.9289 21.5492 57.2032C18.2579 56.4721 14.9099 55.956 11.6185 55.241C4.95649 53.7949 1.45553 49.5963 1.20627 42.8818C0.968338 36.6188 4.33334 32.0063 10.6838 30.2215C16.6434 28.5442 22.6766 28.5711 28.6135 30.3022C32.8622 31.5386 35.6721 34.1298 36.0856 38.5757C36.3405 41.3496 34.9639 43.1129 32.2957 43.457C29.2253 43.8494 27.016 42.6452 26.6421 39.9519C25.9679 35.1405 21.9175 34.6029 18.2805 35.1835C14.6606 35.7641 12.8875 38.7208 13.7202 42.5216C14.2414 44.8762 15.8899 46.2471 18.2522 46.7847C21.4699 47.5104 24.7273 48.0964 27.9677 48.7361C34.1085 49.9457 37.8644 53.5261 38.3176 58.6117Z"
              fill="#004D3D"
            />
            <path
              d="M139.545 35.5105C134.611 36.6878 132.843 40.338 131.167 44.3001C127.303 53.4122 123.264 62.4599 119.31 71.5452C118.539 73.3138 117.497 74.7277 115.254 74.8621C112.891 75.0126 111.566 74.1417 110.393 71.486C107.136 64.0834 103.907 56.67 100.672 49.262C99.539 46.6708 98.355 44.0958 97.2843 41.4777C96.1683 38.7467 94.2706 36.8114 91.2738 35.9943C89.308 35.4567 88.175 34.3923 88.4696 32.3763C88.7925 30.2044 90.4807 29.9088 92.4011 29.9141C98.474 29.941 104.547 29.9249 110.614 29.9249C112.314 29.9249 113.752 30.312 114.058 32.172C114.279 33.559 113.837 34.6181 112.348 35.2524C109.674 36.3813 109.288 37.2791 110.234 39.9725C110.767 41.4938 111.424 42.9722 112.059 44.4613C114.081 49.2029 116.12 53.9391 118.307 59.0408C119.712 55.74 120.987 52.7886 122.227 49.8157C123.581 46.5902 124.992 43.3754 126.21 40.1015C127.241 37.3168 126.776 36.4029 124 35.247C122.482 34.6181 122.125 33.5375 122.284 32.1613C122.454 30.7205 123.474 29.9948 124.873 29.9786C129.456 29.9141 134.05 29.9141 138.633 29.984C140.055 30.0055 140.99 30.8388 141.233 32.2096C141.494 33.6719 141.109 35.1395 139.545 35.5105Z"
              fill="#004D3D"
            />
            <path
              d="M88.7871 71.9056C88.5492 73.1958 87.6711 74.0183 86.3568 74.0344C80.2217 74.0989 74.0808 74.0936 67.9456 74.0291C66.4444 74.0183 65.8099 72.9055 65.4757 71.6529C65.47 71.2927 65.47 70.9379 65.4644 70.5777C65.9742 69.5886 66.6993 68.8789 67.855 68.5026C70.0643 67.7822 71.016 66.1964 71.016 64.0191C71.0104 49.4235 71.0047 34.8226 71.0274 20.227C71.033 17.9906 70.0303 16.48 67.753 15.894C66.3254 15.5284 65.5493 14.7651 65.5097 13.3781C65.47 11.8244 66.3424 10.8621 67.8606 10.4267C71.4296 9.3999 74.9872 8.32472 78.5958 7.42694C81.8928 6.60443 83.3261 7.7495 83.3317 11.0664C83.3431 28.0059 83.3714 44.9454 83.3091 61.8849C83.2977 65.1319 83.7 67.8683 87.6031 68.9811C88.9061 69.352 89.0137 70.7014 88.7871 71.9056Z"
              fill="#004D3D"
            />
            <path
              d="M65.4758 71.6527C65.1189 71.2978 65.1019 70.9375 65.4644 70.5771C65.4701 70.9375 65.4701 71.2924 65.4758 71.6527Z"
              fill="#004D3D"
            />
            <path
              d="M61.2267 2.3146C59.4083 9.17426 58.0827 16.249 51.7152 21.055C48.2936 23.6355 44.413 24.6891 41.2576 24.6354C34.2671 24.3236 34.5276 24.3988 35.1961 18.7756C35.8872 12.932 38.2552 7.81953 43.5236 4.26068C48.5485 0.863109 54.2418 0.529803 60.1107 0.970628C61.0171 1.03514 61.4307 1.54585 61.2267 2.3146Z"
              fill="#85B549"
            />
          </svg>

          <a
            href={cta?.href}
            target={cta?.href.includes("http") ? "_blank" : "_self"}
            class="self-end whitespace-nowrap font-bold text-3xl bg-green-500 text-white w-fit h-fit py-5 px-7 flex justify-center items-center rounded-xl transform
			transition duration-700
			hover:scale-105"
          >
            <span>
              {cta?.text}
            </span>
          </a>
        </div>
      </div>
      <div class="w-full lg:w-1/2">
        <div class="flex flex-col items-center bg-green-900 rounded-[20px] px-12 py-9">
          {form && (
            <>
              <h2 class="text-white font-bold text-3xl mb-6 max-w-[500px] text-center">
                {form.title}
              </h2>

              <form
                onSubmit={handleSubmit}
                class="w-full flex flex-col items-center"
              >
                <select class="w-full border-0 mb-2 rounded-[10px] text-green-900 text-lg bg-white px-4 py-[18px] border-r-8 border-transparent outline-green-500">
                  <option selected>Você é...</option>
                  <option>Viveirista</option>
                  <option>Comprador</option>
                </select>
                <Input
                  id="full_name"
                  placeholder={form.placeholder?.name ?? PLACEHOLDER_NAME}
                  required
                />
                <Input
                  id="organization"
                  placeholder={form?.placeholder?.organization &&
                    PLACEHOLDER_ORGANIZATION}
                  required
                />
                <div class="w-full flex flex-col lg:flex-row">
                  <Input
                    id="phone"
                    type="tel"
                    class="mr-3"
                    placeholder={form?.placeholder?.phone &&
                      PLACEHOLDER_PHONE}
                    required
                  />
                  <Input
                    id="email"
                    type="email"
                    placeholder={form?.placeholder?.email &&
                      PLACEHOLDER_EMAIL}
                    required
                  />
                </div>
                <textarea
                  id="message"
                  class="h-32 w-full flex flex-grow input mb-7 placeholder-green-900 text-green-900 text-lg rounded-[10px] py-[18px] !outline-green-500 focus:border-0"
                  placeholder={form.placeholder?.message &&
                    PLACEHOLDER_MESSAGE}
                />
                <Button
                  type="submit"
                  class="font-bold text-lg lg:text-[26px]"
                >
                  {form.buttonLabel}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
