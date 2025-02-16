import Link from "next/link";

const BoatOrderView = ({ orderDetails, session }: any) => {
  console.log("check vlaue tiem", orderDetails);

  return (
    <div className="container  pt-36 pb-20">
      <div className=" bg-white p-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#11142D]">Custom Details</h2>
        </div>
        <div className="border p-6">
          <div className="flex items-center space-x-8">
            <div className="relative w-[150px] h-[150px] border-2 rounded-full">
              {/* <Image
                src={"/asstest/image.png"}
                alt="User Picture"
                width={150}
                height={150}
                className="absolute inset-0 rounded-full"
              /> */}
            </div>

            <div className="relative overflow-x-auto">
              <table className="w-full text-left rtl:text-right text-xl font-medium ">
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-3 text-[#666666]">Customer Name:</td>
                    <td className="px-6 py-3 text-[#11142D]">
                      {orderDetails?.user?.name}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-3 text-[#666666]">Email:</td>
                    <td className="px-6 py-3 text-[#11142D]">
                      {orderDetails?.user?.email}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-10 max-w-[650px]">
            <div className="relative overflow-x-auto">
              <table className="w-full text-left rtl:text-right text-xl font-medium ">
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-3 text-[#666666]">Address:</td>
                    <td className="px-6 py-3 text-[#11142D]">
                      {/* {orderDetails?.address || "N/N"} */}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-3 text-[#666666]">Phone Number:</td>
                    <td className="px-6 py-3 text-[#11142D]">
                      {/* {orderDetails?.phone} */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Link
            href={"/settings"}
            className="px-4 py-2 border-2  text-white rounded-md font-medium text-base bg-primary hover:bg-hoverColor hover:text-white w-[140px]"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoatOrderView;
