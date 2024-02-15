const TopRateItem: React.FC<any> = ({track}) => {
    return (
        <div className="">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img className="w-[64px] h-[64px] rounded-full object-cover" src={track?.track.album.images[2].url} alt="" />
                    <div className="max-w-[245px]">
                        <p className="font-semibold">{track.track.name}</p>
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