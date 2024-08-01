import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Items {
  label: string;
  href: string;
}

export interface Social {
  network: "Facebook" | "Instagram" | "Linkedin";
  href: string;
}

export interface Organization {
  title: string;
  links: Items[];
}

export interface Contact {
  title: string;
  phone: string;
  email: string;
}

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  imageBg?: ImageWidget;
  organization?: Organization;
  contact?: Contact;
  socialTitle: string;
  social?: Social[];
  copyright?: string;
}

export default function Footer({
  logo = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  imageBg,
  organization,
  copyright = "® Silva 2024. Todos os direitos reservados.",
  contact,
  socialTitle,
  social = [
    { network: "Facebook", href: "" },
    { network: "Instagram", href: "" },
    { network: "Linkedin", href: "" },
  ],
}: Props) {
  return (
    <div class="relative w-full text-sm text-slate  rounded-t-[20px]">
      {imageBg && (
        <Image
          width={1280}
          height={600}
          class="absolute inset-0 w-full h-full object-cover -z-10 rounded-t-[20px]"
          src={imageBg}
          alt={imageBg}
          decoding="async"
          loading="lazy"
        />
      )}
      <div class="py-12 px-6 lg:px-16">
        <div class="w-full flex flex-col items-start mb-16 lg:mb-0">
          {/* Mobile */}
          <div class="w-full flex flex-col items-center text-center">
            <Image
              class="mb-9"
              src={logo.src || ""}
              width={144}
              height={58}
              alt={logo.alt}
            />

            <div class="flex flex-col items-center">
              <span class="mb-12 text-2xl lg:text-4xl font-bold font-serif lg:hidden">
                Feita no Brasil <br />
                🇧🇷
                <br />
                para o Planeta Terra
              </span>
              <span class="hidden lg:flex mb-12 text-2xl font-serif">
                Feita no Brasil 🇧🇷 para o Planeta Terra
              </span>
            </div>
          </div>
          <div class="w-full flex flex-col lg:flex-row lg:justify-between xl:justify-evenly container">
            <div class="lg:w-[310px] flex flex-col">
              <span class="mb-9 text-xl font-sans text-start">
                Somos uma plataforma que comercializa{" "}
                <b>mudas e sementes nativas em escala</b> organizando a cadeia
                de suprimentos
              </span>
              <p class="hidden lg:inline-block font-regular text-slate text-sm">{copyright}</p>
            </div>

              {/* Empresa */}
            <div class="flex flex-col md:flex-row gap-11">
              <div class="mb-9">
                <h4 class="text-2xl lg:text-xl font-regular mb-4">
                  {organization?.title}
                </h4>
                <div class="flex flex-col gap-2 w-[310px]">
                  {organization?.links?.map((item) => (
                    <a
                      class="block hover:underline link no-underline text-base font-sans font-bold"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
              {/* Atendimento */}
              <div class="mb-9">
                <h4 class="text-2xl lg:text-xl font-regular mb-4">
                  {contact?.title}
                </h4>
                <div class="flex flex-col">
                  <a
                    target="_blank"
                    href="https://wa.me/5511964769833?text=Olá%2C%20vim%20do%20site%20da%20Silva%20e%20quero%20falar%20com%20vocês."
                    class="flex items-center cursor-pointer mb-6 hover:underline"
                  >
                    <span class="font-bold">{contact?.phone}</span>
                  </a>
                  <a
                    target="_blank"
                    href="mailto:carreiras@silvabrasil.bio"
                    class="flex items-center cursor-pointer hover:underline"
                  >
                    <span class="font-bold">{contact?.email}</span>
                  </a>
                </div>
              </div>
              {/* Redes Sociais */}
              <div class="mb-9">
                <h4 class="text-2xl lg:text-xl font-regular mb-4">
                  {socialTitle}
                </h4>
                <div class="text-base font-sans font-bold flex flex-col gap-4">
                  {social?.map((item) => (
                    <a class="block hover:underline" href={item.href} target="_blank">
                      {item.network == "Instagram" && (
                        <span class="flex items-center">
                          <svg
                            class="mr-3"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
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
                          Instagram
                        </span>
                      )}
                      {item.network == "Linkedin" && (
                        <span class="flex items-center">
                          <svg
                            class="mr-3"
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
                          Linkedin
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="items-start flex lg:hidden">
          <p class="font-regular text-slate text-sm">{copyright}</p>
        </div>
      </div>
    </div>
  );
}
