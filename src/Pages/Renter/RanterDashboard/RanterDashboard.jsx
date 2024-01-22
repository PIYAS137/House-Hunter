import RanterComponentLeftSlice from "../../../Components/RenterComponents/RanterComponentLeftSlice"
import RanterComponentRightSlice from "../../../Components/RenterComponents/RanterComponentRightSlice"


const RanterDashboard = () => {
    return (
        <div className=" h-screen overflow-hidden">
            <div className="  h-full grid grid-cols-3">
                <div className=" col-span-2  overflow-y-scroll">
                    <RanterComponentLeftSlice />
                </div>
                <div className=" col-span-1 border-l">
                    <RanterComponentRightSlice />
                </div>
            </div>
        </div>
    )
}

export default RanterDashboard;