import { SignIn } from '@clerk/nextjs';

function SignInPage() {
  return (
    <section className="h-screen flex justify-center items-center">
      <SignIn />
    </section>
  );
}

export default SignInPage;
