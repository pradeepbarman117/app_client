<<<<<<< HEAD
import { Outlet } from "react-router-dom"
import SidebarNav from "../components/common/sidebar/SidebarNav"
// import PropTypes from "prop-types"
=======
import { Outlet } from "react-router-dom";
import SidebarNav from "../components/common/sidebar/SidebarNav";
>>>>>>> fe76fd557da426803569ab39d8a9e9e2d64d0c80
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <>
      <div className="layout_container flex min-h-screen max-w-screen-2xl mx-auto">
        <SidebarNav />
        <div className="layout-content-container flex flex-col flex-1">
          <Outlet />
        </div>
        <Toaster/>
      </div>
    </>
  )
}

<<<<<<< HEAD
// Layout.propTypes = {
//   children:PropTypes.node.isRequired,
// }

=======
>>>>>>> fe76fd557da426803569ab39d8a9e9e2d64d0c80
export default Layout