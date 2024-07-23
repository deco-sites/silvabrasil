import type { JSX } from "preact";
import Button from "site/components/ui/Button.tsx";
import Input from "site/components/ui/Input/index.tsx";

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
  inputs?: Inputs;
}

export default function TalkWithUsSection({
  title,
  subTitle,
  description = "my description",
  cta,
  form,
  inputs,
}: Props) {
  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value;
    const name = (e.currentTarget.elements.namedItem("name") as HTMLInputElement)?.value;

    try {
      console.log(email, name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="talk-with-us"
      class="lg:pt-28 pb-14 lg:container lg:max-w-[70%] lg:mx-auto px-3 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 bg-green-900"
    >
      <div class="w-full lg:w-1/2 p-10">
        <div class="lg:pb-12 flex flex-col items-start text-left">
          <div class="mb-6">
            <h2 class="text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <h3 class="text-lg text-white mb-4">{subTitle}</h3>
            <p class="text-white" dangerouslySetInnerHTML={{ __html: `<span class="text-white">${description}</span>` }}></p>
          </div>
          <a
            href={cta?.href}
            target={cta?.href.includes("http") ? "_blank" : "_self"}
            class="inline-flex items-center justify-center font-bold text-lg bg-green-500 text-white py-3 px-6 rounded-lg transform transition duration-400 hover:scale-105"
          >
            {cta?.text}
          </a>
        </div>
      </div>
      <div class="w-full lg:w-1/2 bg-green-800 p-10 rounded-lg">
        {form && (
          <>
            <form
              onSubmit={handleSubmit}
              class="w-full flex flex-col items-center"
            >
              <Input
                id="name"
                placeholder={form?.placeholder?.name ?? "Nome"}
                class="mb-4 w-full p-4 rounded-lg"
                required
              />
              <Input
                id="organization"
                placeholder={form?.placeholder?.organization ?? "Nome da organização"}
                class="mb-4 w-full p-4 rounded-lg"
                required
              />
              <Input
                id="phone"
                type="tel"
                placeholder={form?.placeholder?.phone ?? "Telefone (WhatsApp)"}
                class="mb-4 w-full p-4 rounded-lg"
                required
              />
              <Input
                id="email"
                type="email"
                placeholder={form?.placeholder?.email ?? "E-mail (opcional)"}
                class="mb-4 w-full p-4 rounded-lg"
              />
              <textarea
                id="message"
                class="mb-4 w-full p-4 rounded-lg"
                placeholder={form?.placeholder?.message ?? "Sua mensagem aqui (opcional)"}
              />
              <div class="w-full mb-4 text-white">
                <label class="block mb-2">Com qual perfil você se identifica?</label>
                <div class="flex flex-col">
                  <label class="mb-2">
                    <input type="radio" name="profile" value="viveirista" class="mr-2" />
                    Viveirista
                  </label>
                  <label class="mb-2">
                    <input type="radio" name="profile" value="comprador" class="mr-2" />
                    Comprador de mudas
                  </label>
                  <label class="mb-2">
                    <input type="radio" name="profile" value="outro" class="mr-2" />
                    Outro
                  </label>
                </div>
              </div>
              <Button
                type="submit"
                class="w-full font-bold text-lg bg-green-500 text-white py-3 rounded-lg"
              >
                {form.buttonLabel ?? "Enviar"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
