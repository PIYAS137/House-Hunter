import { FaBath, FaBed, FaCalendarCheck, FaCity, FaMaximize, FaMoneyBill } from "react-icons/fa6";

const OwnerCard = ({data}) => {

    const {_id,city, bedroom,date,price} = data;

    return (
        <div className=" bg-base-200 shadow-xl flex justify-start rounded-xl overflow-hidden max-w-[800px] mx-auto mb-6">
            <img className="h-full max-h-40 object-cover" src="https://i.pinimg.com/564x/a1/47/b2/a147b23deeec095f7b9de2f6582af9a3.jpg" alt="" />
            <div className="flex-1 p-3 px-5 grid items-center">
                <p className=" flex items-center capitalize"><FaCity className=" mr-1 text-lg" />{city}</p>
                <p className=" flex items-center"><FaBed className=" mr-1 text-lg" />{bedroom} Bedroom </p>
                {/* <p className=" flex items-center"><FaBath className=" mr-1 text-lg" />5 Bathroom </p> */}
                <p className=" flex items-center"><FaCalendarCheck className=" mr-1 text-lg" />Free From {date} </p>
                <p className=" flex items-center"><FaMoneyBill className=" mr-1 text-lg" />{price} Taka /m</p>
            </div>
            <div className="flex justify-between items-end flex-col ">
                <button className="btn w-full">Update</button>
                <button className="btn w-full">Delete</button>
                <button className="btn w-full">View</button>
            </div>
        </div>
    )
}

export default OwnerCard