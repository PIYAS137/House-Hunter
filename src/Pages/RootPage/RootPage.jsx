import { Outlet } from "react-router-dom"
import AppNavbar from "../../Layouts/AppNavbar"
import AppFooter from "../../Layouts/AppFooter"


const RootPage = () => {
  return (
    <div>
      <AppNavbar />
      <div className=" px-2 md:px-0">
        <Outlet />
      </div>
      <AppFooter />
    </div>
  )
}

export default RootPage