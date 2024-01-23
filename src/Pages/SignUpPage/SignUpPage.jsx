import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { CentralContext } from "../../Contexts/CentralContextComp"
import Swal from 'sweetalert2'
import { setUserInstanceToLS } from "../../Utils/StorageOperations"

const SignUpPage = () => {

    const {CreateUser,setUser} = useContext(CentralContext);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (datas) => {
        CreateUser(datas)
        .then(res=>{
            if(res.data.flag === -1){
                // Already Registered !
                Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: "Already Registered",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }else if(res.data.insertedId){
                // Successfully Create User
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Registered",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  reset();
                  setUserInstanceToLS(datas);
                  setUser(datas)
            }else{
                // Server side error !
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Facing Issue from Server :(",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }).catch(err=>{
            console.log(err);
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-xl mx-auto bg-slate-200 rounded-xl my-24">
            <h1 className=" text-center font-bold text-xl uppercase">Register Page</h1>

            {/* Name Field */}
            <small className="font-bold text-gray-600">Enter Name</small>
            <input {...register("name", { required: true })} className="input input-bordered" placeholder="Enter your name" />
            {errors.name && <span className=" text-red-600 text-xs">This field is required</span>}

            {/* Phone Number Field */}
            <small className="font-bold text-gray-600">Enter Phone Number</small>
            <input {...register("phone", { required: true })} className="input input-bordered" placeholder="Enter your phone number" />
            {errors.phone && <span className=" text-red-600 text-xs">This field is required</span>}

            {/* Photo URL Field */}
            <small className="font-bold text-gray-600">Enter Phone Number</small>
            <input {...register("photo", { required: true })} className="input input-bordered" placeholder="Enter your photo url" />
            {errors.photo && <span className=" text-red-600 text-xs">This field is required</span>}

            {/* Account Role Field */}
            <small className="font-bold text-gray-600">Select Account Role</small>
            <select className="p-3 rounded-lg input-bordered" {...register("role")}>
                <option value="owner">House Owner</option>
                <option value="renter">House Renter</option>
            </select>

            {/* Email Field */}
            <small className="font-bold text-gray-600">Enter Email</small>
            <input {...register("email", { required: true })} className="input input-bordered" placeholder="Enter your email" />
            {errors.email && <span className=" text-red-600 text-xs">This field is required</span>}

            {/* Password Field */}
            <small className="font-bold text-gray-600">Enter Password</small>
            <input {...register("pass", {
                    required: "This field is required",
                    minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long"
                    },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, //this regex collect from chatGPT
                        message: "Password must contain at least one lowercase letter, one uppercase letter, and one number"
                    }
                })}
                className="input input-bordered"
                type="password"
                placeholder="Enter your password"
            />
            {errors.pass && <span className="text-red-600 text-xs">{errors.pass.message}</span>}

            <p>Already have an account? <Link to={'/login'} className=" font-semibold text-blue-600">Go Login</Link></p>

            <div className="form-control mt-6">
                <button className="btn btn-primary uppercase">Register</button>
            </div>
        </form>
    )
}

export default SignUpPage