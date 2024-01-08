const TopRateItem = () => {
    return (
        <div className="">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img className="w-[63px] h-[63px] rounded-full object-cover" src="https://i1.sndcdn.com/avatars-000702078199-txexxd-t500x500.jpg" alt="" />
                    <div>
                        <p className="font-semibold">Believer</p>
                        <p className="opacity-opa-1 text-small-1">Imageine Dragon</p>
                    </div>
                </div>
                <div className="w-[30px] h-[30px] rounded-full bg-main flex items-center justify-center">
                    <i className="fa-solid fa-play text-black"></i>
                </div>
            </div>
        </div>
    );
};

export default TopRateItem;