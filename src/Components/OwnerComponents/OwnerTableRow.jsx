import Swal from 'sweetalert2';
import usePublicAxios from '../../Hooks/usePublicAxios';
import useGetOwnersReqRentData from '../../Hooks/useGetOwnersReqRentData';
import { Link } from 'react-router-dom';




const OwnerTableRow = ({ data }) => {
    const publickAxios = usePublicAxios();
    const [, refetch] = useGetOwnersReqRentData();

    const handleClickDeleteReq = () => {
        Swal.fire({
            title: "Want to Reject?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject it!"
        }).then((result) => {
            if (result.isConfirmed) {
                publickAxios.patch(`/request/${data?._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Rejected!",
                                text: "Request has been Rejected.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }
    const handleAcceptRequest = () => {
        Swal.fire({
            title: "Want to Accept?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Accept it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const ids = {
                    reqId: data?._id,
                    homeId: data?.houseId
                };
                publickAxios.put(`/request`, ids)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Accepted!",
                                text: "Request has been Accepted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    }).catch(err => {
                        console.log(err);
                    })
            }
        });
    }



    return (
        <>
            <tr className={`${data?.reqStatus == 'pending' ? "bg-green-200" : ""}`}>
                <td>{data?.userName}</td>
                <td>{data?.userEmail}</td>
                <td>{data?.userPhone}</td>
                <td>{data?.reqdate}</td>
                <td>
                    <Link to={`/allitems/${data?.houseId}`}><button className='btn btn-xs px-3 btn-primary'>view</button></Link>
                </td>
                <td>
                    {data?.reqStatus === 'pending' && <div>
                        <button onClick={handleAcceptRequest} className=" btn btn-xs btn-success text-white ml-1">Accept</button>
                        <button onClick={handleClickDeleteReq} className=" btn btn-xs btn-error text-white ml-1">Reject </button>
                    </div>}
                    {data?.reqStatus === 'deleted' && <>
                        <span className=" text-xs text-red-400 font-bold text-center px-3 rounded-lg py-1 inline-block">Rejected</span>
                    </>}
                    {data?.reqStatus === 'accepted' && <>
                        <span className=" text-xs text-green-600 font-bold text-center px-3 rounded-lg py-1 inline-block">Accepted</span>
                    </>}
                </td>
            </tr>
        </>
    )
}

export default OwnerTableRow