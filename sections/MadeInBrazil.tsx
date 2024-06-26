import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface socialCTA {
  network: "Instagram" | "Linkedin";
  href: string;
}

interface Props {
  imageBg: ImageWidget;
  logo: ImageWidget;
  firstText?: string;
  secondText?: string;
  hashtags?: string;
  socialButtons: socialCTA[];
}

export default function MadeInBrazilSection(
  { imageBg, logo, socialButtons, firstText, secondText, hashtags }: Props,
) {
  return (
    <div class="pb-14 lg:container lg:max-w-[70%] lg:mx-auto px-3">
      <div class="relative pt-6 lg:pt-32 pb-16">
        {imageBg && (
          <Image
            width={1280}
            height={600}
            class="absolute inset-0 w-full h-full object-cover -z-10 rounded-xl"
            src={imageBg}
            alt={imageBg}
            decoding="async"
            loading="lazy"
          />
        )}
        <div class="flex flex-col items-center">
          <Image
            src={logo || ""}
            width={144}
            height={58}
            alt="Silva Logo"
          />

          <div class="font-bold text-slate mb-20 mt-8 flex flex-col items-center w-full">
            <p class="flex items-center text-2xl lg:text-5xl font-bold flex-col lg-flex-row">
              <span class="mr-2">{firstText}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="50"
                viewBox="0 0 47 50"
                fill="none"
              >
                <path
                  d="M47 37.5009C47 38.9743 46.4498 40.3874 45.4704 41.4292C44.4911 42.4711 43.1628 43.0564 41.7778 43.0564H5.22222C3.8372 43.0564 2.50891 42.4711 1.52955 41.4292C0.550197 40.3874 0 38.9743 0 37.5009V12.5009C0 11.0274 0.550197 9.61437 1.52955 8.5725C2.50891 7.53063 3.8372 6.94531 5.22222 6.94531H41.7778C43.1628 6.94531 44.4911 7.53063 45.4704 8.5725C46.4498 9.61437 47 11.0274 47 12.5009V37.5009Z"
                  fill="#009B3A"
                >
                </path>
                <path
                  d="M42.7282 25.0002L23.4999 40.4502L4.27173 25.0002L23.4999 9.54883L42.7282 25.0002Z"
                  fill="#FEDF01"
                >
                </path>
                <path
                  d="M23.4686 33.8647C28.1251 33.8647 31.8999 29.8489 31.8999 24.8952C31.8999 19.9415 28.1251 15.9258 23.4686 15.9258C18.8122 15.9258 15.0374 19.9415 15.0374 24.8952C15.0374 29.8489 18.8122 33.8647 23.4686 33.8647Z"
                  fill="#002776"
                >
                </path>
                <path
                  d="M16.0282 20.6759C15.5903 21.5538 15.2938 22.5035 15.1509 23.4856C20.3666 23.0829 27.4453 26.112 30.4833 29.8676C31.0082 29.0287 31.3972 28.0898 31.6361 27.0843C27.8866 23.1843 21.3 20.6537 16.0282 20.6759Z"
                  fill="#CBE9D4"
                >
                </path>
                <path
                  d="M15.6667 25.3242H16.9723V26.7131H15.6667V25.3242ZM16.9723 28.102H18.2779V29.4909H16.9723V28.102Z"
                  fill="#88C9F9"
                >
                </path>
                <path
                  d="M19.5833 25.3227H20.8888V26.7116H19.5833V25.3227ZM22.1944 26.7116H23.4999V28.1005H22.1944V26.7116ZM27.4166 29.4894H28.7221V30.8783H27.4166V29.4894ZM23.4999 30.8783H24.8055V32.2671H23.4999V30.8783ZM27.4166 22.5449H28.7221V23.9338H27.4166V22.5449Z"
                  fill="#55ACEE"
                >
                </path>
                <path
                  d="M24.8057 28.1016H26.1112V29.4905H24.8057V28.1016Z"
                  fill="#3B88C3"
                >
                </path>
              </svg>
              <span class="text-2xl lg:text-5xl font-bold ml-2">
                {secondText}
              </span>
            </p>
            <p class="font-medium mt-4 text-base lg:text-2xl">
              <span>{hashtags}</span>
            </p>
          </div>

          <div class="flex gap-9 max-md:flex-col">
            {socialButtons?.map((item) => (
              <a
                class="flex items-center border-2 border-slate text-slate font-normal text-xl rounded-[159px] px-7 py-4"
                href={item.href}
                target="_blank"
              >
                {item.network == "Instagram" && (
                  <>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 3.27002H8C5.23858 3.27002 3 5.5086 3 8.27002V16.27C3 19.0314 5.23858 21.27 8 21.27H16C18.7614 21.27 21 19.0314 21 16.27V8.27002C21 5.5086 18.7614 3.27002 16 3.27002ZM19.25 16.27C19.2445 18.0626 17.7926 19.5145 16 19.52H8C6.20735 19.5145 4.75549 18.0626 4.75 16.27V8.27002C4.75549 6.47737 6.20735 5.02551 8 5.02002H16C17.7926 5.02551 19.2445 6.47737 19.25 8.27002V16.27ZM16.75 8.52002C17.3023 8.52002 17.75 8.0723 17.75 7.52002C17.75 6.96774 17.3023 6.52002 16.75 6.52002C16.1977 6.52002 15.75 6.96774 15.75 7.52002C15.75 8.0723 16.1977 8.52002 16.75 8.52002ZM12 7.77002C9.51472 7.77002 7.5 9.78474 7.5 12.27C7.5 14.7553 9.51472 16.77 12 16.77C14.4853 16.77 16.5 14.7553 16.5 12.27C16.5027 11.0757 16.0294 9.92959 15.1849 9.0851C14.3404 8.24061 13.1943 7.76736 12 7.77002ZM9.25 12.27C9.25 13.7888 10.4812 15.02 12 15.02C13.5188 15.02 14.75 13.7888 14.75 12.27C14.75 10.7512 13.5188 9.52002 12 9.52002C10.4812 9.52002 9.25 10.7512 9.25 12.27Z"
                        fill="#FEF5E6"
                      />
                    </svg>
                    <span class="ml-4">Instagram</span>
                  </>
                )}
                {item.network == "Linkedin" && (
                  <>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 3.27002C3.67157 3.27002 3 3.94159 3 4.77002V19.77C3 20.5984 3.67157 21.27 4.5 21.27H19.5C20.3284 21.27 21 20.5984 21 19.77V4.77002C21 3.94159 20.3284 3.27002 19.5 3.27002H4.5ZM8.52076 7.27274C8.52639 8.22899 7.81061 8.81821 6.96123 8.81399C6.16107 8.80977 5.46357 8.17274 5.46779 7.27415C5.47201 6.42899 6.13998 5.74977 7.00764 5.76946C7.88795 5.78915 8.52639 6.43462 8.52076 7.27274ZM12.2797 10.0318H9.75971H9.7583V18.5916H12.4217V18.3919C12.4217 18.012 12.4214 17.632 12.4211 17.2519C12.4203 16.2381 12.4194 15.2232 12.4246 14.2097C12.426 13.9636 12.4372 13.7077 12.5005 13.4728C12.7381 12.5953 13.5271 12.0286 14.4074 12.1679C14.9727 12.2564 15.3467 12.5841 15.5042 13.1171C15.6013 13.4503 15.6449 13.8089 15.6491 14.1563C15.6605 15.2039 15.6589 16.2515 15.6573 17.2992C15.6567 17.669 15.6561 18.039 15.6561 18.4088V18.5902H18.328V18.3849C18.328 17.9329 18.3278 17.481 18.3275 17.0291C18.327 15.8996 18.3264 14.7701 18.3294 13.6402C18.3308 13.1297 18.276 12.6263 18.1508 12.1327C17.9638 11.3986 17.5771 10.7911 16.9485 10.3524C16.5027 10.0402 16.0133 9.83912 15.4663 9.81662C15.404 9.81403 15.3412 9.81064 15.2781 9.80723C14.9984 9.79211 14.7141 9.77675 14.4467 9.83068C13.6817 9.98396 13.0096 10.3341 12.5019 10.9514C12.4429 11.0222 12.3852 11.0941 12.2991 11.2014L12.2797 11.2257V10.0318ZM5.68164 18.5944H8.33242V10.0373H5.68164V18.5944Z"
                        fill="#FEF5E6"
                      />
                    </svg>
                    <span class="ml-4">Linkedin</span>
                  </>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
