import { Outlet } from "react-router-dom"
import OwnerMenu from "../../../Components/OwnerComponents/OwnerMenu"


const OwnerRootPage = () => {
    return (
        <div>
            <div className="flex justify-between items-center border-b py-2 sticky top-0 bg-white z-50">
                <OwnerMenu />
                <h1 className=" lg:text-2xl font-semibold pr-3">Welcome to Owner Dashboard</h1>
            </div>
            <Outlet />
        </div>
    )
}

export default OwnerRootPage;  