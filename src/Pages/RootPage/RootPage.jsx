import { Outlet } from "react-router-dom"
import AppNavbar from "../../Layouts/AppNavbar"
import AppFooter from "../../Layouts/AppFooter"


const RootPage = () => {
  return (
    <div>
        <AppNavbar/>
        <Outlet/>
        <AppFooter/>
    </div>
  )
}

export default RootPage