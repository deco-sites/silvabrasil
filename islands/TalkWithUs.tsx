
import type { JSX } from 'preact';
import { invoke } from '../runtime.ts';
import { render } from 'apps/resend/utils/reactEmail.ts';
import Button from 'site/components/ui/Button.tsx';
import Input from 'site/components/ui/Input/index.tsx';
import Icon from 'site/components/ui/Icon.tsx';

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
    <p><strong>Timestamp:</strong> {new Date().toLocaleString()}</p>
    <p><strong>Nome:</strong> {lead.name}</p>
    <p><strong>Nome da organização:</strong> {lead.organization}</p>
    <p><strong>Telefone:</strong> {lead.phone}</p>
    <p><strong>E-mail:</strong> {lead.email}</p>
    <p><strong>Perfil:</strong> {lead.profile}</p>
    <p><strong>Mensagem:</strong> {lead.message}</p>
  </div>
);

export default function TalkWithUsSection({
  title,
  subTitle,
  description = "my description",
  cta,
  form,
}: Props) {
  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const lead = {
      name: formData.get('name') as string,
      organization: formData.get('organization') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
	  profile: formData.get('profile') as string,
      message: formData.get('message') as string,
    };

    try {
      await invoke.resend.actions.emails.send({
        to: 'igorcantelmo@gmail.com',
        html: render(<EmailTemplate lead={lead} />, {
          pretty: true,
        }),
        subject: `Novo Lead - ${lead.organization}`,
      });
      alert('Email enviado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao enviar o email.');
    }
  };

  return (
    <div className="container w-full lg:px-16 xl:px-0">
      <div id="talk-with-us" className="size-full flex flex-col lg:flex-row bg-green-900 lg:bg-opacity-90 md:rounded-xl">
        <div className="w-full h-auto lg:w-3/5 lg:px-28 pt-9 lg:py-[92px] bg-green-900 md:rounded-xl px-6 mb-9 lg:mb-0">
          <div className="h-full justify-between flex flex-col items-start text-left">
            <div className="mb-6 lg:max-w-[407px]">
              <h2 className="text-4xl lg:text-5xl font-bold max-w-[398px] text-slate mb-2 font-serif">
                {title}
              </h2>
              <h3 className="text-xl text-white mb-6">{subTitle}</h3>
              <p dangerouslySetInnerHTML={{ __html: `<span class="text-white text-left text-base">${description}</span>` }}></p>
            </div>
            <a href={cta?.href} target={cta?.href.includes("http") ? "_blank" : "_self"} className="inline-flex items-center justify-center font-bold text-base bg-green-500 text-white py-4 px-6 rounded-lg transform transition duration-400 hover:scale-105">
              <Icon id="WhatsApp" width={14} height={16} className="mr-2" />
              {cta?.text}
            </a>
          </div>
        </div>
        <div className="w-full h-auto lg:w-2/5 lg:rounded-xl px-6 lg:px-16 pb-12 lg:py-24">
          {form && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="w-full gap-2">
                <Input id="name" name="name" placeholder={form?.placeholder?.name ?? "Nome"} className="w-full p-4 rounded-lg" required />
                <Input id="organization" name="organization" placeholder={form?.placeholder?.organization ?? "Nome da organização"} className="w-full p-4 rounded-lg" required />
                <Input id="phone" name="phone" type="tel" placeholder={form?.placeholder?.phone ?? "Telefone (WhatsApp)"} className="w-full p-4 rounded-lg" required />
                <Input id="email" name="email" type="email" placeholder={form?.placeholder?.email ?? "E-mail (opcional)"} className="w-full p-4 rounded-lg" />
                <textarea id="message" name="message" className="w-full p-4 rounded-lg" placeholder={form?.placeholder?.message ?? "Sua mensagem aqui (opcional)"} />
              </div>
              <div className="w-full text-white">
                <label className="block mb-2">Com qual perfil você se identifica?</label>
                <div className="flex flex-col">
                  <label className="mb-2">
                    <input type="radio" name="profile" value="viveirista" className="mr-2" /> Viveirista
                  </label>
                  <label className="mb-2">
                    <input type="radio" name="profile" value="comprador" className="mr-2" /> Comprador de mudas
                  </label>
                  <label className="mb-2">
                    <input type="radio" name="profile" value="outro" className="mr-2" /> Outro
                  </label>
                </div>
              </div>
              <Button type="submit" className="w-fit font-bold text-lg text-dark py-3 rounded-lg">
                {form.buttonLabel ?? "Enviar"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
