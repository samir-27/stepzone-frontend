import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FiBox, FiUsers, FiGrid, FiMenu, FiX } from "react-icons/fi";

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 w-64 bg-gray-800 text-white p-6 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out h-full z-50`}
      >
        <div className="flex justify-between items-center md:block">
          <h2 className="text-2xl font-bold mb-8 text-center">Admin Panel</h2>
          <button
            className="text-white md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX size={24} />
          </button>
        </div>
        <nav className="space-y-4 mt-6">
          <Link
            to="."
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          >
            <FiBox />
            Add Product
          </Link>
          <Link
            to="allproducts"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
          >
            <FiGrid />
            All Products
          </Link>
          <Link
            to="allusers"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
          >
            <FiUsers />
            All Users
          </Link>
        </nav>
      </aside>

      {/* Mobile Hamburger Menu */}
      <button
        className="md:hidden fixed top-4 left-4 bg-gray-800 text-white p-2 rounded-full z-50"
        onClick={() => setSidebarOpen(true)}
      >
        <FiMenu size={24} />
      </button>

      {/* Main Content */}
      <main className="flex-1 p-6 ">
        <div className="bg-white p-6 shadow rounded-lg">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Dashboard
          </h1>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
