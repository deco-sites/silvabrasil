import type { JSX } from "preact";
import { useState } from "preact/hooks";
import { invoke } from "../runtime.ts";
import { render } from "apps/resend/utils/reactEmail.ts";
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
  /** @title Perfil */
  profile?: string;
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

const EmailTemplate = ({ lead }: { lead: Inputs }) => (
  <div>
    <h3>Novo lead recebido em silvabrasil.bio</h3>
    <p>
      <strong>Timestamp:</strong> {new Date().toLocaleString()}
    </p>
    <p>
      <strong>Nome:</strong> {lead.name}
    </p>
    <p>
      <strong>Nome da organização:</strong> {lead.organization}
    </p>
    <p>
      <strong>Telefone:</strong> {lead.phone}
    </p>
    <p>
      <strong>E-mail:</strong> {lead.email}
    </p>
    <p>
      <strong>Perfil:</strong> {lead.profile}
    </p>
    <p>
      <strong>Mensagem:</strong> {lead.message}
    </p>
  </div>
);

export default function TalkWithUsSection({
  title,
  subTitle,
  description = "my description",
  cta,
  form,
}: Props) {
  const [errors, setErrors] = useState({
    phone: "",
    email: "",
    profile: "",
  });
  const [alert, setAlert] = useState({ alertText: "", type: "" });

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const lead = {
      name: formData.get("name") as string,
      organization: formData.get("organization") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      profile: formData.get("profile") as string,
      message: formData.get("message") as string,
    };

    let hasError = false;
    const newErrors = { phone: "", email: "", profile: "" };

    if (!lead.phone) {
      newErrors.phone =
        "Opa, não foi preenchido. Por favor, preencha seu WhatsApp.";
      hasError = true;
    }

    if (!lead.email) {
      newErrors.email =
        "Opa, não foi preenchido. Por favor, preencha seu e-mail.";
      hasError = true;
    }

    if (lead.phone && !/^\d+$/.test(lead.phone)) {
      newErrors.phone =
        "Opa, o telefone digitado não parece correto. Confira e tente novamente.";
      hasError = true;
    }

    if (lead.email && !/\S+@\S+\.\S+/.test(lead.email)) {
      newErrors.email =
        "Opa, o e-mail digitado não parece correto. Confira e tente novamente.";
      hasError = true;
    }

    if (!lead.profile) {
      newErrors.profile =
        "Opa, não foi preenchido. Por favor, escolha uma das opções.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    try {
      await invoke.resend.actions.emails.send({
        to: "igorcantelmo@gmail.com",
        html: render(<EmailTemplate lead={lead} />, {
          pretty: true,
        }),
        subject: `Novo Lead - ${lead.organization}`,
      });
	  hasError = false;
      setAlert({ alertText: "Email enviado com sucesso!", type: "success" });
    } catch (error) {
      console.error(error);
      setAlert({
        alertText: "Ocorreu um erro ao enviar o email.",
        type: "error",
      });
    }
  };

  return (
    <div class="container w-full lg:px-16 xl:px-0">
      <div
        id="talk-with-us"
        class="size-full flex flex-col lg:flex-row bg-green-900 lg:bg-opacity-90 md:rounded-xl"
      >
        <div class="w-full h-auto lg:w-3/5 lg:px-28 pt-9 lg:py-[92px] bg-green-900 md:rounded-xl px-6 mb-9 lg:mb-0">
          <div class="h-full justify-between flex flex-col items-start text-left">
            <div class="mb-6 lg:max-w-[407px]">
              <h2 class="text-4xl lg:text-5xl font-bold text-slate mb-5 font-serif">
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
        <div class="w-full h-auto lg:w-2/5 lg:rounded-xl px-6 lg:px-16 pb-12 lg:py-24">
          {form && (
            <form
              onSubmit={handleSubmit}
              class="flex flex-col gap-6"
              noValidate
            >
              <div class="w-full gap-2">
                <Input
                  id="name"
                  name="name"
                  placeholder={form?.placeholder?.name ?? "Nome"}
                  class="w-full p-4 rounded-lg"
                />
                <Input
                  id="organization"
                  name="organization"
                  placeholder={
                    form?.placeholder?.organization ?? "Nome da organização"
                  }
                  class="w-full p-4 rounded-lg"
                />
                <div>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={
                      form?.placeholder?.phone ?? "Telefone (WhatsApp)"
                    }
                    class={`w-full p-4 rounded-lg ${
                      errors.phone ? "bg-error-50 !border-4 !border-error-100" : ""
                    }`}
                    required
                  />
                  {errors.phone && (
                    <p class="text-error-50 mb-2">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={form?.placeholder?.email ?? "E-mail"}
                    class={`w-full p-4 rounded-lg ${
						errors.email ? "bg-error-50 !border-4 !border-error-100" : ""
					  }`}
                    required
                  />
                  {errors.email && (
                    <p class="text-error-50 mb-2">{errors.email}</p>
                  )}
                </div>
                <textarea
                  id="message"
                  name="message"
                  class="w-full p-4 placeholder-dark text-dark text-lg rounded-[10px] py-[18px] border border-green-200 !outline-green-500 focus:border-"
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
                      required
                    />{" "}
                    Viveirista
                  </label>
                  <label class="mb-2">
                    <input
                      type="radio"
                      name="profile"
                      value="comprador"
                      class="mr-2"
                      required
                    />{" "}
                    Comprador de mudas
                  </label>
                  <label class="mb-2">
                    <input
                      type="radio"
                      name="profile"
                      value="outro"
                      class="mr-2"
                      required
                    />{" "}
                    Outro
                  </label>
                  {errors.profile && (
                    <p class="text-error-50">{errors.profile}</p>
                  )}
                </div>
              </div>
              <Button
                type="submit"
                class="w-fit font-bold text-lg text-dark py-3 rounded-lg"
              >
                {form.buttonLabel ?? "Enviar"}
              </Button>

              {alert && (
                <span
                  class={` ${
                    alert.type === "success"
                      ? "text-[#CEE1B6]"
                      : "text-error-50"
                  }`}
                >
                  {alert.alertText}
                </span>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
