import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { CentralContext } from "../Contexts/CentralContextComp"
import { FaBuildingColumns } from "react-icons/fa6";

const AppNavbar = () => {
    const { user, setUser, LogOutUser } = useContext(CentralContext);

    const handleClickLogout = () => {
        LogOutUser();
        setUser({});
    }


    const navLinks = <>
        <li><NavLink to={'/'}>Home Page</NavLink></li>
        <li><NavLink to={'/allitems'}>Houses</NavLink></li>
        {/* {user.role === 'renter' ? <li><NavLink to={'/ranter/profile'}>Ranter Profile</NavLink></li> : ''}
        {user.role === 'owner' ? <li><NavLink to={'/owner/profile'}>Owner Profile</NavLink></li> : ''} */}
        <li><NavLink to={'/ranter/profile'}>Ranter Profile</NavLink></li>
        <li><NavLink to={'/owner/profile'}>Owner Profile</NavLink></li>
        
    </>

    return (
        <nav className=" sticky top-0 z-50">
            <div className="navbar bg-base-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="text-xl font-black text-center flex flex-col justify-center items-center space-x-2 text-yellow-600">
                        <FaBuildingColumns className=" text-2xl"/>
                        <p>House Hunter</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ?
                            <button onClick={handleClickLogout} className="btn btn-error text-white">Logout</button>
                            :
                            <Link to={'/login'}><button className=" btn btn-primary">Login</button></Link>
                    }
                </div>
            </div>
        </nav>
    )
}

export default AppNavbar