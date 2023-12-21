import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
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


            <section className="py-20">
                <div className="container lg:max-w-6xl px-5 lg:px-0">
                    <div className="grid lg:grid-cols-2 gap-5">
                        <div>
                            <div>
                                <img src="https://micronet.work/demo/wp-content/uploads/2023/03/hero2.png" alt="" />
                            </div>
                        </div>
                        <div className="col-span- ">
                            <p className="text-2xl text-gray-800 font-bold mb-3">Most popular feature</p>
                            <p className="text-sm text-gray-600 font-normal mr-32">It is a task management application. You can login and use it for free. This website is designed for all types of users. Anyone can use it.</p>
                            <div className="grid space-y-1 gap-5 mt-5">
                                <div className="px-5 py-3 rounded shadow-sm border-l-2 border-pink-600">
                                    <p className="font-medium">Can a web developer use it?</p>
                                    <p className="text-gray-600">Hey, a web developer can use it. You can save your daily tasks here. Here you can complete your task in three steps.</p>
                                </div>
                                <div className="px-5 py-3 rounded shadow-sm border-l-2 border-pink-600">
                                    <p className="font-medium">What benefits will there be for a banker?</p>
                                    <p className="text-gray-600">A banker can use it if he wants. But there is no special benefit for him. But he can use it if he wants.</p>
                                </div>
                                <div className="px-5 py-3 rounded shadow-sm border-l-2 border-pink-600">
                                    <p className="font-medium">Digital marketer</p>
                                    <p className="text-gray-600">This is best for a marketer. Can keep detailed information of his daily work. And can keep it organized.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;