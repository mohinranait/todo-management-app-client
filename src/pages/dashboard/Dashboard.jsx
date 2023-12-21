import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <section>
            <div className="container lg:max-w-6xl px-5 lg:px-0">
                <div className="flex gap-4 justify-center items-center">
                    <NavLink to={`/dashboard/manage-task`} className="px-6 py-2 inline-block border-b border-gray-300">All Task</NavLink>
                    <NavLink to={`/dashboard/new-task`} className="px-6 py-2 inline-block border-b border-gray-300">New Task</NavLink>
                </div>
                <div className="">
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;