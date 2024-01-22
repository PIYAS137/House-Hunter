import { FaBath, FaBed, FaCalendar, FaCity, FaMaximize, FaMoneyBill } from "react-icons/fa6";

const OwnerDashboardLeftSlice = () => {
  return (
    <div className=" h-full">
      <h1 className=" text-center py-3 font-black text-2xl uppercase sticky top-0 bg-white">My Added Houses</h1>
      <div className=" w-full h-full border-t p-10">





        <div className=" bg-base-200 shadow-xl flex justify-start rounded-xl overflow-hidden">
          <img className="h-full max-h-40 object-cover" src="https://i.pinimg.com/564x/a1/47/b2/a147b23deeec095f7b9de2f6582af9a3.jpg" alt="" />
          <div className="flex-1 p-3 px-5 grid items-center">
              <p className=" flex items-center"><FaCity className=" mr-1 text-lg" />Dhaka </p>
              <p className=" flex items-center"><FaBed className=" mr-1 text-lg" />4 Bedroom </p>
              <p className=" flex items-center"><FaBath className=" mr-1 text-lg" />5 Bathroom </p>
              {/* <p className=" flex items-center"><FaMaximize className=" mr-1 text-lg" />5000 Sq. feet </p> */}
              <p className=" flex items-center"><FaCalendar className=" mr-1 text-lg" />Free From 11-06-2024 </p>
              <p className=" flex items-center"><FaMoneyBill className=" mr-1 text-lg" />5000 Taka /m</p>
            </div>
          <div className="flex justify-between items-end flex-col ">
            <button className="btn w-full">Update</button>
            <button className="btn w-full">Delete</button>
            <button className="btn w-full">View</button>
          </div>
        </div>





      </div>
    </div>
  )
}

export default OwnerDashboardLeftSlice