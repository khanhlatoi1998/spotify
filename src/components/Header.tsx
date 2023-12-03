const Header = () => {
    return (
        <div className="flex justify-between items-center mt-8">
            <div className="flex gap-2 items-center">
                <figure>
                    <img className="w-[40px] h-[40px] rounded-full" src="https://i1.sndcdn.com/avatars-000702078199-txexxd-t500x500.jpg" alt="" />
                </figure>
                <div>
                    <p className="text-main text-13 font-semibold">Welcome, Tom!</p>
                    <p className="font-bold">Live your day with Music</p>
                </div>
            </div>
            <div className="relative">
                <i className="relative fa-solid fa-bell text-main text-[24px]"></i>
                <div className="w-[7px] h-[7px] bg-[red] rounded-full absolute left-[65%] top-0"></div>
            </div>
        </div>
    )
};

export default Header;