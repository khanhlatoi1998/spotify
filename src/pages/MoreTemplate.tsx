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
            <div>
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9tPFwDMOaN1" width="300" height="380"  allow="encrypted-media"></iframe>
            <iframe src="https://open.spotify.com/embed/track/3Y3nRbS2YvT8LsYxvDylny" width="300" height="380"  allow="encrypted-media"></iframe>

            </div>
        </div>
    )
};

export default MoreTemplate;