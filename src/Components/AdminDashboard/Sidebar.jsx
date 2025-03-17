import React from "react";
import {
  FaHome,
  FaBuilding,
  FaUsers,
  FaUserTie,
  FaCalendar,
  FaUserFriends,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import sidebarlogo from "../AdminDashboard/Assets/sidebarlogo.png";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-md flex flex-col p-4">
      {/* Logo Section */}
      <div className="flex items-center mb-6">
        <img src={sidebarlogo} alt="Logo" className="h-8 mr-2" />
        <h1 className="text-lg font-bold">REAL LAND</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-4">
          <li className="flex items-center text-blue-500 font-medium">
            <FaHome className="mr-3" /> Dashboard
          </li>
          <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
            <FaBuilding className="mr-3" /> Properties
          </li>
          <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
            <FaUsers className="mr-3" /> Leads
          </li>
          <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
            <FaUserTie className="mr-3" /> Vendors
          </li>
          <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
            <FaCalendar className="mr-3" /> Calendar
          </li>
          <li className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
            <FaUserFriends className="mr-3" /> Brokers & External Agents
          </li>
        </ul>
      </nav>

      {/* Footer Links */}
      <div className="mt-auto space-y-4">
        <div className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
          <FaCog className="mr-3" /> Settings
        </div>
        <div className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
          <FaQuestionCircle className="mr-3" /> Help
        </div>
        <div className="flex items-center text-red-500 hover:text-red-700 cursor-pointer">
          <FaSignOutAlt className="mr-3" /> Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
