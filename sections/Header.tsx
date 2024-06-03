import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Social {
  network: "Facebook" | "Instagram" | "Linkedin";
  href: string;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  social?: Social[];
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    buttons: CTA[];
  };
}

export default function Header({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Princing", url: "/" },
      { label: "Contact", url: "/" },
    ],
    buttons: [
      { id: "change-me-1", href: "/", text: "Change me", outline: false },
    ],
  },
  social,
}: Nav) {
  return (
    <nav class="drawer drawer-end bg-green-900 flex justify-center">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* main content */}
      <div class="drawer-content w-full py-8 px-6 lg:px-4 xl:px-0 flex items-center justify-between lg:container lg:max-w-6xl xl:max-w-[88%] xl:mx-32 xl:gap-8">
        <a href="/">
          <svg
            width="146"
            height="61"
            class="max-h-[34px] max-w-[80px] lg:h-[64px] lg:w-[148px]"
            viewBox="0 0 146 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="146" height="61" fill="url(#pattern0_162_2146)" />
            <defs>
              <pattern
                id="pattern0_162_2146"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0_162_2146"
                  transform="matrix(0.00300581 0 0 0.00719424 -0.00497684 0)"
                />
              </pattern>
              <image
                id="image0_162_2146"
                width="336"
                height="139"
                xlink:href="data:image/png;base64,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"
              />
            </defs>
          </svg>

          {
            /* <Image
            src={logo.src || ""}
            class="w-full h-full max-h-[34px] max-w-[80px] lg:h-[64px] lg:w-[148px]"
            width={296}
            height={128}
            alt={logo.alt}
          /> */
          }
        </a>

        <ul class="hidden lg:flex items-center lg:mt-[10px] lg:max-w-4xl xl:gap-8">
          {navigation.links.map((link) => (
            <li class="transform
			transition-all duration-700
			hover:scale-105">
              <a
                href={link.url}
                aria-label={link.label}
                class="text-white whitespace-nowrap font-semibold text-base lg:text-lg cursor-pointer px-4 hover:underline underline-offset-4"
              >
                <span>
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <ul class="gap-3 hidden items-center lg:flex">
          {navigation.buttons?.map((button) => (
            <a
              key={button?.id}
              id={button?.id}
              href={button?.href ?? "#"}
              target={button?.href.includes("http") ? "_blank" : "_self"}
              class="font-bold text-lg lg:text-xl whitespace-nowrap cursor-pointer bg-slate rounded-lg transform
			  transition duration-700
			  hover:scale-105 px-9 py-5 text-green-900"
            >
              {button?.text}
            </a>
          ))}
        </ul>

        <label
          htmlFor="mobile-drawer-nav"
          class="flex lg:hidden btn btn-ghost drawer-button"
        >
          <Icon
            id="Bars3"
            class="text-slate w-[25px] h-[25px]"
            width={25}
            height={25}
            strokeWidth={2}
          />
        </label>
      </div>

      {/* sidebar */}
      <aside class="drawer-side z-50">
        {/* Close when clicking on overlay */}
        <label
          htmlFor="mobile-drawer-nav"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="flex flex-col gap-8 min-h-full w-[90%] rounded-l-2xl px-10 py-6 bg-green-900 text-white">
          <div class="w-full flex items-center justify-between">
            <a href="/">
              <Image
                src={logo.src || ""}
                width={83}
                height={34}
                alt={logo.alt}
              />
            </a>
            <Icon
              size={24}
              stroke-width={2}
              id="XMark"
            />
          </div>

          <ul class="mt-8 mb-16">
            {navigation?.links.map((link) => (
              <li class="mb-6">
                <a href={link.url} aria-label={link.label}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul class="flex items-center gap-3">
            {navigation.buttons?.map((button) => (
              <a
                key={button?.id}
                id={button?.id}
                href={button?.href ?? "#"}
                target={button?.href.includes("http") ? "_blank" : "_self"}
                class="font-bold text-xl cursor-pointer bg-slate rounded-xl transform
				transition duration-700
				hover:scale-105 px-[35px] py-5 text-green-900"
              >
                {button?.text}
              </a>
            ))}
          </ul>
        </div>
        <div class="flex gap-6 items-center">
          {social?.map((item) => (
            <a class="block" href={item.href} target="_blank">
              {item.network == "Instagram" && (
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
              )}
              {item.network == "Linkedin" && (
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
              )}
            </a>
          ))}
        </div>
      </aside>
    </nav>
  );
}
