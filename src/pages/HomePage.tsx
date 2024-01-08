import { useEffect } from "react";
import Artists from "../components/Artists";
import Popular from "../components/Popular";
import TopRate from "../components/TopRate";

const HomePage = () => {

    const clientID = "773661d2f4b742b89a47794a9eadbe59";
    const clientSecret = "4d9e7d512e6c4d7eb6e46938ddc628fd";
    const token = 'BQCijYz5xWH_xBWT0CqvK6TnCMZZ7S15ti7l1tfYtCyBAXKGGXGKsw2QvcD_CyAmO2JdDY7EHhD5_hlhxfCYExsUyiE4tuVgrxPnjX4w0RdyaU6BFi8_XR9EsMPBp6dFcx4J8CPJuFP0PICpkkT1ggFirLvMglQHgKOS2LFvVrwCr1IwXlPxxb55B4x-KQWeBXWY-M4hfjtuFsQpW57jx740pHJIaLUbnHAUC6g9EfrhSQ2GMvCNDhap5bXuAg7UnWCORidxKNDNe5m6AFQ-m4U7';
    const id = "31oyyfvngktz2bfwsbqoplcs243m";
    const playlists = ["7JlT1ltFiW6QKD0gqsc8ka"];
    // const enpoint = "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLIOWOrpNSUR/playlists"
    const enpoint = "https://api.spotify.com/v1/users/31oyyfvngktz2bfwsbqoplcs243m/playlists?offset=0&limit=20"

    useEffect(() => {
        const authPa = {
            method: 'GET',
            headers: {
                // "Content-Type": "application/x-www-form-urlencoded",
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            // body: "grant_type=client_credentials&client_id=" + clientID + "&client_secret=" + clientSecret
        }

        fetch(enpoint, authPa)
            .then(result => result.json())
            .then(res => console.log(res))

        
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
            <Popular />
            <Artists />
            <TopRate />
        </section>
    )
}

export default HomePage;