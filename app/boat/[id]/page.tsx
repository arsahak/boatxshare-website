import BoatDetails from "@/components/pages/BoatDetails/BoatDetails";
interface Params {
    id: string;
}

const page = ({ params }: { params: Params }) => {
    const {id} = params;
    return (
        <div>
            <BoatDetails/>
        </div>
    );
};

export default page;