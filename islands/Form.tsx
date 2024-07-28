import { invoke } from "../runtime.ts";
import { render } from "apps/resend/utils/reactEmail.ts";
import { StripeWelcomeEmail } from "apps/resend/mailExamples/StripeWelcomeEmail.tsx";
import Button from "site/components/ui/Button.tsx";
import Input from "site/components/ui/Input/index.tsx";
import { JSX } from "preact/jsx-runtime";

const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
  e.preventDefault();

  await invoke.resend.actions.emails.send({
	  to: "igorcantelmo@gmail.com", // receiver optional
	  html: render(<StripeWelcomeEmail />, {
      // Convert your react email template when the action is triggered to HTML using render or pure HTML too
      pretty: true, //
    }),
    subject: "Formulário de contato | Resend App - Deco", // subject optional
  });
};

export default function Form() {
  return (
    <form onSubmit={handleSubmit}>
		<h1>Teste do email</h1>
      <Input
        id="name"
        placeholder="Nome"
        class="w-full p-4 rounded-lg"
        required
      />
      <Button type="submit">Enviar</Button>
    </form>
  );
}
