import { getAllBoatOrderList } from "@/app/action/boatList";
import { auth } from "@/auth";
import BoatOrderView from "@/components/addNewBoat/boatOrderView";

const page = async ({ params }: any) => {
  const { id } = await params;

  const session = await auth();

  const order = await getAllBoatOrderList();

  const orderDetails = order.data?.orders?.find((el: any) => el._id === id);

  return (
    <div className="">
      <BoatOrderView
        orderDetails={orderDetails}
        session={session?.user?.accessToken}
      />
    </div>
  );
};

export default page;
