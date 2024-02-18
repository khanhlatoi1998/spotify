import { useQuery } from "@tanstack/react-query";import musicServices from "../api/musicServices";
import ItemSong from "./ItemSong";
import { NavLink } from "react-router-dom";


interface Props {
    category: string;
}


const PlaylistsCategory: React.FC<Props> = (props) => {    
    const {data} = useQuery({
        queryKey: [props.category],
        queryFn: () => musicServices.getCategoriesPlaylists(props.category, {
            offset: 0,
            limit: 10
        })
    });


    return (
        <div className="mt-4">
        <div className="flex items-center justify-between">
            <p className="font-semibold text-title capitalize">{props.category}</p>
            <NavLink to={`/more/${props.category}`} className="text-main">
                More
                <span><i className="fa-solid fa-angle-right ml-2"></i></span>
            </NavLink>
        </div>
        <div className="flex mt-4 overflow-x-scroll noScroll gap-4">
            {
                data?.playlists?.items?.map((track: any, idx: number) => {
                    return (
                        <ItemSong key={idx} track={track}/>
                    )
                })
            }
        </div>
    </div>
    );
}

export default PlaylistsCategory;