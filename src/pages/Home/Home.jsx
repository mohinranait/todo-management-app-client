import { Link } from "react-router-dom";


const Home = () => {
    return (
        <section>
            <div className="container lg:max-w-6xl px-5 lg:px-0">
                <div className="grid md:grid-cols-2 items-center min-h-[calc(100vh-100px)] gap-5">
                    <div className="space-y-5">
                        <h1 className="text-5xl font-bold leading-tight">Manage work <br /> <span className="text-primary">Efficiently</span></h1>
                        <p className="text-3xl font-medium">Plan, Track and Organise your work.</p>
                        <p className="text-base font-normal text-gray-600">An Intranet platform to Manage projects, organise work and focus on what’s important.</p>
                        <div>
                            <Link to="/login" className="px-5 py-2 bg-primary rounded text-white inline-block ">Let’s Explore</Link>
                        </div>
                    </div>
                    <div>
                        <img src="https://micronet.work/demo/wp-content/uploads/2023/03/her_micronet.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;