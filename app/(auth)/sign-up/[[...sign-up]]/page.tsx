import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
