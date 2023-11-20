import { SignUp } from '@clerk/nextjs';

function SignUpPage() {
  return (
    <section className="h-screen flex justify-center items-center">
      <SignUp />
    </section>
  );
}

export default SignUpPage;
