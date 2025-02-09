import Image from "next/image";
import Link from "next/link";
import { TbEditCircle } from "react-icons/tb";
// import { formatDate } from "../shared/ui/DateFormat";

const AccountInfo = ({ userData }: any) => {
  console.log("check user data info", userData);

  return (
    <div className="container  pt-36 pb-20">
      <div className=" bg-white p-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#11142D]">
            User Information
          </h2>
        </div>
        <div className="border p-6">
          <div className="flex items-center space-x-8">
            <div className="relative w-[150px] h-[150px] border-2 rounded-full">
              <Image
                src={userData?.logoUrl || "/asstest/image.png"}
                alt="User Picture"
                width={150}
                height={150}
                className="absolute inset-0 rounded-full"
              />

              <div className=" bg-primary hover:bg-hoverColor p-1 flex items-center justify-center w-8 h-8 border border-white rounded-full absolute bottom-5 right-6 translate-x-1/2 translate-y-1/2 cursor-pointer">
                <TbEditCircle className="text-white text-xl" />
              </div>
            </div>

            <div className="relative overflow-x-auto">
              <table className="w-full text-left rtl:text-right text-xl font-medium ">
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-3 text-[#666666]">User Name:</td>
                    <td className="px-6 py-3 text-[#11142D]">
                      {userData?.name}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-3 text-[#666666]">Email:</td>
                    <td className="px-6 py-3 text-[#11142D]">
                      {userData?.email}
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
                      {userData?.address || "N/N"}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-3 text-[#666666]">Phone Number:</td>
                    <td className="px-6 py-3 text-[#11142D]">
                      {userData?.phone}
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

export default AccountInfo;
