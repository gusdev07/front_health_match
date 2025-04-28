import { Header } from '../components/Header';
import { SigninForm } from '../components/SigninForm';

export default function SignIn() {
  return (
    <div>
      <Header
        title='Entrar'
        subtitle='Não tem uma conta?'
        extraTitle='Registre-se'
        redirect='signup'
      />
      <SigninForm />
    </div>
  );
}
