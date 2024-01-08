const Artists = () => {
    return (
        <div className="mt-4">
            <div className="flex items-center justify-between">
                <p className="font-semibold text-title">Artists</p>
                <a href="/categories" className="text-main">
                    More
                    <span><i className="fa-solid fa-angle-right ml-2"></i></span>
                </a>
            </div>
            <div className="flex mt-4 overflow-x-scroll noScroll gap-4">
                <div className="w-[35%] flex-shrink-0">
                    <div className="w-full pt-[110%] relative ">
                        <img className="w-full h-full object-cover absolute top-0 left-0 rounded-md" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/250px-Justin_Bieber_in_2015.jpg" alt="" />
                    </div>
                    <p className="text-white mt-4 text-center text-small-1 px-1">Justin Bieber</p>
                </div>
                <div className="w-[35%] flex-shrink-0">
                    <div className="w-full pt-[110%] relative">
                        <img className="w-full h-full object-cover absolute top-0 left-0 rounded-md" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Justin_Bieber_20161111_009-2_%28cropped%29.jpg/220px-Justin_Bieber_20161111_009-2_%28cropped%29.jpg" alt="" />
                    </div>
                    <p className="text-white text-center mt-4 text-small-1 px-1">Justin Bieber</p>
                </div>
                <div className="w-[35%] flex-shrink-0">
                    <div className="w-full pt-[110%] relative">
                        <img className="w-full h-full object-cover absolute top-0 left-0 rounded-md" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Justin_Bieber_20161111_009-2_%28cropped%29.jpg/220px-Justin_Bieber_20161111_009-2_%28cropped%29.jpg" alt="" />
                    </div>
                    <p className="text-white text-center mt-4 text-small-1 px-1">Justin Bieber</p>
                </div>
            </div>
        </div>
    )
};

export default Artists;