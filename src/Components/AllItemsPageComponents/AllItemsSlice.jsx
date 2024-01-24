import HomeCard from "../HomepageComponents/HomeCard"


const AllItemsSlice = ({datas}) => {




    return (
        <div className=" container mx-auto">
            <div className=" text-center mt-10">
                <h1 className=" text-yellow-600 text-3xl font-bold">Available Homes</h1>
                <p className=" mt-2 text-sm text-gray-400">" choose your favourite homes from here "</p>
                <p className=" text-gray-400">Total <span className=" font-semibold">{datas?.length}</span> items found</p>
            </div>
            <div className=" flex flex-wrap justify-center gap-10 my-20">
                {/* im showing only upbooked house here ! by the filter */}
                {
                    datas?.filter(one=>one?.status==false)?.map(one=><HomeCard key={one._id} data={one}/>)
                }
            </div>
        </div>
    )
}

export default AllItemsSlice