import UserSignInForm from "./UserSignInForm";

const UserSignin = () => {
  return (
    <section className="flex justify-center items-center min-h-screen w-full">
      <div className="w-[900px]">
        <div className="">
          <UserSignInForm />
        </div>
      </div>
    </section>
  );
};

export default UserSignin;
