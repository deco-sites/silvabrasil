interface EmailTemplateProps {
  lead: {
    organizationName: string;
    timestamp: string;
    name: string;
    phone: string;
    email: string;
    message: string;
  };
}

const EmailTemplate = ({ lead }: EmailTemplateProps) => {
  const { organizationName, timestamp, name, phone, email, message } = lead;

  return (
    <div>
      <h2>Assunto: Novo Lead - {organizationName}</h2>
      <p>Novo lead recebido em silvabrasil.bio</p>
      <p>
        <strong>Timestamp:</strong> {timestamp}
      </p>
      <p>
        <strong>Nome:</strong> {name}
      </p>
      <p>
        <strong>Nome da organização:</strong> {organizationName}
      </p>
      <p>
        <strong>Telefone:</strong> {phone}
      </p>
      <p>
        <strong>E-mail:</strong> {email}
      </p>
      <p>
        <strong>Mensagem:</strong> {message}
      </p>
    </div>
  );
};

export default EmailTemplate;
