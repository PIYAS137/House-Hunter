import useGetOwnerData from "../../Hooks/useGetOwnerData"
import OwnerCard from "./OwnerCard";


const OwnerDashboardLeftSlice = () => {


  const [ownerData,] = useGetOwnerData();



  return (
    <div className=" h-full ">
      <h1 className=" text-center py-3 font-black text-2xl uppercase sticky top-0 bg-white border-b">My Added Houses</h1>
      <div className=" w-full h-full p-10">



        {
          ownerData?.map(one=><OwnerCard key={one._id} data={one}/>)
        }





      </div>
    </div>
  )
}

export default OwnerDashboardLeftSlice