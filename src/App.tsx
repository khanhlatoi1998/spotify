import React from 'react';
import './style/custom.scss';
import HomePage from './pages/HomePage';
import BottomNav from './components/BottomNav';
import Search from './pages/Search';
import AudioSong from './pages/AudioSong';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from './routes';

function App() {
    return (
        <div className="container bg-background px-4 pb-[60px]">
            <BrowserRouter>
                <Routes>
                    {
                        routes.map((route, idx) => {
                            return (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    element={route.element}
                                >
                                </Route>
                            )
                        })
                    }
                </Routes>
                <BottomNav />
            </BrowserRouter>
        </div>
    );
}

export default App;
