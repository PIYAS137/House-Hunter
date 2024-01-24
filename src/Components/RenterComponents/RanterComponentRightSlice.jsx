import { useContext } from "react";
import { FaFileImport } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CentralContext } from "../../Contexts/CentralContextComp";
import useGetRanterDatas from "../../Hooks/useGetRanterDatas";



const RanterComponentRightSlice = () => {

    const {user} = useContext(CentralContext);
    const [raterData, refetch] = useGetRanterDatas();


    return (
        <div className=" flex flex-col items-center mt-16">

            <div className=" relative">
                <img className=" max-w-36 aspect-square object-cover rounded-full" src={user?.photo} alt="" />
                <p className=" absolute -right-5 bottom-0 bg-purple-500 text-white font-semibold uppercase rounded-lg p-2 text-xs">Ranter</p>
            </div>

            <div className=" mt-8">
                <h1 className=" text-lg font-semibold">{user?.name}</h1>
                <h1 className=" text-sm text-yellow-700">{user?.email}</h1>
            </div>

            <div className=" mt-3">
                <h1 className=" space-x-2 text-sm flex items-center"><FaFileImport className=" mr-2" />Available Rent Request <span className="font-bold">: {2-raterData?.length}</span></h1>
            </div>

            <div className="space-x-3 mt-8">
                <Link to={'/allitems'}>
                    <button className="btn btn-sm bg-yellow-400 border border-yellow-500 shadow-lg"> Search New Home</button>
                </Link>
            </div>

        </div>
    )
}

export default RanterComponentRightSlice;