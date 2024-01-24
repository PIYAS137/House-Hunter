import { useContext } from "react"
import { CentralContext } from "../Contexts/CentralContextComp"
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(CentralContext);

    if (loader){
        return <div className="flex justify-center items-center w-full h-screen">
            <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-sky-900 border-sky-400"></div>
        </div>
    }

    if (user?.email) {
        return children
    }

    return <Navigate state={location.pathname} to={'/login'} />


}

export default PrivateRoute