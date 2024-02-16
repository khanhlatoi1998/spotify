import { useEffect, useState } from "react";
import Popular from "../components/Popular";
import MyPlaylists from "../components/MyPlaylists";
import musicServices from "../api/musicServices";
import ArtistItem from "../components/ArtistItem";
import ItemSong from "../components/ItemSong";
import PlaylistsCategory from "../components/PlaylistsCategory";
import { useDispatch } from "react-redux";
import { getPlaylists } from "../redux/sliceMusicService";

const HomePage = () => {
    const disPatch = useDispatch();
    const [popular, setPopular] = useState<any>([]);
    const [myPlaylists, setMyPlaylists] = useState<any>([]);
    const params = {
        offset: 0,
        limit: 10
    };
    const category = 'toplists';
    useEffect(() => {
        musicServices.getCategoriesPlaylists(category, params)
            .then(res => {
                res.playlists.items.forEach((element: any) => {
                    // console.log(element.name)
                });
                setPopular(res.playlists.items)
            });
        musicServices.getCurrentUsersPlaylists(params)
            .then(res => {
                musicServices.getPlayLists(res[0].id, params)
                .then(res => {
                    setMyPlaylists(res.tracks.items);
                    console.log(res.tracks.items)
                    disPatch(getPlaylists(res.tracks.items));
                })
                .catch(err => {})
            })
            .catch(err => { })
    }, []);

    return (
        <section>
            <div className="flex justify-between items-center mt-8">
                <div className="flex gap-2 items-center">
                    <figure>
                        <img className="w-[40px] h-[40px] rounded-full" src="https://i1.sndcdn.com/avatars-000702078199-txexxd-t500x500.jpg" alt="" />
                    </figure>
                    <div>
                        <p className="text-main text-13 font-semibold">Welcome, Khanh!</p>
                        <p className="font-bold">Live your day with Music</p>
                    </div>
                </div>
                <div className="relative">
                    <i className="relative fa-solid fa-bell text-main text-[24px]"></i>
                    <div className="w-[7px] h-[7px] bg-[red] rounded-full absolute left-[65%] top-0"></div>
                </div>
            </div>
            <Popular popular={popular} />
            <PlaylistsCategory category="Chill" />
            <PlaylistsCategory category="Kpop" />
            <MyPlaylists myPlaylists={myPlaylists}/>
        </section>
    )
}

export default HomePage;