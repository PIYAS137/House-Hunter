import { FaBed, FaCalendarCheck, FaCity, FaMaximize, FaMoneyBill } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import usePublicAxios from "../../Hooks/usePublicAxios";
import Swal from 'sweetalert2';
import useGetOwnerData from "../../Hooks/useGetOwnerData";



const OwnerCard = ({ data }) => {

    const { _id, city, bedroom, date, price, image } = data;
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
        <div className=" bg-base-200 shadow-xl flex justify-start rounded-xl overflow-hidden max-w-[800px] mx-auto mb-6">
            <img className="h-full max-h-40 object-cover" src={image} alt="" />
            <div className="flex-1 p-3 px-5 grid items-center">
                <p className=" flex items-center capitalize"><FaCity className=" mr-1 text-lg" />{city}</p>
                <p className=" flex items-center"><FaBed className=" mr-1 text-lg" />{bedroom} Bedroom </p>
                {/* <p className=" flex items-center"><FaBath className=" mr-1 text-lg" />5 Bathroom </p> */}
                <p className=" flex items-center"><FaCalendarCheck className=" mr-1 text-lg" />Free From {date} </p>
                <p className=" flex items-center"><FaMoneyBill className=" mr-1 text-lg" />{price} Taka /m</p>
            </div>
            <div className="flex justify-between flex-col">
                <NavLink to={`/update/${_id}`}><button className="btn w-full hover:bg-blue-400 hover:text-white">Update</button></NavLink>
                <button onClick={handleClickDelete} className="btn w-full hover:bg-red-500 hover:text-white">Delete</button>
                <Link to={`/allitems/${_id}`}><button className="btn w-full hover:bg-purple-500 hover:text-white">View</button></Link>
            </div>
        </div>
    )
}

export default OwnerCard