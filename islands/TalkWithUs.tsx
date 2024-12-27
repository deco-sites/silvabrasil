import type { JSX } from "preact";
import { useState } from "preact/hooks";
import { invoke } from "../runtime.ts";
import { render } from "apps/resend/utils/reactEmail.ts";
import Button from "site/components/ui/Button.tsx";
import Input from "site/components/ui/Input/index.tsx";
import Icon from "site/components/ui/Icon.tsx";
import { useUI } from "site/sdk/useUI.ts";
import textContent from "site/content/text-lang.ts";

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
  cta,
  form,
}: Props) {
  const [errors, setErrors] = useState({
    phone: "",
    email: "",
    profile: "",
  });
  const [alert, setAlert] = useState({isActive: false,  alertText: "", type: "" });
  const { languageSwitcher } = useUI();

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
      newErrors.phone = languageSwitcher.value === "pt" 
        ? "Opa, não foi preenchido. Por favor, preencha seu WhatsApp."
        : "Oops, it wasn't filled in. Please provide your WhatsApp number.";
      hasError = true;
    }

    if (!lead.email) {
      newErrors.email = languageSwitcher.value === "pt"
        ? "Opa, não foi preenchido. Por favor, preencha seu e-mail."
        : "Oops, it wasn't filled in. Please provide your email.";
      hasError = true;
    }

    if (lead.phone && !/^\d+$/.test(lead.phone)) {
      newErrors.phone = languageSwitcher.value === "pt"
        ? "Opa, o telefone digitado não parece correto. Confira e tente novamente."
        : "Oops, the phone number you entered doesn't seem right. Check it and try again.";
      hasError = true;
    }

    if (lead.email && !/\S+@\S+\.\S+/.test(lead.email)) {
      newErrors.email = languageSwitcher.value === "pt"
        ? "Opa, o e-mail digitado não parece correto. Confira e tente novamente."
        : "Oops, the email you entered doesn't seem right. Check it and try again.";
      hasError = true;
    }

    if (!lead.profile) {
      newErrors.profile = languageSwitcher.value === "pt"
        ? "Opa, não foi preenchido. Por favor, escolha uma das opções."
        : "Oops, it wasn't filled in. Please choose one of the options.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    try {
      await invoke.resend.actions.emails.send({
        from: 'Silva Brasil Lead <ferramentas-tech@silvabrasil.bio>',
        to: "contato@silvabrasil.bio",
        html: render(<EmailTemplate lead={lead} />, {
          pretty: true,
        }),
        text: "Lead email content",
        subject: `Novo Lead - ${lead.organization}`,
      });
	  hasError = false;
      setAlert({
        isActive: false,
        alertText: languageSwitcher.value === "pt"
          ? "Email enviado com sucesso!"
          : "Email sent successfully!",
        type: "success"
      });
    } catch (error) {
      console.error(error);
      setAlert({
        isActive: true,
        alertText: languageSwitcher.value === "pt"
          ? "Ocorreu um erro ao enviar o email."
          : "An error occurred while sending the email.",
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
                {textContent[languageSwitcher.value].contactSection.title}
              </h2>
              <h3 class="text-xl text-white mb-6">{textContent[languageSwitcher.value].contactSection.subtitle}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: `<span class="text-white text-left text-base">${textContent[languageSwitcher.value].contactSection.text}</span>`,
                }}
              ></p>
            </div>
            <a
              href={cta?.href}
              target={cta?.href.includes("http") ? "_blank" : "_self"}
              class="inline-flex items-center justify-center font-bold text-base bg-green-500 text-white py-4 px-6 rounded-lg transform transition duration-400
			opacity-90 hover:opacity-100"
            >
              <Icon id="WhatsApp" width={14} height={16} class="mr-2" />
              {textContent[languageSwitcher.value].contactSection.mobileButton}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
