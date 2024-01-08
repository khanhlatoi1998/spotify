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
        path: '/playlist',
        element: <AudioSong />
    }
];