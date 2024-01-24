
import { useEffect, useState } from "react";
import AllItemsSlice from "../../Components/AllItemsPageComponents/AllItemsSlice"
import SearchBarSlice from "../../Components/AllItemsPageComponents/SearchBarSlice"
import useGetAllHouses from "../../Hooks/useGetAllHouses";


const ViewAllItemsPage = () => {
  const [allHouse, refetch] = useGetAllHouses();
  const [datas, setDatas] = useState(allHouse);
  const [constantDatas, setConstantDatas] = useState(allHouse);

  useEffect(() => {
    setDatas(allHouse);
    setConstantDatas(allHouse);
  }, [allHouse]);


  const handleGetSearchResult = (arg) => {
    let temp = [...constantDatas];
    const { bedroom, city, pay, size } = arg;
    // search by price
    if (parseInt(pay) !== 0) {
      const x = temp.filter(one => parseInt(one?.price) <= pay);
      temp = x;
    }
    // search by bedroom number
    if (bedroom !== "") {
      const x = temp.filter(one => parseInt(one?.bedroom) <= parseInt(bedroom));
      temp = x;
    }
    // search by city
    if (city !== "") {
      const x = temp.filter(one=>one?.city === city);
      temp = x;
     }
    //  search by flat size
    if (size !== "") {
      const x = temp.filter(one=>parseInt(one?.size)<=parseInt(size));
      temp = x;
    }
    setDatas(temp);
  }







  return (
    <div className="w-full flex-1 min-h-screen">
      <div className=" lg:sticky top-16">
        <SearchBarSlice handleGetSearchResult={handleGetSearchResult} />
      </div>
      <div className=" ">
        <AllItemsSlice datas={datas} />
      </div>
    </div>
  )
}

export default ViewAllItemsPage