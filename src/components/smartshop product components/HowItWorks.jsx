import howItWorks from "../../data/howItWorks";

const HowItWorks = () => {
    return (
        <section className="w-full  mb-8">
            <div
                className="
                    w-full
                    bg-gray-100/50

                    lg:max-w-[1180px]
                    mx-auto

            rounded-none
            sm:rounded-xl

            px-5 md:px-10 p-2 pb-6 lg:py-4 lg:px-6 
                "
            >
                {/* Heading */}

                <header>
                    <h3
                        className="
                            uppercase
                            text-[12px]
                            lg:text-[14px]
                            tracking-[0.25em]
                            font-bold
                            text-[#4B556F]
                        "
                    >
                        Our Process
                    </h3>

                    <h2
                        className="
                            mt-2
                            text-[2rem]
                            lg:text-5xl
                            font-bold
                            text-[#03045E]
                        "
                    >
                        How Smart
                        <span className="text-[#B77F58]">
                            Shop
                        </span>{" "}
                        Works
                    </h2>
                </header>

{/* ==========================
        Timeline
========================== */}

<div className="mt-16">

    <div
        className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-6
            gap-10
            lg:gap-6
        "
    >
        {howItWorks.map((item, index) => {
            const Icon = item.icon;

            return (
                <article
                    key={item.id}
                    className="
                        relative

                        flex
                        flex-row
                        md:flex-col
                        lg:flex-col

                        items-start
                        md:items-center
                        lg:items-center

                        text-left
                        md:text-center
                        lg:text-center

                        gap-5
                    "
                >
                    {/* ==========================
                            Timeline Lines
                    ========================== */}

                    {/* Mobile Vertical Line */}

                    {index !== howItWorks.length - 1 && (
                        <div
                            className="
                                absolute

                                left-10
                                top-20

                                w-[3px]
                                h-16

                                bg-[#D6DCEB]

                                md:hidden
                            "
                        />
                    )}

                    

{/* Connector Line (Medium Screens) */}
{index % 2 === 0 && index < howItWorks.length - 1 && (
    <div
        className="
            hidden
            md:block
            lg:hidden

            absolute

            top-10
            left-1/2

            w-[calc(100%+4rem)]
            -translate-x-0

            h-[3px]

            bg-[#D7DFF2]

            -z-10
        "
    />
)}
                    {/* Desktop Horizontal Line */}

                    {index !== howItWorks.length - 1 && (
                        <div
                            className="
                                hidden
                                lg:block

                                absolute

                                top-10
                                left-20

                                w-full
                                h-[3px]

                                bg-[#D6DCEB]
                            "
                        />
                    )}

                    {/* ==========================
                            Icon
                    ========================== */}

                    <div
                        className="
                            relative
                            z-10

                            flex-shrink-0

                            w-20
                            h-20

                            rounded-full

                            bg-white

                            border
                            border-[#D6DCEB]

                            shadow-sm

                            flex
                            items-center
                            justify-center

                            transition-all
                            duration-300

                            hover:border-[#03045E]
                            hover:shadow-lg
                        "
                    >
                        <Icon
                            className="
                                size-8
                                text-[#03045E]
                            "
                        />
                    </div>

                    {/* ==========================
                            Text
                    ========================== */}

                    <div>
                        <p
                            className="
                                text-sm
                                font-semibold
                                tracking-[0.15em]
                                text-[#B77F58]
                            "
                        >
                            {item.step}
                        </p>

                        <h3
                            className="
                                mt-2
                                text-xl
                                font-bold
                                text-[#03045E]
                            "
                        >
                            {item.title}
                        </h3>

                        <p
                            className="
                                mt-3

                                text-[15px]
                                leading-7

                                text-[#4B556F]
                            "
                        >
                            {item.description}
                        </p>
                    </div>
                </article>
            );
        })}
    </div>

</div>
            </div>
        </section>
    );
};

export default HowItWorks;