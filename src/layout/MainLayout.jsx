import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header"
import { useState } from "react";
import MobileMenu from "../shared/MobileMenu";


const MainLayout = () => {
    const [isToggle, setIsToggle] = useState(false);
    console.log(isToggle);
    return (
        <>
            <Header isToggle={isToggle} setIsToggle={setIsToggle} />
            <Outlet />
            <Footer />
            <MobileMenu isToggle={isToggle} setIsToggle={setIsToggle} />
        </>
    );
};

export default MainLayout;