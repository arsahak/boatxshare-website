import { getUserData } from "@/app/action/user";
import Navbar from "./Navbar";

const MainNavbar = async () => {
  const { ok, data: userData, error } = await getUserData();

  return (
    <div>
      <Navbar userData={userData} />
    </div>
  );
};

export default MainNavbar;
