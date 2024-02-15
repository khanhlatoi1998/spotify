import { NavLink } from "react-router-dom";

const BottomNav = () => {
    return (
        <div className="py-2 px-4 flex items-center justify-center gap-16 bg-color-1 fixed z-[990] left-0 right-0 bottom-0">
            <NavLink to="/" className="flex flex-col justify-center items-center ">
                <i className="fa-solid fa-house text-2xl"></i>
                <p className="text-small-2 mt-1">Home</p>
            </NavLink>
            <NavLink to="/search" className="flex flex-col justify-center items-center ">
                <i className="fa-solid fa-magnifying-glass text-2xl"></i>
                <p className="text-small-2 mt-1">Search</p>
            </NavLink>
            <NavLink to="/audiosong" className="flex flex-col justify-center items-center ">
                <i className="fa-solid fa-user text-2xl"></i>
                <p className="text-small-2 mt-1">Profile</p>
            </NavLink>
        </div>
    );
};

export default BottomNav;