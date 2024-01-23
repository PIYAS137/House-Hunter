import { FaHouseChimney, FaFileImport } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import useGetOwnerData from "../../Hooks/useGetOwnerData";
import { useContext } from "react";
import { CentralContext } from "../../Contexts/CentralContextComp";


const OwnerDashboardRightSlice = () => {

    const [ownerData,] = useGetOwnerData();
    const {user} = useContext(CentralContext);




    return (
        <div className=" flex flex-col items-center mt-16">
            <div className=" relative">
                <img className=" max-w-36 aspect-square object-cover rounded-full" src={user?.photo} alt="" />
                <p className=" absolute -right-5 bottom-0 bg-green-600 text-white font-semibold uppercase rounded-lg p-2 text-xs">Owner</p>
            </div>
            <div className=" mt-8 text-center">
                <h1 className=" text-lg font-semibold">{user?.name}</h1>
                <h1 className=" text-sm text-yellow-700">{user?.email}</h1>
            </div>
            <div className=" mt-3">
                <h1 className=" space-x-2 text-lg flex items-center"><FaHouseChimney className=" mr-2" /> House Posted <span className="font-bold">: {ownerData?.length}</span></h1>
                <h1 className=" space-x-2 text-lg flex items-center"><FaFileImport className=" mr-2" /> Rent Request <span className="font-bold">: 00</span></h1>
            </div>
            <div className="space-x-3 mt-8">
                <Link to={'/owner/add'}><button className="btn btn-sm bg-yellow-400 shadow-lg">+ Add New House</button></Link>
                <Link to={'/owner/manage'}><button className="btn btn-sm bg-yellow-400 shadow-lg"> Manage Houses</button></Link>
            </div>
        </div>
    )
}

export default OwnerDashboardRightSlice