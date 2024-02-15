import MoreTemplate from "../components/MoreTemplate";
import AudioSong from "../pages/AudioSong";
import HomePage from "../pages/HomePage";
import Search from "../pages/Search";

export const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/search',
        element: <Search />
    },
    {
        path: '/audiosong',
        element: <AudioSong />
    },
    {
        path: '/more',
        element: <MoreTemplate />
    }
];