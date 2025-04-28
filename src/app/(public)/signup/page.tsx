import { Header } from '../components/Header';
import { SignupForm } from '../components/SignupForm';

export default function Signup() {
  return (
    <div className='w-full'>
      <Header title='Registrar' subtitle='Insira suas informações' />
      <SignupForm />
    </div>
  );
}
