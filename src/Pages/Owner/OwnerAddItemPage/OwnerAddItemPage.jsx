import { useForm } from "react-hook-form"
import { bangladeshCities } from "../../../Utils/Cities";
import usePublicAxios from "../../../Hooks/usePublicAxios";
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'
import { getCurrentDate } from "../../../Utils/GetCurrentDate";
import { useContext } from "react";
import { CentralContext } from "../../../Contexts/CentralContextComp";



const OwnerAddItemPage = () => {

  const {user} = useContext(CentralContext);
  const publicAxios = usePublicAxios();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    data.create = getCurrentDate();
    data.email = user?.email;
    data.status = false;
    data.ownerImage = user?.photo,
    publicAxios.post('/item',data)
      .then(res=>{
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Added",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/owner/profile')
        }
      }).catch(err=>{
        console.log(err);
      })
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-xl mx-auto bg-slate-200 rounded-xl my-10">
      <h1 className=" text-center font-bold text-xl uppercase">Add House</h1>

      {/* Name Field */}
      <small className="font-bold text-gray-600">Enter Name</small>
      <input {...register("name", { required: true })} defaultValue={user?.name} className="input input-bordered" placeholder="Enter your name" />
      {errors.name && <span className=" text-red-600 text-xs">This field is required</span>}

      {/* Address Field */}
      <small className="font-bold text-gray-600">Enter Address</small>
      <input {...register("address", { required: true })} className="input input-bordered" placeholder="Enter house address" />
      {errors.address && <span className=" text-red-600 text-xs">This field is required</span>}

      {/* City Field */}
      <small className="font-bold text-gray-600">Select City</small>
      <select className="p-3 rounded-lg input-bordered" {...register("city")}>
        {
          bangladeshCities.map((one, i) => {
            return (
              <option key={i} value={one}>{one.toUpperCase()}</option>
            )
          })
        }
      </select>

      {/* Bed Room Number Field */}
      <small className="font-bold text-gray-600">Bed Room Numbers ( 1 - 6 )</small>
      <input {...register("bedroom", { required: true })} type="number" max={6} min={1} className="input input-bordered" placeholder="Bed room number" />
      {errors.bedroom && <span className=" text-red-600 text-xs">This field is required</span>}

      {/* Foom Size Field */}
      <small className="font-bold text-gray-600">Enter Maximum Flat Room Size ( 0 - 2000sqft )</small>
      <input {...register("size", { required: true })} type="number" max={2000} min={0} className="input input-bordered" placeholder="Enter room size" />
      {errors.size && <span className=" text-red-600 text-xs">This field is required</span>}

      {/* Room Image */}
      <small className="font-bold text-gray-600">Enter room image URL</small>
      <input {...register("image", { required: true })} type="text" className="input input-bordered" placeholder="Enter room image url" />
      {errors.image && <span className=" text-red-600 text-xs">This field is required</span>}

      {/* Avaialable Date Field */}
      <small className="font-bold text-gray-600">Enter Available Date</small>
      <input {...register("date", { required: true })} type="date" className="input input-bordered" />
      {errors.date && <span className=" text-red-600 text-xs">This field is required</span>}

      {/* Rent per month */}
      <small className="font-bold text-gray-600">Enter Rent Price /m. ( 3k - 18k : RAJUK standard) </small>
      <input {...register("price", { required: true })} type="number" min={0} max={18000} className="input input-bordered" placeholder="Enter price in Taka, like 5000" />
      {errors.price && <span className=" text-red-600 text-xs">This field is required</span>}

      {/* Phone number field */}
      <small className="font-bold text-gray-600">Enter your phone number</small>
      <input {...register("phone", { required: true })} defaultValue={user?.phone} type="number" className="input input-bordered" placeholder="Enter your phone number" />
      {errors.phone && <span className=" text-red-600 text-xs">This field is required</span>}

      {/* Description field */}
      <small className="font-bold text-gray-600">Write about your home</small>
      <textarea {...register("describe", { required: true })} type="text" className="textarea textarea-bordered" placeholder="Enter description" />
      {errors.describe && <span className=" text-red-600 text-xs">This field is required</span>}

      <div className="form-control mt-3">
        <button className="btn btn-primary uppercase">SUBMIT</button>
      </div>

    </form>
  )
}

export default OwnerAddItemPage;