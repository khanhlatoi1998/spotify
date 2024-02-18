import { NavLink } from "react-router-dom";

const ItemMore: React.FC<any> = ({track}) => {

    
    return (
        <NavLink to={`/audiosong/${track?.id || track?.track?.id}`} className="w-full">
            <div className="relative pt-[80%]">
                <img className="rounded-md absolute top-0 left-0 object-cover w-full h-full"  src={track.images[0].url} alt="" />
            </div>
            <p></p> 
        </NavLink>
    )
};

export default ItemMore;