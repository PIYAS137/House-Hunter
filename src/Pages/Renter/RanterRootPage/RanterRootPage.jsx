import { Outlet } from "react-router-dom";
import RanterMenu from "../../../Components/RenterComponents/RanterMenu";


const RanterRootPage = () => {
    return (
        <div>
            <div className="flex justify-between items-center border-b py-2 sticky top-0 bg-white z-50">
                <RanterMenu />
                <h1 className=" text-2xl font-semibold">Welcome to Ranter Dashboard</h1>
            </div>
            <Outlet />
        </div>
    )
}

export default RanterRootPage;