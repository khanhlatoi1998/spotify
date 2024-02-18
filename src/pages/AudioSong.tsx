import { useSelector } from "react-redux";
import MyPlaylistsItem from '../components/MyPlaylistsItem';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import musicServices from "../api/musicServices";
import ItemSong from "../components/ItemSong";
import ItemMore from "../components/ItemMore";



const AudioSong = () => {
    const playLitstCurrentUser = useSelector((state: any) => state.sliceMusicServices);
    const [controll, setControll] = useState<string>('playlists');
    const { id } = useParams();
    console.log(id)
    const { data: dataPlaylists } = useQuery({
        queryKey: [id],
        queryFn: () => musicServices.getPlayLists(id || '', {
            offset: 0,
            limit: 100
        })
    })
    const { data: dataRecommendation } = useQuery({
        queryKey: ['recommendation'],
        queryFn: () => musicServices.getRecommendation('seed_genres=pop%2Ckpop%2Cchill', {
            offset: 0,
            limit: 50
        })
    })

    console.log(dataRecommendation?.tracks)

    return (
        <div>
            <div className="flex items-center justify-between mt-8">
                <span className="py-2 cursor-pointer">
                    <i className="fa-solid fa-chevron-left text-2xl"></i>
                </span>
                <div className="flex gap-2 items-center text-title font-semibold">Playlist</div>
                <span className="py-2 cursor-pointer">
                    <i className="fa-solid fa-bars text-2xl"></i>
                </span>
            </div>
            <div className="mx-auto rounded-lg overflow-hidden relative pt-[83%] mt-10">
                <img className="max-w-[380px] object-cover absolute top-0 left-[50%] translate-x-[-50%] w-full h-full" src="https://media.viez.vn/prod/2023/1/26/image_4ee1bfd509.png" alt="" />
            </div>
            <div className="flex items-center justify-between pt-8">
                <span>
                    <i className="fa-solid fa-share-nodes text-2xl"></i>
                </span>
                <div className="text-center">
                    <p className="text-title font-semibold">Havana</p>
                    <p className="text-small-1 opacity-opa-1">Camila Cabello ft, Young Thug</p>
                </div>
                <span>
                    <i className="fa-solid fa-heart text-2xl text-color-2"></i>
                </span>
            </div>
            <div className="mt-2 relative">
                <img src="../images/image_03.png" className="w-full max-h-[200px] h-[140px] object-fill" alt="" />
                <input type="range" className="w-[88%] mx-auto h-[4px] bg-main absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                <p className="absolute top-[58%] left-[6%] text-small-2">2:23</p>
                <p className="absolute top-[58%] right-[6%] text-small-2">4:35</p>
            </div>
            <div className="flex items-center justify-between gap-2">
                <div>
                    <i className="fa-regular fa-comment-dots text-xl"></i>
                </div>
                <div>
                    <i className="fa-solid fa-backward text-xl"></i>
                </div>
                <div className="w-[40px] h-[40px] rounded-full bg-main flex items-center justify-center">
                    <i className="fa-solid fa-play text-black text-2xl"></i>
                </div>
                <div>
                    <i className="fa-solid fa-forward text-xl"></i>
                </div>
                <div>
                    <i className="fa-solid fa-repeat text-xl"></i>
                </div>
            </div>
            <div className="flex items-center justify-between mt-12 font-semibold text-[#ffffff96] text-title">
                <p onClick={() => setControll('playlists')} className={`${controll === 'playlists' ? 'text-white' : ''}`}>TIẾP THEO</p>
                <p onClick={() => setControll('lyric')} className={`${controll === 'lyric' ? 'text-white' : ''}`}>LỜI NHẠC</p>
                <p onClick={() => setControll('recommendation')} className={`${controll === 'recommendation' ? 'text-white' : ''}`} >LIÊN QUAN</p>
            </div>
            <div className={`mt-6 ${controll === 'lyric' ? 'block' : 'hidden'}`} >
                {/* <p className="text-title font-semibold">Lời bài hát</p> */}
                <p className="mt-3 opacity-opa-1 ml-1 pb-2">
                    Được dịch từ tiếng Anh-Cacbua xi măng là một loại vật liệu cứng được sử dụng rộng rãi cho cá d asdasd asda sd ac dụng cụ cắt, cũng như trong các ứng dụng công nghiệp khác. Nó bao gồm các hạt cacbua mịn được kết dính thành hỗn hợp bằng kim loại kết dính. Cacbua xi măng thường sử dụng cacbua vonfram, cacbua titan hoặc cacbua tantali làm cốt liệu. Wikipedia (tiếng Anh)
                </p>
            </div>
            <div className={`mt-6 flex flex-col gap-2 h-[340px] overflow-y-scroll noScroll ${controll === 'playlists' ? 'block' : 'hidden'}`} >
                {
                    playLitstCurrentUser?.map((track: any, idx: any) => {
                        return (
                            <MyPlaylistsItem key={idx} track={track.track ? track.track : track} />
                        )
                    })
                }
            </div>
            <div className={`mt-6 flex flex-col gap-2 h-[340px] overflow-y-scroll noScroll ${controll === 'recommendation' ? 'block' : 'hidden'}`} >
                {
                    dataRecommendation?.tracks?.map((track: any, idx: any) => {
                        return (
                            <MyPlaylistsItem key={idx} track={track.track ? track.track : track} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AudioSong;