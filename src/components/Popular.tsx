import { NavLink } from "react-router-dom";

const Popular = () => {
    return (
        <div className="mt-8">
            <div className="flex items-center justify-between">
                <p className="font-semibold text-title">Popular</p>
                <a href="/categories" className="text-main">
                    More 
                    <span><i className="fa-solid fa-angle-right ml-2"></i></span>
                </a>
            </div>
            <div className="mt-4 flex grid-flow-row items-center overflow-x-scroll w-full noScroll">
                {
                    Array(20).fill('').map((item: any, idx: number) => {
                        return (
                            <div key={idx} className="w-[25%] flex-shrink-0 flex flex-col gap-y-1 pl-[1px] pr-[15px]">
                                  <img className="w-[63px] h-[63px] rounded-full object-cover" src="https://i1.sndcdn.com/avatars-000702078199-txexxd-t500x500.jpg" alt="" />
                                  <p className="truncate">Trending das </p>  
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Popular;