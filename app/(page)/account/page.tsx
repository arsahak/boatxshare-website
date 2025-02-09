import { getUserData } from "@/app/action/user";
import AccountInfo from "@/components/account/AccountInfo";

const page = async () => {
  const { ok, data: userData, error } = await getUserData();

  return (
    <div className="">
      <AccountInfo userData={userData} />
    </div>
  );
};

export default page;
