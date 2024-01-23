import { FaBed, FaCalendar, FaCity, FaMaximize, FaMoneyBill } from "react-icons/fa6";


const RanterCard = () => {
    return (
        <div className=" bg-base-200 shadow-xl flex justify-start rounded-xl overflow-hidden mb-5 max-w-[800px] mx-auto">
            <img className="h-full max-h-40 object-cover" src="https://i.pinimg.com/564x/a1/47/b2/a147b23deeec095f7b9de2f6582af9a3.jpg" alt="" />
            <div className="flex-1 p-3 px-5 grid items-center">
                <p className=" flex items-center"><FaCity className=" mr-1 text-lg" />Dhaka </p>
                <p className=" flex items-center"><FaBed className=" mr-1 text-lg" />4 Bedroom </p>
                <p className=" flex items-center"><FaMaximize className=" mr-1 text-lg" />5000 Sq. feet </p>
                <p className=" flex items-center"><FaCalendar className=" mr-1 text-lg" />Free From 11-06-2024 </p>
                <p className=" flex items-center"><FaMoneyBill className=" mr-1 text-lg" />5000 Taka /m</p>
            </div>

            <div className="flex justify-around items-end flex-col ">
                <button className="btn w-full hover:bg-red-500 hover:text-white">Delete</button>
                <button className="btn w-full hover:bg-purple-500 hover:text-white">View</button>
            </div>
        </div>
    )
}

export default RanterCard