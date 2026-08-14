import background from "../../assets/smartshop/background.png";

import {
    LiaArrowRightSolid,
    LiaBookOpenSolid,
} from "react-icons/lia";

import { HiMiniArrowSmallDown } from "react-icons/hi2";


import { Link } from "react-router-dom";


const Header = () => {
    return (
        <section
            className="
                relative
                w-full
                min-h-[100vh]

                py-8
                mt-15

                overflow-hidden
            "
        >

            {/* ======================================
                Background Image
            ======================================= */}

            <img
                src={background}
                alt="CoreStack Insights Background"
                className="
                    absolute
                    inset-0

                    w-full
                    h-full

                    object-cover

                    mix-blend-overlay
                "
            />


            {/* ======================================
                Background Overlay
            ======================================= */}

            <div
                className="
                    absolute
                    inset-0

                    w-full
                    h-full

                    bg-white/10
                "
            />


            {/* ======================================
                Content
            ======================================= */}

            <div
                className="
                    relative

                    max-w-5xl
                    mx-auto

                    flex
                    flex-col

                    items-center

                    gap-6

                    text-center

                    text-[#03045E]

                    px-6
                    py-12
                    lg:py-20
                "
            >

                {/* ==================================
                    Badge
                ================================== */}

                <span
                    className="
                        flex
                        items-center
                        gap-3

                        tracking-[0.25em]

                        uppercase

                        text-[11px]
                        lg:text-[12px]

                        text-[#B77F58]

                        bg-white

                        shadow-sm

                        mx-auto
                        w-fit

                        font-semibold

                        rounded-full

                        px-5
                        py-2.5
                    "
                >

                    <LiaBookOpenSolid
                        size={21}
                    />

                    CoreStack Insights

                </span>


                {/* ==================================
                    Main Heading
                ================================== */}

                <h1
                    className="
                        text-4xl
                        md:text-6xl
                        lg:text-7xl

                        font-bold

                        leading-[1.05]

                        tracking-tight
                    "
                >

                    Ideas That Help
                    <br />

                    <span className="text-[#B77F58]">
                        Businesses Move Forward.
                    </span>

                </h1>


                {/* ==================================
                    Description
                ================================== */}

                <p
                    className="
                        max-w-3xl

                        text-lg
                        lg:text-xl

                        font-light

                        leading-relaxed

                        text-[#4B556F]
                    "
                >
                    Explore practical insights on technology, digital
                    transformation, business growth, and the ideas shaping
                    Malawi's evolving digital economy.
                </p>


                {/* ==================================
                    Supporting Statement
                ================================== */}

                <p
                    className="
                        max-w-2xl

                        text-sm
                        lg:text-base

                        leading-relaxed

                        text-[#6B7280]
                    "
                >
                    We share what we learn, what we build, and what we believe
                    businesses need to know to make smarter decisions in a
                    changing digital world.
                </p>


                {/* ==================================
                    Buttons
                ================================== */}

                <div
                    className="
                        flex
                        flex-col
                        md:flex-row

                        items-center
                        justify-center

                        gap-5

                        mt-6

                        w-full
                    "
                >

                    {/* Primary CTA */}

                    <a
                        href="#latest-insights"
                        className="
                            group

                            flex
                            items-center
                            justify-center

                            gap-3

                            w-full
                            md:w-auto

                            px-8
                            py-4

                            rounded-full

                            bg-[#03045E]

                            text-white

                            tracking-widest

                            font-semibold

                            uppercase

                            text-sm

                            shadow-md
                            shadow-[#03045E]/15

                            hover:shadow-xl

                            hover:-translate-y-1

                            hover:bg-[#021F46]

                            transition-all
                            duration-300
                        "
                    >

                        Explore Insights

                        <HiMiniArrowSmallDown
                            size={18}
                            className="
                                transition-transform
                                duration-500

                                group-hover:translate-x-2
                            "
                        />

                    </a>


                    {/* Secondary CTA */}

                    <Link
                        to="/contact"
                        className="
                            group

                            flex
                            items-center
                            justify-center

                            gap-3

                            w-full
                            md:w-auto

                            px-8
                            py-4

                            rounded-full

                            border
                            border-[#03045E]/20

                            bg-white/60

                            backdrop-blur-sm

                            text-[#03045E]

                            tracking-widest

                            font-semibold

                            uppercase

                            text-sm

                            hover:shadow-xl

                            hover:-translate-y-1

                            hover:bg-white

                            transition-all
                            duration-300
                        "
                    >

                        Reach Out to One of Our Experts

                        <LiaArrowRightSolid
                            size={18}
                            className="
                                transition-transform
                                duration-500

                                group-hover:translate-x-2
                            "
                        />

                    </Link>

                </div>

            </div>


            {/* ======================================
                Bottom Fade
            ======================================= */}

            <div
                className="
                    absolute
                    bottom-0
                    left-0

                    w-full

                    h-20

                    bg-gradient-to-b

                    from-transparent
                    via-[#f8fafc]/60
                    to-[#f8fafc]
                "
            />

        </section>
    );
};


export default Header;