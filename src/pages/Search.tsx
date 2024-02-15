import { useQuery } from "@tanstack/react-query";
import BottomNav from "../components/BottomNav";
import musicServices from "../api/musicServices";

const Search = () => {
    const { data: dataRecommendation } = useQuery({
        queryKey: ['recommendation'],
        queryFn: () => musicServices.getRecommendation('seed_genres=classical%2Ccountry%2Cchill', {
            offset: 0,
            limit: 7
        }),
        
    });
    const { data: dataDiscoveries } = useQuery({
        queryKey: ['discoveries'],
        queryFn: () => musicServices.getRecommendation('seed_genres=pop%2Ckpop%2Cchill', {
            offset: 0,
            limit: 20
        }),
    })
    const { data: dataSearched } = useQuery({
        queryKey: ['searched'],
        queryFn: () => musicServices.getRecommendation('seed_genres=pop%2Cromance', {
            offset: 0,
            limit: 20
        }),
    })


    return (
        <div>
            {/* Search */}
            <div className="flex justify-between items-center mt-8">
                <div className="flex gap-2 items-center text-title font-semibold">Search</div>
                <div className="relative">
                    <i className="relative fa-solid fa-bell text-main text-[24px]"></i>
                    <div className="w-[7px] h-[7px] bg-[red] rounded-full absolute left-[65%] top-0"></div>
                </div>
            </div>
            <div className="relative mt-4">
                <input className="w-full placeholder-white px-4 py-2 pl-10 rounded-lg bg-[#DADADA] outline-0 text-white " type="text" placeholder="Havana" />
                <i className="fa-solid fa-magnifying-glass absolute top-[50%] left-4 translate-y-[-50%] text-lg"></i>
            </div>

            {/* Recommendation */}
            <div className="mt-6">
                <p className="text-title font-semibold">Recommendation</p>
                <div className="flex items-center gap-4 mt-4 overflow-scroll noScroll">
                    {
                        dataRecommendation?.tracks?.map((track: any, idx: any) => {
                            return (
                                <div key={idx} className="bg-color-1 rounded-lg px-4 py-2 flex gap-2 items-center justify-center flex-shrink-0">
                                    <i className="fa-solid fa-music text-color-2"></i>
                                    <p className="opacity-opa-1">{track.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Top Searched Songs */}
            <div className="bg-color-1 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                    <div className="font-semibold text-title">
                        Top Songs
                        <i className="fa-solid fa-fire-flame-curved text-[#E02D2D] ml-2"></i>
                    </div>
                    <a href="/categories" className="text-main">
                        More
                        <span><i className="fa-solid fa-angle-right ml-2"></i></span>
                    </a>
                </div>
                <div className="mt-3 flex flex-col gap-3 h-[258px] overflow-y-scroll noScroll">
                    {
                        dataSearched?.tracks?.map((track: any, idx: number) => {
                            return (
                                <div key={idx} className="flex items-center gap-4">
                                    <div>
                                        <p className="font-semibold">{idx + 1}</p>
                                        <i className="fa-solid fa-caret-up text-main mt-[-2px]"></i>
                                    </div>
                                    <img className="w-[40px] h-[40px] object-cover" src={track.album.images[2].url} alt="" />
                                    <div>
                                        <p className=" font-semibold text-small-1">{track.album.name}</p>
                                        <div className="flex gap-2 items-center mt-1">
                                            <i className="fa-solid fa-cloud-arrow-down text-main"></i>
                                            <p className="text-small-2 text-white">{track.artists[0].name}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Discoveries */}
            <div className="mt-6">
                <p className="text-title font-semibold">Discoveries</p>
                <div className="overflow-scroll noScroll">
                    <div className="mt-6 gap-x-4  gap-y-4 container-grid">
                        {
                            dataDiscoveries?.tracks?.map((track: any, idx: any) => {
                                return (
                                    <div key={idx} className="rounded-lg overflow-hidden">
                                        <div className="pt-[80%] relative">
                                            <img className="absolute top-0 left-0 w-full h-full object-cover" src={track.album.images[1].url} alt="" />
                                            {/* <div className="bg-[#00000036] px-4 py-1 absolute bottom-0 left-0 right-0 text-center">{track.name}</div> */}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <BottomNav />
        </div>
    );
};

export default Search;