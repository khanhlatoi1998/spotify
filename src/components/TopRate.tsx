import TopRateItem from "./TopRateItem";

const TopRate = () => {
    return (
        <div className="mt-4">
            <p className="font-semibold text-title">Top Rate</p>
            <div className="mt-4 flex flex-col gap-2">
                <TopRateItem />
                <TopRateItem />
                <TopRateItem />
            </div>
        </div>
    )
};

export default TopRate;