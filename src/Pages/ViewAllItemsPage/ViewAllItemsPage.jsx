
import AllItemsSlice from "../../Components/AllItemsPageComponents/AllItemsSlice"
import SearchBarSlice from "../../Components/AllItemsPageComponents/SearchBarSlice"


const ViewAllItemsPage = () => {
  return (
    <div className="w-full flex-1 min-h-screen">
      <div className=" sticky top-16">
        <SearchBarSlice />
      </div>
      <div className=" ">
        <AllItemsSlice/>
      </div>
    </div>
  )
}

export default ViewAllItemsPage