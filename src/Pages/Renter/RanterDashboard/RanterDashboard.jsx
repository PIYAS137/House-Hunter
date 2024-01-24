import RanterComponentLeftSlice from "../../../Components/RenterComponents/RanterComponentLeftSlice"
import RanterComponentRightSlice from "../../../Components/RenterComponents/RanterComponentRightSlice"


const RanterDashboard = () => {
    return (
        <div className=" md:h-screen md:overflow-hidden">
            <div className=" h-full flex flex-col-reverse md:grid md:grid-cols-3">
                <div className=" mt-10 md:mt-0 md:grid-cols-1 md:col-span-2  overflow-y-scroll">
                    <RanterComponentLeftSlice />
                </div>
                <div className=" md:col-span-1 border-l">
                    <RanterComponentRightSlice />
                </div>
            </div>
        </div>
    )
}

export default RanterDashboard;