import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom"
import MakeRequest from "../../Components/OneItemPageComponents/MakeRequest";
import usePublicAxios from "../../Hooks/usePublicAxios";
import Swal from 'sweetalert2';


const OneItemViewPage = () => {

    const data = useLoaderData();
    const x = useLocation(); 
    const publicAxios = usePublicAxios();
    const navigate = useNavigate();

    const handleClickDelete = () => {
        Swal.fire({
            title: "Are you sure to Delete it?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                publicAxios.delete(`/ranter/${x?.state?.reqId}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            navigate(-1);
                        }else{
                            Swal.fire({
                                title: "Something Wrong!",
                                text: "We are not able to delete it!",
                                icon: "error"
                            });
                        }
                    }).catch(err => {
                        console.log(err);
                    })
            }
        });
    }

    if (data === '') {
        return <div className="py-16 flex-col w-full flex justify-center items-center">
            <p className=" text-red-400 italic">Maybe the owner of this house deleted this house!</p>
            <p className=" text-xl font-bold text-red-600">:(</p>
            <button onClick={handleClickDelete} className=" btn btn-error text-white btn-sm mt-10">Want to Delete this Req ?</button>
        </div>
    }



    return (
        <div className=" h-full flex flex-col-reverse md:grid md:grid-cols-3">
            <div className="  col-span-2">
                <h1 className=" border-b py-2 text-2xl font-black text-center uppercase bg-white">Home Details</h1>
                <div className=" w-full flex justify-center mt-5 overflow-hidden ">
                    <img className=" max-w-lg aspect-square object-contain" src={data?.image} alt="" />
                </div>
                <table className=" w-full mt-10 max-w-xl mx-auto border my-10 text-xs lg:text-base ">
                    <tbody>
                        <tr className=" grid grid-cols-3 border-b ">
                            <td className=" col-span-1 p-2 border-r font-bold flex items-center">City </td>
                            <td className=" col-span-2 p-2 border-r flex items-center capitalize">{data?.city} </td>
                        </tr>
                        <tr className=" grid grid-cols-3 border-b">
                            <td className="col-span-1 p-2 border-r font-bold flex items-center">Full Address </td>
                            <td className="col-span-2 p-2 border-r flex items-center capitalize">{data?.address} </td>
                        </tr>
                        <tr className=" grid grid-cols-3 border-b">
                            <td className="col-span-1 p-2 border-r font-bold flex items-center">Bed Rooms</td>
                            <td className="col-span-2 p-2 border-r flex items-center capitalize">{data?.bedroom} </td>
                        </tr>
                        <tr className=" grid grid-cols-3 border-b">
                            <td className="col-span-1 p-2 border-r font-bold flex items-center">Flat Size (sq.feet)</td>
                            <td className="col-span-2 p-2 border-r flex items-center capitalize">{data?.size} </td>
                        </tr>
                        <tr className=" grid grid-cols-3 border-b">
                            <td className="col-span-1 p-2 border-r font-bold flex items-center">Available From</td>
                            <td className="col-span-2 p-2 border-r flex items-center capitalize">{data?.date} </td>
                        </tr>
                        <tr className=" grid grid-cols-3">
                            <td className="col-span-1 p-2 border-r font-bold flex items-center">Othe Details</td>
                            <td className="col-span-2 p-2 border-r flex items-center capitalize">{data?.describe} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className=" border-l col-span-1 flex flex-col py-16 items-center">
                <img className=" w-32 aspect-square object-cover rounded-full" src={data?.ownerImage} alt="" />
                <table className=" w-full mt-16 text-xs lg:text-base ">
                    <tbody>
                        <tr className=" grid grid-cols-3 border-y ">
                            <td className=" col-span-1 p-2 border-r font-bold flex items-center">Owner Name </td>
                            <td className=" col-span-2 p-2 border-r flex items-center capitalize">{data?.name} </td>
                        </tr>
                        <tr className=" grid grid-cols-3 border-y ">
                            <td className=" col-span-1 p-2 border-r font-bold flex items-center">Owner Email </td>
                            <td className=" col-span-2 p-2 border-r flex items-center capitalize">{data?.email} </td>
                        </tr>
                        <tr className=" grid grid-cols-3 border-y ">
                            <td className=" col-span-1 p-2 border-r font-bold flex items-center">Owner Phone </td>
                            <td className=" col-span-2 p-2 border-r flex items-center capitalize">{data?.phone} </td>
                        </tr>
                        <tr className=" grid grid-cols-3 border-y ">
                            <td className=" col-span-1 p-2 border-r font-bold flex items-center">Post Create </td>
                            <td className=" col-span-2 p-2 border-r flex items-center capitalize">{data?.create} </td>
                        </tr>
                    </tbody>
                </table>
                <MakeRequest data={data} />
            </div>
        </div>
    )
}

export default OneItemViewPage;