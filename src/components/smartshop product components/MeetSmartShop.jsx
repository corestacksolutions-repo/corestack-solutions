import dashboard from "../../assets/smartshop/dashboard.png";
import smartShopSolutions from "../../data/smartShopSolutions";
import SolutionCard from "./SolutionCard";

const MeetSmartShop = () => {
    return (
        <section id="meet-smart-shop" className="w-full  mb-8">
            <div
                className="
                    w-full

                    lg:max-w-[1180px]
                    mx-auto

            bg-gray-100/50

            rounded-none
            sm:rounded-xl

            px-5 md:px-10 p-2 pb-6 lg:py-4 lg:px-6 
                    grid
                    grid-cols-1
                    lg:grid-cols-[55%_1fr]

                    gap-8
                    lg:gap-10

                    items-center
                "
            >
                {/* ==========================
                    Left Column
                ========================== */}

                <div className="relative w-full overflow-hidden rounded-2xl">
                    {/* Overlay */}

                    <div
                        className="
                            absolute
                            inset-0

                            rounded-2xl

                            bg-gradient-to-br
                            from-white/0
                            via-transparent
                            to-[#03045E]/5

                            pointer-events-none
                            z-10
                        "
                    />

                    <img
                        src={dashboard}
                        alt="SmartShop Dashboard Preview"
                        className="
                            block

                            w-full
                            h-full

                            object-cover
                            object-top

                            rounded-2xl

                            transition-transform
                            duration-700

                            hover:scale-[1.02]
                        "
                    />
                </div>

                {/* ==========================
                    Right Column
                ========================== */}

                <div className="min-w-0 w-full">
                    <header className="space-y-2">
                        <h3
                            className="
                                text-[12px]
                                lg:text-[14px]

                                uppercase
                                font-bold

                                tracking-[0.25em]

                                text-[#4B556F]
                            "
                        >
                            The Solution
                        </h3>

                        <h2
                            className="
                                text-[#03045E]

                                text-[2rem]
                                lg:text-5xl

                                font-bold
                                leading-tight
                            "
                        >
                            Meet Smart
                            <span className="text-[#B77F58]">
                                Shop
                            </span>
                        </h2>

                        <p
                            className="
                                max-w-xl

                                text-[#4B556F]

                                text-base
                                lg:text-lg

                                leading-8
                            "
                        >
                            SmartShop is an all-in-one platform that helps you
                            manage your store, delight your customers, and grow
                            your business with confidence.
                        </p>
                    </header>

                    {/* ==========================
                        Solution Cards
                    ========================== */}

                    <div
                        className="
                            mt-6

                            grid
                            grid-cols-1
                            sm:grid-cols-2

                            gap-4
                        "
                    >
                        {smartShopSolutions.map((solution) => (
                            <SolutionCard
                                key={solution.id}
                                {...solution}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeetSmartShop;



