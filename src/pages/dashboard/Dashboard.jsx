import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <section>
            <div className="container lg:max-w-6xl px-5 lg:px-0 mt-10">
                <div className="flex dashLink gap-4 justify-center items-center">
                    <NavLink to={`/dashboard/manage-task`} className="px-6 py-2 inline-block border-b border-gray-300">All Task</NavLink>
                    <NavLink to={`/dashboard/new-task`} className="px-6 py-2 inline-block border-b border-gray-300">New Task</NavLink>
                    <NavLink to={`/dashboard/profile`} className="px-6 py-2 inline-block border-b border-gray-300">Profile</NavLink>
                </div>
                <div className=" mb-10">
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;