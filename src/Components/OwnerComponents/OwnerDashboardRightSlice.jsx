import { FaHouseChimney, FaFileImport } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import useGetOwnerData from "../../Hooks/useGetOwnerData";


const OwnerDashboardRightSlice = () => {

    const [ownerData,] = useGetOwnerData();




    return (
        <div className=" flex flex-col items-center mt-16">
            <div className=" relative">
                <img className=" max-w-36 aspect-square object-cover rounded-full" src="https://i.pinimg.com/564x/12/5a/93/125a9373d5179db49e97f158be3065bc.jpg" alt="" />
                <p className=" absolute -right-5 bottom-0 bg-green-600 text-white font-semibold uppercase rounded-lg p-2 text-xs">Owner</p>
            </div>
            <div className=" mt-8">
                <h1 className=" text-lg font-semibold">S M Piyas Mahamud Alif</h1>
                <h1 className=" text-sm text-yellow-700">piyasmahmudealif@gmail.com</h1>
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