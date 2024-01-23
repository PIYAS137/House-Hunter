import useGetAllHouses from "../../Hooks/useGetAllHouses"
import HomeCard from "../HomepageComponents/HomeCard"


const AllItemsSlice = () => {

    const [allHouse,refetch] = useGetAllHouses();



    return (
        <div className=" container mx-auto">
            <div className=" text-center mt-10">
                <h1 className=" text-yellow-600 text-3xl font-bold">Available Homes</h1>
                <p className=" mt-2 text-sm text-gray-400">" choose your favourite homes from here "</p>
            </div>
            <div className=" flex flex-wrap justify-center gap-10 my-20">
                {
                    allHouse.map(one=><HomeCard key={one._id} data={one}/>)
                }
            </div>
        </div>
    )
}

export default AllItemsSlice