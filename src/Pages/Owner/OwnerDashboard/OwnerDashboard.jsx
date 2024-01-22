import OwnerDashboardLeftSlice from "../../../Components/OwnerComponents/OwnerDashboardLeftSlice"
import OwnerDashboardRightSlice from "../../../Components/OwnerComponents/OwnerDashboardRightSlice"


const OwnerDashboard = () => {
    return (
        <div className=" h-screen overflow-hidden">
            <div className="  h-full grid grid-cols-3">
                <div className=" col-span-2  overflow-y-scroll">
                    <OwnerDashboardLeftSlice />
                </div>
                <div className=" col-span-1 border-l">
                    <OwnerDashboardRightSlice />
                </div>
            </div>
        </div>
    )
}

export default OwnerDashboard