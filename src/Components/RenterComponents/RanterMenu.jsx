import { useContext } from "react"
import { FaBarsStaggered } from "react-icons/fa6"
import { NavLink, useNavigate } from "react-router-dom"
import { CentralContext } from "../../Contexts/CentralContextComp"


const RanterMenu = () => {

    const {LogOutUser,setUser,setLoader} = useContext(CentralContext);
    const navigate = useNavigate();

    const handleLogOut=()=>{
        LogOutUser();
        setUser({});
        setLoader(true);
        navigate('/login');
    }




    return (
        <div>
            <div className="drawer z-50">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content z-50">
                    <label htmlFor="my-drawer" className="btn bg-white outline-none ml-5 drawer-button">
                        <FaBarsStaggered className=" text-xl" />
                    </label>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu z-50 space-y-3 p-4 w-80 min-h-full bg-yellow-500 text-base-content">
                        <h1 className=" p-2 text-center text-black text-xl font-black">Owner Menu</h1>
                        <li className=" border rounded-lg font-semibold border-black"><NavLink to={'/ranter/profile'}>Ranter Dashboard</NavLink></li>
                        <li className=" border rounded-lg font-semibold border-black"><NavLink to={'/ranter/manage'}>Manage Request</NavLink></li>
                        <li className=" border rounded-lg font-semibold border-black"><NavLink to={'/'}>Back To Homepage</NavLink></li>
                        <li onClick={handleLogOut} className=" border p-2 px-3 cursor-pointer hover:bg-red-500 rounded-lg font-semibold bg-red-400 text-white border-red-500">Logout</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RanterMenu