import { useLoaderData } from "react-router-dom"
import MakeRequest from "../../Components/OneItemPageComponents/MakeRequest";


const OneItemViewPage = () => {

    const data = useLoaderData();
    console.log(data);


    return (
        <div className=" grid grid-cols-3 min-h-screen">
            <div className="  col-span-2">
                <h1 className=" border-b py-2 text-2xl font-black text-center uppercase bg-white">Home Details</h1>
                <div className=" w-full flex justify-center mt-5 ">
                    <img className=" max-w-lg aspect-square object-contain" src={data?.image} alt="" />
                </div>
                <table className=" w-full mt-10 max-w-xl mx-auto border my-10">
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
                <table className=" w-full mt-16 ">
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
                <MakeRequest data={data}/>
            </div>
        </div>
    )
}

export default OneItemViewPage