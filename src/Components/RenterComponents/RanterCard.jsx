import { FaCalendar, FaHouse } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import usePublicAxios from "../../Hooks/usePublicAxios";
import Swal from 'sweetalert2';
import useGetRanterDatas from "../../Hooks/useGetRanterDatas";


const RanterCard = ({ data }) => {
    console.log(data);

    const publicAxios = usePublicAxios();
    const [, refetch] = useGetRanterDatas();

    const handleClickDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                publicAxios.delete(`/ranter/${data?._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    }).catch(err => {
                        console.log(err);
                    })
            }
        });
    }

    return (
        <div className=" bg-base-200 shadow-xl border flex justify-start rounded-xl overflow-hidden mb-5 max-w-[800px] mx-auto">
            <div className="flex-1 p-4 px-5">
                <span className=" text-xs rounded-lg text-white py-1 mb-3 inline-block">
                    {data?.reqStatus === 'pending' && <span className=" bg-purple-400 px-3 py-1 rounded-lg ">pending</span>}
                    {data?.reqStatus === 'accepted' && <span className=" bg-green-600 px-3 py-1 rounded-lg ">accepted</span>}
                    {data?.reqStatus === 'deleted' && <span className=" bg-red-400 px-3 py-1 rounded-lg ">deleted</span>}
                </span>
                <p className=" flex items-center"><FaHouse className=" mr-1 text-lg" /><span className=" font-bold">ID : </span> {data?._id} </p>
                <p className=" flex items-center"><FaCalendar className=" mr-1 text-lg" /><span className=" font-bold">Request Date:</span> {data?.reqdate} </p>
            </div>

            <div className="flex justify-around items-end flex-col ">
                <button onClick={handleClickDelete} className="btn w-full hover:bg-red-500 hover:text-white">Delete</button>
                <Link state={{reqId : data?._id}} to={`/allitems/${data?.houseId}`} className="w-full"><button className="btn w-full hover:bg-blue-500 hover:text-white">View</button></Link>
            </div>
        </div>
    )
}

export default RanterCard