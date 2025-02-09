import { auth } from "@/auth";
import AddNewBoat from "@/components/addNewBoat/AddNewBoat";

const page = async () => {
  const session = await auth();
  return (
    <div>
      <AddNewBoat session={session?.user?.accessToken} />
    </div>
  );
};

export default page;
