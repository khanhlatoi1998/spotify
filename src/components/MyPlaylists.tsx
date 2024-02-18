import MyPlaylistsItem from "./MyPlaylistsItem";

const TopRate: React.FC<any> = ({myPlaylists}) => {
    return (
        <div className="mt-4">
            <p className="font-semibold text-title">Top Rate</p>
            <div className="mt-4 flex flex-col gap-2 h-[340px] overflow-y-scroll noScroll">
                {
                    myPlaylists?.map((track: any,  idx: any) => {
                        return (
                            <MyPlaylistsItem track={track ? track.track : track} key={idx}/>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default TopRate;