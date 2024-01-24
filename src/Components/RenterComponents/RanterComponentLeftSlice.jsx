import useGetRanterDatas from "../../Hooks/useGetRanterDatas";
import RanterCard from "./RanterCard";


const RanterComponentLeftSlice = () => {

    const [raterData, refetch] = useGetRanterDatas();



    return (
        <div className=" h-full">
            <h1 className=" text-center py-3 font-black text-2xl uppercase sticky top-0 bg-white">House Requests</h1>
            <div className=" w-full h-full flex justify-center items-start gap-5 border-t p-10">



                {
                    raterData?.map(one => <RanterCard key={one._id} data={one} />)
                }



            </div>
        </div>
    )
}

export default RanterComponentLeftSlice