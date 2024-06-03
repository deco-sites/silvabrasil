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
          <Image
            src={logo.src || ""}
            class="max-h-[33px] max-w-[79px] lg:max-h-[62px] lg:max-w-[146px]"
            width={148}
            height={64}
            alt={logo.alt}
          />
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
