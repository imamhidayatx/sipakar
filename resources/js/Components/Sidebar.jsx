import { Link } from "@inertiajs/inertia-react";
import React from "react";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

export default function Sidebar(props) {
    return (
        <div className="sm:h-screen h-fit py-5 bg-white shadow-xl w-full sm:w-fit md:w-64 fixed sm:relative bottom-0">
            <div className="hidden sm:flex space-x-4 py-5 justify-center items-center">
                <MdIcons.MdMedicalServices
                    size={32}
                    className="text-blue-600"
                />
                <h1 className="font-bold text-3xl text-blue-600 hidden md:block sm:hidden">
                    SIPAKAR
                </h1>
            </div>

            <div className="mt-0 sm:mt-10 px-5 flex flex-row sm:flex-col space-y-0 sm:space-y-3 items-center sm:items-start justify-evenly sm:justify-start">
                <Link className="w-auto sm:w-full" href="dashboard">
                    <div
                        className={`${
                            props.active == "Dashboard"
                                ? "bg-blue-600 border-blue-800  text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300 "
                        } flex space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <MdIcons.MdDashboard size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Dashboard</h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="doctors">
                    <div
                        className={`${
                            props.active == "Dokter"
                                ? "bg-blue-600 border-blue-800  text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300 "
                        } flex space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <FaIcons.FaUserMd size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Doctor</h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="patients">
                    <div
                        className={`${
                            props.active == "Patients"
                                ? "bg-blue-600 border-blue-800  text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300 "
                        } flex space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <FaIcons.FaUserInjured size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Patients</h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="activity">
                    <div
                        className={`${
                            props.active == "Activity"
                                ? "bg-blue-600 border-blue-800  text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300 "
                        } flex space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <FaIcons.FaChartLine size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Activity</h1>
                    </div>
                </Link>
                <Link className="w-auto sm:w-full" href="profile">
                    <div
                        className={`${
                            props.active == "Profile"
                                ? "bg-blue-600 border-blue-800  text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        } flex space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <FaIcons.FaUser size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Profile</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}
