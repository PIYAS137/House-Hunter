import OwnerTableRow from "../../../Components/OwnerComponents/OwnerTableRow"


const OwnerMangePage = () => {

    return (
        <div className=" bg-red-500">
            <table className="table ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody className=" bg-red-200 ">
                    <OwnerTableRow />
                </tbody>
            </table>
        </div>
    )
}

export default OwnerMangePage;