import type { JSX } from "preact";
import Button from "site/components/ui/Button.tsx";
import Input from "site/components/ui/Input/index.tsx";
import Icon from "site/components/ui/Icon.tsx";

interface CTA {
  href: string;
  text: string;
}

export interface Inputs {
  /** @title Nome */
  name?: string;
  /** @title Nome da empresa */
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
  subTitle: string;
  /** @format rich-text */
  description?: string;
  cta: CTA;
  form?: Form;
}

export default function TalkWithUsSection({
  title,
  subTitle,
  description = "my description",
  cta,
  form,
}: Props) {
  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    )?.value;
    const name = (
      e.currentTarget.elements.namedItem("name") as HTMLInputElement
    )?.value;

    try {
      console.log(email, name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="talk-with-us"
      class="container size-full flex flex-col lg:flex-row bg-green-900 lg:bg-opacity-90 lg:rounded-xl"
    >
      <div class="w-full h-auto lg:w-2/3 lg:px-28 pt-9 lg:py-[92px] bg-green-900 lg:rounded-xl px-6 mb-9 lg:mb-0">
        <div class="h-full justify-between flex flex-col items-start text-left">
          <div class="mb-6 lg:max-w-[407px]">
            <h2 class="text-4xl lg:text-5xl font-bold max-w-[398px] text-slate mb-2 font-serif">
              {title}
            </h2>
            <h3 class="text-xl text-white mb-6">{subTitle}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: `<span class="text-white text-left text-base">${description}</span>`,
              }}
            ></p>
          </div>
          <a
            href={cta?.href}
            target={cta?.href.includes("http") ? "_blank" : "_self"}
            class="inline-flex items-center justify-center font-bold text-base bg-green-500 text-white py-4 px-6 rounded-lg transform transition duration-400 hover:scale-105"
          >
            <Icon id="WhatsApp" width={14} height={16} class="mr-2" />
            {cta?.text}
          </a>
        </div>
      </div>
      <div class="w-full h-auto lg:w-1/3 lg:rounded-xl px-6 lg:px-8 pb-12  lg:py-24">
        {form && (
          <form onSubmit={handleSubmit} class="flex flex-col gap-6">
            <div class="w-full gap-2">
              <Input
                id="name"
                placeholder={form?.placeholder?.name ?? "Nome"}
                class="w-full p-4 rounded-lg"
                required
              />
              <Input
                id="organization"
                placeholder={
                  form?.placeholder?.organization ?? "Nome da organização"
                }
                class="w-full p-4 rounded-lg"
                required
              />
              <Input
                id="phone"
                type="tel"
                placeholder={form?.placeholder?.phone ?? "Telefone (WhatsApp)"}
                class="w-full p-4 rounded-lg"
                required
              />
              <Input
                id="email"
                type="email"
                placeholder={form?.placeholder?.email ?? "E-mail (opcional)"}
                class="w-full p-4 rounded-lg"
              />
              <textarea
                id="message"
                class="w-full p-4 rounded-lg"
                placeholder={
                  form?.placeholder?.message ?? "Sua mensagem aqui (opcional)"
                }
              />
            </div>
            <div class="w-full text-white">
              <label class="block mb-2">
                Com qual perfil você se identifica?
              </label>
              <div class="flex flex-col">
                <label class="mb-2">
                  <input
                    type="radio"
                    name="profile"
                    value="viveirista"
                    class="mr-2"
                  />
                  Viveirista
                </label>
                <label class="mb-2">
                  <input
                    type="radio"
                    name="profile"
                    value="comprador"
                    class="mr-2"
                  />
                  Comprador de mudas
                </label>
                <label class="mb-2">
                  <input
                    type="radio"
                    name="profile"
                    value="outro"
                    class="mr-2"
                  />
                  Outro
                </label>
              </div>
            </div>
            <Button
              type="submit"
              class="w-fit font-bold text-lg text-dark py-3 rounded-lg"
            >
              {form.buttonLabel ?? "Enviar"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
