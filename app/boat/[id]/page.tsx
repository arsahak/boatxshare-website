import BoatDetails from "@/components/pages/BoatDetails/BoatDetails";

const page = ({params}) => {
    const {id} = params;
    return (
        <div>
            <BoatDetails/>
        </div>
    );
};

export default page;