
const HomeCard = ({data}) => {
    return (
        <div className="p-5 shadow-lg bg-yellow-600 space-y-4 rounded-lg max-w-[350px]">
            <img alt="Product Image" className="w-[350px] h-[275px] object-cover  rounded-lg " src={data?.image} />
            <div className="grid gap-2">
                <div className="flex justify-between">
                    <h1 className="text-lg font-semibold capitalize">{data?.city}</h1>
                    <div className="text-lg font-bold "><span className=" font-black">৳</span> {data?.price}</div>
                </div>
                <div className=" flex justify-between">
                    <p className="text-sm font-semibold">Bedrooms : {data?.bedroom}</p>
                    <p className="text-sm font-semibold">Room Size : {data?.size} Sqft</p>
                </div>

                <div className="font-semibold text-center text-sm  ">Available form {data?.date}</div>
            </div>
            <div className="flex gap-4">
                <button className="px-6 w-full py-2 bg-slate-800 text-white rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-950">View Details</button>
            </div>
        </div>
    );
}

export default HomeCard