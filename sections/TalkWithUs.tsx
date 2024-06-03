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
    <div class="pt-28 pb-14 lg:container md:max-w-[88%] lg:mx-auto mx-4 flex items-center gap-16">
      <div class="w-1/2">
        <div class="pb-12">
          <div class="rounded-[191px] px-9 py-[18px] w-fit border-4 border-green-900 mb-20">
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

        <div class="flex items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="251"
            height="98"
            viewBox="0 0 251 98"
            fill="none"
          >
            <path
              d="M86.4968 93.579C86.0254 93.1102 86.0029 92.6342 86.4819 92.1582C86.4894 92.6342 86.4894 93.1031 86.4968 93.579Z"
              fill="#004D3D"
            />
            <path
              d="M86.4968 93.579C86.0254 93.1102 86.0029 92.6342 86.4819 92.1582C86.4894 92.6342 86.4894 93.1031 86.4968 93.579Z"
              fill="#004D3D"
            />
            <path
              d="M248.946 89.9075C244.583 88.5936 243.595 85.5967 243.655 81.6551C243.798 73.2536 243.768 64.8379 243.67 56.4364C243.573 48.1202 239.225 42.389 231.03 39.463C227.865 38.3338 224.564 37.7585 221.219 37.51C214.349 36.9915 207.591 37.3892 201.335 40.4857C195.729 43.2625 192.354 47.5307 192.062 53.7022C191.935 56.3938 193.073 58.3042 195.797 59.2843C201.582 61.3722 205.765 59.0854 206.588 53.3471C207.449 47.3958 212.568 44.2354 219.326 45.4854C225.612 46.6501 228.65 51.2095 226.967 57.0614C225.799 61.1379 222.491 62.6648 218.487 63.3252C213.069 64.213 207.599 64.8663 202.278 66.1092C194.906 67.8207 189.944 72.025 188.59 79.4962C187.138 87.4573 190.543 93.8135 197.877 96.498C207.531 100.035 220.299 97.1585 227.348 89.6376C228.291 93.5294 230.611 96.221 234.615 96.6187C238.948 97.0448 243.371 96.8176 247.749 96.7182C249.702 96.6755 250.698 95.3475 250.945 93.5862C251.177 91.9528 250.712 90.4401 248.946 89.9075ZM225.896 82.3795C223.464 88.6078 216.946 91.6616 210.3 89.6589C206.88 88.6291 204.845 86.0938 204.605 82.5642C204.313 78.1823 206.349 74.6243 210.106 72.9411C211.984 72.096 214.027 71.8404 216.033 71.4995C219.782 70.8816 223.576 70.5336 227.431 69.1488C227.468 73.8857 227.52 78.2178 225.896 82.3795Z"
              fill="#004D3D"
            />
            <path
              d="M86.4967 93.5789C85.2169 96.2563 83.0242 96.9452 80.0232 96.86C73.3178 96.6682 66.5974 96.7606 59.8844 96.8174C57.5869 96.8387 55.7908 96.2705 55.2745 93.9198C54.773 91.6401 55.8582 90.2269 58.1482 89.4741C61.1866 88.4798 62.4589 86.3279 62.4589 83.3523C62.4364 73.7932 62.4364 64.2412 62.4589 54.6892C62.4663 51.749 61.1267 49.7605 58.0958 48.9935C56.2099 48.5248 55.2146 47.4879 55.1622 45.6414C55.1098 43.6955 56.1201 42.403 58.0135 41.8561C63.0052 40.4357 67.9819 38.987 73.0259 37.7441C76.8277 36.8138 78.6836 38.2697 78.6986 42.055C78.736 55.1508 78.7734 68.2395 78.6761 81.3353C78.6462 85.3905 79.4021 88.7497 84.1542 89.9712C85.3442 90.2766 85.5238 91.6046 86.4817 92.1586C86.0027 92.6344 86.0252 93.1102 86.4967 93.5789Z"
              fill="#004D3D"
            />
            <path
              d="M50.6196 76.3505C51.5176 86.3073 47.9554 92.6634 39.7083 95.7243C34.8588 97.5211 29.7624 97.8975 26.6416 97.8691C19.2702 97.8336 13.9717 97.4359 8.9351 95.6178C3.99583 93.8353 0.515883 90.8099 0.0444064 85.4409C-0.299846 81.5348 1.36155 79.1486 4.88639 78.5592C8.72556 77.92 11.4945 79.6457 12.5947 83.3671C14.1139 88.5018 18.4619 90.7033 25.7361 90.0145C30.9673 89.5244 33.9982 86.7973 34.3798 82.245C34.7241 78.1615 32.7559 75.4486 28.4677 74.4898C24.1196 73.5239 19.6967 72.8422 15.3487 71.8976C6.54778 69.9872 1.92283 64.4407 1.59354 55.5705C1.27922 47.2968 5.72457 41.2034 14.1139 38.8456C21.9868 36.6298 29.957 36.6653 37.7999 38.9521C43.4127 40.5855 47.1247 44.0086 47.671 49.8819C48.0078 53.5464 46.1892 55.8758 42.6644 56.3304C38.6082 56.8488 35.6895 55.258 35.1956 51.6999C34.305 45.3438 28.9541 44.6336 24.1496 45.4006C19.3674 46.1676 17.025 50.0736 18.1251 55.0946C18.8136 58.2052 20.9914 60.0162 24.1121 60.7264C28.3629 61.6852 32.6661 62.4593 36.9468 63.3044C45.0592 64.9023 50.0209 69.6321 50.6196 76.3505Z"
              fill="#004D3D"
            />
            <path
              d="M184.347 45.8326C177.828 47.3879 175.493 52.21 173.278 57.4441C168.174 69.4818 162.838 81.4342 157.615 93.4363C156.597 95.7728 155.22 97.6406 152.256 97.8182C149.136 98.017 147.384 96.8665 145.835 93.3582C141.532 83.579 137.266 73.7855 132.993 63.9991C131.496 60.576 129.932 57.1742 128.518 53.7156C127.044 50.1079 124.536 47.5512 120.578 46.4717C117.981 45.7616 116.484 44.3554 116.873 41.6922C117.3 38.823 119.53 38.4324 122.067 38.4395C130.089 38.4751 138.112 38.4538 146.127 38.4538C148.372 38.4538 150.273 38.9651 150.677 41.4223C150.969 43.2546 150.385 44.6537 148.417 45.4917C144.885 46.9831 144.376 48.1691 145.626 51.7271C146.329 53.7369 147.197 55.69 148.035 57.6572C150.707 63.921 153.401 70.1777 156.29 76.9174C158.146 72.5569 159.83 68.6579 161.469 64.7306C163.257 60.4695 165.121 56.2226 166.73 51.8976C168.092 48.2188 167.478 47.0115 163.811 45.4846C161.806 44.6537 161.334 43.2262 161.544 41.4081C161.768 39.5048 163.115 38.5461 164.964 38.5248C171.018 38.4395 177.087 38.4395 183.142 38.5319C185.02 38.5603 186.255 39.6611 186.577 41.472C186.921 43.4037 186.412 45.3426 184.347 45.8326Z"
              fill="#004D3D"
            />
            <path
              d="M117.293 93.9124C116.978 95.6169 115.818 96.7035 114.082 96.7248C105.977 96.81 97.8647 96.8029 89.7598 96.7177C87.7766 96.7035 86.9384 95.2334 86.4969 93.5787C86.4894 93.1028 86.4894 92.6341 86.4819 92.1583C87.1555 90.8515 88.1134 89.9141 89.6401 89.417C92.5587 88.4653 93.816 86.3703 93.816 83.494C93.8085 64.2125 93.801 44.9238 93.831 25.6423C93.8385 22.6879 92.5138 20.6923 89.5054 19.9182C87.6195 19.4353 86.5942 18.4268 86.5418 16.5945C86.4894 14.5421 87.6419 13.2709 89.6476 12.6956C94.3623 11.3392 99.0621 9.91879 103.829 8.73278C108.185 7.64619 110.078 9.15889 110.086 13.5407C110.101 35.9187 110.138 58.2966 110.056 80.6746C110.041 84.9641 110.572 88.5789 115.728 90.049C117.45 90.5391 117.592 92.3216 117.293 93.9124Z"
              fill="#004D3D"
            />
            <path
              d="M86.4968 93.579C86.0254 93.1102 86.0029 92.6342 86.4819 92.1582C86.4894 92.6342 86.4894 93.1031 86.4968 93.579Z"
              fill="#004D3D"
            />
            <path
              d="M80.8837 1.9792C78.4814 11.0412 76.7302 20.3872 68.3185 26.7363C63.7983 30.1452 58.6719 31.5371 54.5035 31.4661C45.2685 31.0542 45.6128 31.1536 46.4958 23.7251C47.4089 16.0054 50.5371 9.2515 57.497 4.55007C64.135 0.0616973 71.6562 -0.378617 79.4094 0.203735C80.6068 0.288957 81.1531 0.963633 80.8837 1.9792Z"
              fill="#85B549"
            />
          </svg>

          <a
            href={cta?.href}
            target={cta?.href.includes("http") ? "_blank" : "_self"}
            class="self-end font-bold text-3xl bg-green-500 text-white w-fit h-fit py-5 px-7 flex justify-center items-center rounded-xl transform
			transition duration-700
			hover:scale-105"
          >
            <span>
              {cta?.text}
            </span>
          </a>
        </div>
      </div>
      <div class="w-1/2">
        <div class="flex flex-col items-center bg-green-900 rounded-[20px] px-12 py-9">
          {form && (
            <>
              <h2 class="text-white font-bold text-3xl mb-6 max-w-[500px] text-center">
                {form.title}
              </h2>

              <form onSubmit={handleSubmit} class="flex flex-col items-center">
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
                <div class="w-full flex flex-col md:flex-row">
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
                  class="font-bold text-lg md:text-[26px]"
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
