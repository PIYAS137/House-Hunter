import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { CentralContext } from "../../Contexts/CentralContextComp"
import Swal from "sweetalert2"
import { setUserInstanceToLS } from "../../Utils/StorageOperations"

const LoginPage = () => {

    const {LoginUser,setUser} = useContext(CentralContext);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (datas) => {
        console.log(datas);
        LoginUser(datas)
            .then(res=>{
                console.log(res.data);
                if(res.data.flag === -1){
                    // user not found !
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Please Insert valid email and password",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }else if(res.data.email == datas.email){
                    // user is found
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Logged In !",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      reset()
                      setUserInstanceToLS(datas);
                      setUser(datas)
                }else{
                    // server side error
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Facing Issue from Server :(",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            }).catch(err=>{
                console.log(err.message);
            })
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-xl mx-auto bg-slate-200 rounded-xl mt-24">
            <h1 className=" text-center font-bold text-xl uppercase">Login Page</h1>

            {/* Email Field */}
            <small className="font-bold text-gray-600">Enter Email</small>
            <input {...register("email", { required: true })} className="input input-bordered" placeholder="Enter your email" />
            {errors.email && <span className=" text-red-600 text-xs">This field is required</span>}

            {/* Password Field */}
            <small className="font-bold text-gray-600">Enter Password</small>
            <input {...register("pass", { required: true })} className="input input-bordered" type="password" placeholder="Enter your password" />
            {errors.pass && <span className=" text-red-600 text-xs">This field is required</span>}

            <p>Dont have an account? <Link to={'/signup'} className=" font-semibold text-blue-600">Create Account</Link></p>

            <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
            </div>
        </form>
    )
}

export default LoginPage