import UserSignInForm from "@/components/userAuth/UserSignInForm";

const page = async () => {
  return (
    <div className="bg-secondary h-screen w-full flex items-center">
      <UserSignInForm />
    </div>
  );
};

export default page;
