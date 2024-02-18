import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import musicServices from "../api/musicServices";

const Popular: React.FC<any> = ({ popular }) => {
    const { data: dataToplists } = useQuery({
        queryKey: ['dataToplists'],
        queryFn: () => musicServices.getCategoriesPlaylists('toplists', {
            offset: 0,
            limit: 10
        })
    });

    return (
        <div className="mt-8">
            <div className="flex items-center justify-between">
                <p className="font-semibold text-title">Top List</p>
                <NavLink to="/more/toplists" className="text-main">
                    More
                    <span><i className="fa-solid fa-angle-right ml-2"></i></span>
                </NavLink>
            </div>
            <div className="mt-4 flex grid-flow-row items-center overflow-x-scroll w-full noScroll">
                {
                    dataToplists?.playlists?.items?.map((item: any, idx: number) => {
                        return (
                            <div key={idx} className="w-[25%] flex-shrink-0 flex flex-col gap-y-1 pl-[1px] pr-[15px]">
                                <img className="w-[64px] h-[64px] rounded-full object-cover" src={item.images[0].url} alt="" />
                                <p className="truncate">{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Popular;