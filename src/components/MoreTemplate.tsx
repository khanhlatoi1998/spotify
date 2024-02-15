import ItemMore from "./ItemMore";
import ItemSong from "./ItemSong";

const MoreTemplate = () => {
    return (
        <div className="mt-8  pb-[60px]">
            <p className="font-semibold text-title">More</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
               <ItemMore />
               <ItemMore />
               <ItemMore />
               <ItemMore />
               <ItemMore />
               <ItemMore />
               <ItemMore />
               <ItemMore />
               <ItemMore />
               <ItemMore />
               <ItemMore />
               <ItemMore />
            </div>
            <div className="text-center mt-6 text-main">
                More
            </div>
        </div>
    )
};

export default MoreTemplate;