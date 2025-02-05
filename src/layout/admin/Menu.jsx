import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TbHome } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import AddTaskIcon from '@mui/icons-material/AddTask';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AddCardIcon from '@mui/icons-material/AddCard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddHomeIcon from '@mui/icons-material/AddHome';
import LocalMallIcon from '@mui/icons-material/LocalMall';
const Menu = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`${
        isCollapsed ? "md:w-16 w-10" : "md:w-72 w-20 px-3"
      } bg-Mprimary min-h-screen transition-all duration-300`}
    >
      {/* Toggle Button */}
      <button
        className={`${
          isCollapsed ? "justify-center" : "justify-end"
        } grid grid-cols-2 w-full p-4 text-white hidden md:block`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <FiChevronRight size={24} />
        ) : (
          <FiChevronLeft size={24} />
        )}
      </button>

      {/* menu item  */}
      <div className="rounded-md p-4 md:py-3 bg-white my-2 md:mx-1">
        <NavLink
          to={"admin-dashboard/profile"}
          className={({ isActive }) =>
            `flex items-center ${isActive ? "text-primary" : "text-black"} ${
              isCollapsed ? "justify-center" : "md:ml-5"
            }`
          }
        >
          <AddHomeIcon className={`${isCollapsed ? "" : "md:mr-3"}`} size={24} />
          <span className="hidden sm:inline">
            {!isCollapsed && "Admin Profile"}
          </span>
        </NavLink>
      </div>
          
      <div className="rounded-md p-4 md:py-3 md:mx-1 bg-white my-2">
        <NavLink
          to={"admin-dashboard/add-product"}
          className={({ isActive }) =>
            `flex items-center ${isActive ? "text-primary" : "text-black"} ${
              isCollapsed ? "justify-center" : "md:ml-5"
            }`
          }
        >
          <AddTaskIcon className={`${isCollapsed ? "" : "md:mr-3"}`} size={24} />
          <span className="hidden sm:inline">
            {!isCollapsed && "Add Product"}
          </span>
        </NavLink>
      </div>
      <div className="rounded-md p-4 md:py-3 md:mx-1 bg-white my-2">
        <NavLink
          to={"admin-dashboard/manage-products"}
          className={({ isActive }) =>
            `flex items-center ${isActive ? "text-primary" : "text-black"} ${
              isCollapsed ? "justify-center" : "md:ml-5"
            }`
          }
        >
          <LocalMallIcon className={`${isCollapsed ? "" : "md:mr-3"}`} size={24} />
          <span className="hidden sm:inline">
            {!isCollapsed && "Manage Product"}
          </span>
        </NavLink>
      </div>
      <div className="rounded-md p-4 md:py-3 md:mx-1 bg-white my-2">
        <NavLink
          to={"admin-dashboard/order"}
          className={({ isActive }) =>
            `flex items-center ${isActive ? "text-primary" : "text-black"} ${
              isCollapsed ? "justify-center" : "md:ml-5"
            }`
          }
        >
          <ManageSearchIcon className={`${isCollapsed ? "" : "md:mr-3"}`} size={24} />
          <span className="hidden sm:inline">
            {!isCollapsed && "Order"}
          </span>
        </NavLink>
      </div>
      <div className="rounded-md p-4 md:py-3 md:mx-1 bg-white my-2">
        <NavLink
          to={"admin-dashboard/transaction-history"}
          className={({ isActive }) =>
            `flex items-center ${isActive ? "text-primary" : "text-black"} ${
              isCollapsed ? "justify-center" : "md:ml-5"
            }`
          }
        >
          <AddCardIcon className={`${isCollapsed ? "" : "md:mr-3"}`} size={24} />
          <span className="hidden sm:inline">
            {!isCollapsed && "Transacrion Recoard"}
          </span>
        </NavLink>
          </div>
      <div className="rounded-md p-4 md:py-3 md:mx-1 bg-white my-2">
        <NavLink
          to={"admin-dashboard/manage-users"}
          className={({ isActive }) =>
            `flex items-center ${isActive ? "text-primary" : "text-black"} ${
              isCollapsed ? "justify-center" : "md:ml-5"
            }`
          }
        >
          <GroupAddIcon className={`${isCollapsed ? "" : "md:mr-3"}`} size={24} />
          <span className="hidden sm:inline">
            {!isCollapsed && "Manage User"}
          </span>
        </NavLink>
          </div>
          
          <div className="md:my-5 border-b-2"></div>
      <div className="rounded-md p-4 md:py-3 md:mx-1 bg-white my-2">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `flex items-center ${isActive ? "text-primary" : "text-black"} ${
              isCollapsed ? "justify-center" : "md:ml-5"
            }`
          }
        >
          <TbHome className={`${isCollapsed ? "" : "md:mr-3"}`} size={24} />
          <span className="hidden sm:inline">
            {!isCollapsed && "Back Home"}
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
