import OwnerDashboardLeftSlice from "../../../Components/OwnerComponents/OwnerDashboardLeftSlice"
import OwnerDashboardRightSlice from "../../../Components/OwnerComponents/OwnerDashboardRightSlice"


const OwnerDashboard = () => {
    return (
        <div className=" md:h-screen md:overflow-hidden">
            <div className="  h-full flex flex-col-reverse md:grid md:grid-cols-3">
                <div className=" mt-10 md:mt-0 md:grid-cols-1 md:col-span-2  overflow-y-scroll">
                    <OwnerDashboardLeftSlice />
                </div>
                <div className=" md:col-span-1 border-l">
                    <OwnerDashboardRightSlice />
                </div>
            </div>
        </div>
    )
}

export default OwnerDashboard