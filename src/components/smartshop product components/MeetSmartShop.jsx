import dashboard from "../../assets/smartshop/dashboard.png";
import smartShopSolutions from "../../data/smartShopSolutions";
import SolutionCard from "./SolutionCard";

const MeetSmartShop = () => {
    return (
        <section className="w-full px-5 md:px-12 mb-8">
            <div
                className="
                    w-full
                    bg-gray-100/50
                    rounded-xl

                    p-4
                    lg:p-6

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



{/* Cards
                <div 
                    className="
                    relative
                    w-full
                    
                    
                    overflow-hidden
                    
                    grid 
                    grid-cols-1 
                    md:grid-cols-2 
                    
                    gap-6
                    md:gap-3 
                    my-12
                ">
                                
                    {smartShopSolutions.map((solution)=>
                        <SolutionCard 
                            key={solution.id}
                            {...solution}
                        />
                        )
                    }
                </div>  */}
