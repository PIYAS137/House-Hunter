import { useForm } from "react-hook-form"


const cities = [
    'dhaka', 'barisal', 'khulna'
]


const OwnerUpdatePage = () => {

    const {
        register,
        // reset,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }

    

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-xl mx-auto bg-slate-200 rounded-xl my-10">
            <h1 className=" text-center font-bold text-xl uppercase">Update House</h1>

            {/* Name Field */}
            <small className="font-bold text-gray-600">Enter Name</small>
            <input {...register("name", { required: true })} className="input input-bordered" placeholder="Enter your name" />
            {errors.name && <span className=" text-red-600 text-xs">This field is required</span>}

            {/* Phone Number Field */}
            <small className="font-bold text-gray-600">Enter Address</small>
            <input {...register("address", { required: true })} className="input input-bordered" placeholder="Enter house address" />
            {errors.address && <span className=" text-red-600 text-xs">This field is required</span>}

            {/* Account Role Field */}
            <small className="font-bold text-gray-600">Select City</small>
            <select className="p-3 rounded-lg input-bordered" {...register("role")}>
                {
                    cities.map((one, i) => {
                        return (
                            <option key={i} value={one}>{one.toUpperCase()}</option>
                        )
                    })
                }
            </select>

            {/* Bed Room Number Field */}
            <small className="font-bold text-gray-600">Bed Room Numbers</small>
            <input {...register("email", { required: true })} type="number" className="input input-bordered" placeholder="Bed room number" />
            {errors.email && <span className=" text-red-600 text-xs">This field is required</span>}

            {/* Bed Room Number Field */}
            <small className="font-bold text-gray-600">Enter Room Size</small>
            <input {...register("size", { required: true })} type="number" className="input input-bordered" placeholder="Enter room size" />
            {errors.size && <span className=" text-red-600 text-xs">This field is required</span>}

            {/* Room Image */}
            <small className="font-bold text-gray-600">Enter room image URL</small>
            <input {...register("image", { required: true })} type="number" className="input input-bordered" placeholder="Enter room image url" />
            {errors.image && <span className=" text-red-600 text-xs">This field is required</span>}

            {/* Avaialable Date Field */}
            <small className="font-bold text-gray-600">Enter Available Date</small>
            <input {...register("date", { required: true })} type="date" className="input input-bordered" />
            {errors.date && <span className=" text-red-600 text-xs">This field is required</span>}

            {/* Rent per month */}
            <small className="font-bold text-gray-600">Enter Rent Price</small>
            <input {...register("price", { required: true })} type="number" className="input input-bordered" placeholder="Enter price in Taka" />
            {errors.price && <span className=" text-red-600 text-xs">This field is required</span>}

            {/* Phone number field */}
            <small className="font-bold text-gray-600">Enter your phone number</small>
            <input {...register("phone", { required: true })} type="number" className="input input-bordered" placeholder="Enter your phone number" />
            {errors.phone && <span className=" text-red-600 text-xs">This field is required</span>}

            {/* Description field */}
            <small className="font-bold text-gray-600">Write about this home</small>
            <textarea {...register("phone", { required: true })} type="text" className="input textarea input-bordered" placeholder="Enter description" />
            {errors.phone && <span className=" text-red-600 text-xs">This field is required</span>}

            <div className="form-control mt-3">
                <button className="btn btn-primary uppercase">SUBMIT</button>
            </div>

        </form>
    )
}

export default OwnerUpdatePage