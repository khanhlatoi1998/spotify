const ItemSong: React.FC<any> = (props) => {
    return (
        <div className="w-[35%] flex-shrink-0">
            <div className="w-full pt-[110%] relative ">
                <img className="w-full h-full object-cover absolute top-0 left-0 rounded-md" src={props?.item?.images[0]?.url} alt="" />
            </div>
            <p className="text-white mt-4 text-center text-small-1 px-1"></p>
        </div>
    )
};

export default ItemSong;