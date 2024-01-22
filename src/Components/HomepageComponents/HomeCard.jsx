
const HomeCard = () => {
    return (
        <div className="p-6 shadow-lg bg-yellow-600 space-y-4 rounded-lg">
            <img alt="Product Image" className="w-[350px] h-[275px] object-cover  rounded-lg " src="https://source.unsplash.com/200x200/?bed" />
            <div className="grid gap-2">
                <div className="flex justify-between">
                    <h1 className="text-lg font-semibold ">Dhaka</h1>
                    <div className="text-lg font-bold  ">$99.99</div>
                </div>
                <div className=" flex justify-between">
                    <p className="text-sm">Bedrooms : 5</p>
                    <p className="text-sm">Room Size : 5000 Sqft</p>
                </div>

                <div className="font-semibold text-center text-sm  ">Available form 11-15-2024</div>
            </div>
            <div className="flex gap-4">
                <button className="px-6 w-full py-2 bg-slate-800 text-white rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-950">View Details</button>
            </div>
        </div>
    );
}

export default HomeCard