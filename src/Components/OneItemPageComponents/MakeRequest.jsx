import React, { useContext, useState } from 'react'
import { FaMixer } from 'react-icons/fa6'
import { CentralContext } from '../../Contexts/CentralContextComp'
import usePublicAxios from '../../Hooks/usePublicAxios';
import { getCurrentDate } from '../../Utils/GetCurrentDate';
import Swal from 'sweetalert2';


const MakeRequest = ({ data }) => {
    const { user } = useContext(CentralContext);
    const [modalStatus, setModalStatus] = useState(false);
    const publicAxios = usePublicAxios();


    const handleMakeReq = (event) => {
        event.preventDefault();
        const newReq = {
            userName: user?.name,
            userEmail: user?.email,
            userPhone: user?.phone,
            houseId: data?._id,
            reqStatus: "pending",
            reqdate: getCurrentDate()
        }
        publicAxios.post('/request', newReq)
            .then(res => {
                console.log(res.data);
                if (res.data?.flag === 1) {
                    Swal.fire({
                        position: "top-end",
                        icon: "warning",
                        title: "You already create 2 Request !",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }else if(res.data?.flag === -1){
                    Swal.fire({
                        position: "top-end",
                        icon: "warning",
                        title: "Already Requested !",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }else if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Done Request !",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }).catch(err => {
                console.log(err);
            })

        setModalStatus(false);
    }


    return (
        <div>
            <button onClick={() => setModalStatus(true)} className=" btn text-white mt-8 bg-orange-400 ">Make Request</button>
            {
                modalStatus && <div className='z-50 flex justify-center items-center absolute top-0 left-0 w-full h-full bg-[#000000a6]'>
                    <div className=' relative w-full max-w-xl bg-slate-300 p-5 rounded-xl '>
                        <FaMixer onClick={() => setModalStatus(false)} className='cursor-pointer absolute text-red-600 right-4 z-50 text-red font-2xl' />
                        <h1 className=' text-center font-bold text-2xl py-3'>Create Home Request</h1>
                        <form onSubmit={handleMakeReq} className=''>
                            <div className=' pt-4'>
                                <small>House ID</small>
                                <input type="text" defaultValue={data?._id} className="input input-bordered w-full mb-2" disabled />
                                <small>Ranter Name</small>
                                <input type="text" defaultValue={user?.name} className="input input-bordered w-full mb-2" disabled />
                                <small>Ranter Email</small>
                                <input type="text" defaultValue={user?.email} className="input input-bordered w-full mb-2" disabled />
                                <small>Ranter Phone</small>
                                <input type="text" defaultValue={user?.phone} className="input input-bordered w-full mb-2" disabled />
                            </div>
                            <button className=' btn w-full hover:bg-yellow-500 bg-yellow-400 uppercase font-bold my-2'>Submit</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default MakeRequest