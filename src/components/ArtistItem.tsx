import { useEffect, useState } from "react";
import musicServices from "../api/musicServices";

const ArtistItem: React.FC<any> = ({artist}) => {
    const [dataArtist, setDataArtist] = useState<any>(null);
    console.log(artist)
    useEffect(() => {
        musicServices.getArtist((artist.id))
        .then((res)  => {
            setDataArtist(res);
        })
        .catch(err => console.log(err))
    }, []);
    return (
        <div className="w-[35%] flex-shrink-0">
            <div className="w-full pt-[110%] relative ">
                <img className="w-full h-full object-cover absolute top-0 left-0 rounded-md" src={dataArtist?.images[2].url} alt="" />
            </div>
            <p className="text-white mt-4 text-center text-small-1 px-1">{dataArtist?.name}</p>
        </div>
    );
}

export default ArtistItem;