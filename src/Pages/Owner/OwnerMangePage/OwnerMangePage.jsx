import OwnerTableRow from "../../../Components/OwnerComponents/OwnerTableRow"
import useGetOwnersReqRentData from "../../../Hooks/useGetOwnersReqRentData";


const OwnerMangePage = () => {

    const [allReqs, refetch] = useGetOwnersReqRentData();
    console.log(allReqs);


    return (
        <div className="container mx-auto ">
            <h1 className=" text-center font-bold text-lg py-10">See Who make Req for you Home</h1>
            <table className="table ">
                <thead className=" bg-orange-500 text-white">
                    <tr>
                        <th>Ranter Name</th>
                        <th>Ranter Email</th>
                        <th>Ranter Phone</th>
                        <th>Req. Date</th>
                        <th>View House</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="  ">
                    {
                        allReqs?.map(one => <OwnerTableRow key={one._id} data={one} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OwnerMangePage;