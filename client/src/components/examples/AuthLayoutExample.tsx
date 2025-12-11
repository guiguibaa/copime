import AuthLayout from "../AuthLayout";
import FormInput from "../FormInput";
import FormButton from "../FormButton";

export default function AuthLayoutExample() {
  return (
    <AuthLayout
      title="Login"
      footerText="Não possui conta? Então"
      footerLinkText="realize o cadastro"
      footerLinkHref="/cadastro"
    >
      <form className="flex flex-col gap-3">
        <FormInput name="email" type="email" label="*E-mail" />
        <FormInput name="password" type="password" label="*Senha" />
        <FormButton>Entrar</FormButton>
      </form>
    </AuthLayout>
  );
}
