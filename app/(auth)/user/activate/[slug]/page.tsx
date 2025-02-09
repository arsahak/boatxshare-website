import ActiveAccount from "@/components/userAuth/ActiveAccount";

const page = async ({ params }: any) => {
  const { slug } = await params;

  return (
    <div className="bg-secondary h-screen w-full flex items-center">
      <ActiveAccount token={slug} />
    </div>
  );
};

export default page;
