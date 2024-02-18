import { NavLink } from "react-router-dom";

const ItemSong: React.FC<any> = ({track}) => {
    return (
        <NavLink to={`/audiosong/${track?.id || track?.track?.id}`} className="w-[35%] flex-shrink-0">
            <div className="w-full pt-[110%] relative ">
                <img className="w-full h-full object-cover absolute top-0 left-0 rounded-md" src={track?.images[0]?.url} alt="" />
            </div>
            <p className="text-white mt-4 text-center text-small-1 px-1"></p>
        </NavLink>
    )
};

export default ItemSong;