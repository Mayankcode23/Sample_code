import React from 'react'
// import{Link} from "react-router-dom"

const Sidebar = () => {
    return (
        <div>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span></a>
                    <hr className="sidebar-divider" />
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Addons
                </div>
                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    {/* <Link to="/User"> */}
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder" />
                        <span>User</span>
                    </a>
                {/* </Link> */}
            </li>

        </ul>
      
    </div >
  )
}

export default Sidebar;