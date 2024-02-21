import { useParams } from "react-router-dom";
import ItemMore from "../components/ItemMore";
import ItemSong from "../components/ItemSong";
import { useQuery } from "@tanstack/react-query";
import musicServices from "../api/musicServices";

const MoreTemplate = () => {
    const { category } = useParams();
    const { data: dataPlaylist } = useQuery({
        queryKey: [category],
        queryFn: () => musicServices.getCategoriesPlaylists(category, {
            offset: 0,
            limit: 50
        })
    });
    console.log(dataPlaylist)

    return (
        <div className="mt-8  pb-[60px]">
            <p className="font-semibold text-title">{dataPlaylist?.message}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
                {
                    dataPlaylist?.playlists?.items.map((track: any, idx: number) => {
                        return (
                            <ItemMore key={idx} track={track} />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default MoreTemplate;