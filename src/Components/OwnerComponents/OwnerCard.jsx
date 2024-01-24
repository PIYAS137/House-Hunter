import { FaBed, FaCalendarCheck, FaCity, FaMaximize, FaMoneyBill, FaRegHandshake } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import usePublicAxios from "../../Hooks/usePublicAxios";
import Swal from 'sweetalert2';
import useGetOwnerData from "../../Hooks/useGetOwnerData";



const OwnerCard = ({ data }) => {

    const { _id, city, bedroom, date, price, image, status } = data;
    const publicAxios = usePublicAxios();
    const [,refetch] = useGetOwnerData();


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
                publicAxios.delete(`/item/${_id}`)
                    .then(res => {
                        console.log(res.data);
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
    const handleClickUpdate = () => {
        alert("UPDATE");
    }


    return (
        <div className=" bg-base-200 shadow-xl flex flex-col sm:flex-row justify-start rounded-xl overflow-hidden max-w-[800px] mx-auto mb-6">
            <img className="h-full max-h-40 object-cover" src={image} alt="" />
            <div className="flex-1 p-3 px-5 grid items-center">
                {
                    status === true && <p className=" flex items-center bg-red-300 text-gray-600 justify-center rounded-lg"><FaRegHandshake className=" mr-1 text-lg" />House is Sold</p>
                }
                <p className="text-sm md:text-base flex items-center capitalize"><FaCity className=" mr-1 text-lg" />{city}</p>
                <p className="text-sm md:text-base flex items-center"><FaBed className=" mr-1 text-lg" />{bedroom} Bedroom </p>
                <p className="text-sm md:text-base flex items-center"><FaCalendarCheck className=" mr-1 text-lg" />Free From {date} </p>
                <p className="text-sm md:text-base flex items-center"><FaMoneyBill className=" mr-1 text-lg" />{price} Taka /m</p>
            </div>
            <div className="flex justify-between flex-col">
                <NavLink to={`/update/${_id}`}><button className="btn btn-sm md:btn-md w-full hover:bg-blue-400 hover:text-white">Update</button></NavLink>
                <button onClick={handleClickDelete} className="btn btn-sm md:btn-md w-full hover:bg-red-500 hover:text-white">Delete</button>
                <Link to={`/allitems/${_id}`}><button className="btn btn-sm md:btn-md w-full hover:bg-purple-500 hover:text-white">View</button></Link>
            </div>
        </div>
    )
}

export default OwnerCard