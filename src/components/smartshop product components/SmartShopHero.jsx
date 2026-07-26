import background from "../../assets/smartshop/background.png";

import { HiMiniArrowSmallDown } from "react-icons/hi2";
import { IoIosArrowRoundForward } from "react-icons/io";

import { Link } from "react-router-dom";

import smartShopKPI from "../../data/smartShopKPI";

import heroImg from "../../assets/smartshop/hero.png";

const SmartShopHero = () => {
    return (

        <section
            className="
                relative
                overflow-hidden

                min-h-screen

                pt-16
                lg:pt-20
            "
        >

            {/* ==========================
                Background
            =========================== */}

            <img
                src={background}
                alt="SmartShop background"
                className="
                    absolute
                    inset-0

                    w-full
                    h-full

                    object-cover

                    object-[72%]
                    md:object-center
                    lg:object-right

                    -z-20
                "
            />

            {/* ==========================
                Overlay
            =========================== */}

            <div
                className="
                    absolute
                    inset-0

                    bg-white/55
                    md:bg-white/40
                    lg:bg-white/20

                    -z-10
                "
            />

            {/* ==========================
                Main Container
            =========================== */}

            <div
                className="
                    max-w-[1180px]
                    mx-auto

                    min-h-[calc(100vh-64px)]

                    flex
                    flex-col
                    lg:flex-row

                    justify-center
                    lg:justify-between

                    lg:items-center

                    gap-4
                    lg:gap-16

                    px-6
                    md:px-10
                    lg:px-0

                    py-10
                    lg:py-16
                "
            >

                {/* ==========================
                    Text Content
                =========================== */}

                <div
                    className="
                        w-full

                        lg:flex-1

                        flex
                        flex-col

                        items-center
                        text-center

                        lg:items-start
                        lg:text-left
                    "
                >

                    {/* ==========================
                        Product Pill
                    =========================== */}

                    <div
                        className="
                            inline-flex
                            items-center

                            rounded-full

                            bg-[#FEE2E2]

                            px-4
                            py-2

                            shadow-sm
                        "
                    >

                        <span
                            className="
                                uppercase

                                tracking-widest

                                text-[11px]
                                sm:text-xs

                                font-semibold

                                text-[#DC2626]
                            "
                        >
                            Our Product
                        </span>

                    </div>

                    {/* ==========================
                        Heading
                    =========================== */}

                    <header
                        className="
                            mt-8

                            max-w-[620px]
                        "
                    >

                        <h1
                            className="
                                uppercase

                                font-bold

                                leading-[100%]

                                text-[#03045E]

                                text-5xl
                                sm:text-6xl
                                lg:text-7xl
                            "
                        >

                            Smart

                            <span className="text-[#B77F58]">
                                Shop
                            </span>

                        </h1>

                        <h2
                            className="

                                font-bold

                                leading-[110%]

                                text-[#03045E]

                                text-2xl
                                sm:text-3xl

                                mt-8
                                
                            "
                        >

                            <span className="block">
                                The Digital Storefront
                            </span>

                            <span className="block">
                                Built For Modern Businesses.
                            </span>

                        </h2>

                        <p
                            className="
                                mt-8

                                text-base
                                md:text-lg

                                leading-8

                                text-[#4B556F]
                            "
                        >
                            SmartShop helps businesses showcase products,
                            manage orders, track inventory, and deliver
                            seamless shopping experiences — all from one
                            intuitive platform designed for growth.
                        </p>

                    </header>

                    {/* ==========================
                        CTA Buttons
                    =========================== */}

                    <div
                        className="
                            mt-10

                            w-full

                            flex
                            flex-col

                            sm:flex-row

                            gap-4

                            justify-center
                            lg:justify-start
                        "
                    >

                        {/* Primary */}

                        <Link
                            to="/services"
                            className="
                                group

                                flex
                                items-center
                                justify-center

                                gap-2

                                w-full
                                sm:w-auto

                                rounded-full

                                bg-[#03045E]

                                px-7
                                py-3.5

                                uppercase

                                text-sm

                                font-medium

                                tracking-wide

                                text-white

                                shadow-md
                                shadow-[#03045E]/20

                                transition-all
                                duration-300

                                hover:-translate-y-1

                                hover:bg-white

                                hover:text-[#03045E]

                                hover:border
                                hover:border-[#C7C3C8]

                                hover:shadow-xl
                            "
                        >

                            Book a Demo

                            <IoIosArrowRoundForward
                                size={24}
                                className="
                                    transition-transform
                                    duration-300

                                    group-hover:translate-x-1
                                "
                            />

                        </Link>

                        {/* Secondary */}

                        <Link
                            to="/contact"
                            className="
                                group

                                flex
                                items-center
                                justify-center

                                gap-2

                                w-full
                                sm:w-auto

                                rounded-full

                                border
                                border-[#C7C3C8]

                                bg-white/70

                                backdrop-blur-sm

                                px-7
                                py-3.5

                                uppercase

                                text-sm

                                font-medium

                                tracking-wide

                                text-[#03045E]

                                transition-all
                                duration-300

                                hover:-translate-y-1

                                hover:bg-[#03045E]

                                hover:text-white

                                hover:border-[#03045E]

                                hover:shadow-lg
                            "
                        >

                            Explore Features

                            <HiMiniArrowSmallDown
                                size={16}
                                className="
                                    transition-all
                                    duration-300

                                    group-hover:rotate-6
                                    group-hover:scale-110
                                "
                            />

                        </Link>

                    </div>

                                        {/* ==========================
                        SmartShop KPIs
                    =========================== */}

                    <div
                        className="
                            w-full

                            mt-12
                            lg:mt-16

                            grid

                            grid-cols-4

                            gap-4
                            lg:gap-6
                        "
                    >

                        {smartShopKPI.map((kpi) => {

                            const Icon = kpi.icon;

                            return (

                                <article
                                    key={kpi.id}
                                    className="
                                        group

                                        flex
                                        flex-col
                                        lg:flex-row

                                        items-center
                                        lg:items-center

                                        justify-start

                                        gap-3

                                        transition-all
                                        duration-300

                                        cursor-pointer

                                        hover:-translate-y-1
                                    "
                                >

                                    {/* Icon */}

                                    <div
                                        className="
                                            shrink-0

                                            flex
                                            items-center
                                            justify-center

                                            w-8
                                            h-8

                                            rounded-full

                                            bg-[#F2F4FA]

                                            transition-all
                                            duration-300

                                            group-hover:bg-[#03045E]
                                            group-hover:shadow-lg
                                        "
                                    >

                                        <Icon
                                            size={16}
                                            className="
                                                text-[#03045E]

                                                transition-all
                                                duration-300

                                                group-hover:text-white
                                                group-hover:scale-110
                                            "
                                        />

                                    </div>

                                    {/* Text */}

                                    <div
                                        className="
                                            text-center
                                            lg:text-left
                                        "
                                    >

                                        <p
                                            className="
                                                text-[10px]
                                                sm:text-[12px]

                                                font-medium

                                                leading-tight

                                                text-[#B77F58]

                                                whitespace-nowrap
                                            "
                                        >
                                            {kpi.title}
                                        </p>

                                    </div>

                                </article>

                            );

                        })}

                    </div>

                </div>

                                {/* ==========================
                    Hero Image
                =========================== */}

                <div
                    className="
                        w-full

                        lg:flex-1

                        flex
                        items-center
                        justify-center

                        mt-14
                        lg:mt-0
                    "
                >

                    <div
                        className="
                            relative

                            w-full

                            max-w-[640px]

                            overflow-hidden

                            rounded-[28px]

                            border
                            border-[#03045E]/10

                            bg-white

                            shadow-[0_30px_80px_rgba(3,4,94,0.12)]

                            transition-all
                            duration-500

                            hover:-translate-y-2
                            hover:shadow-[0_40px_100px_rgba(3,4,94,0.18)]
                        "
                    >

                        {/* Decorative Gradient */}

                        <div
                            className="
                                pointer-events-none

                                absolute
                                inset-0

                                bg-gradient-to-br
                                from-white/0
                                via-transparent
                                to-[#03045E]/5

                                z-10
                            "
                        />

                        <img
                            src={heroImg}
                            alt="SmartShop Dashboard Preview"
                            className="
                                block

                                w-full

                                h-auto

                                object-cover
                                object-top

                                transition-transform
                                duration-700

                                hover:scale-[1.02]
                            "
                        />

                    </div>

                </div>

            </div>

            {/* ==========================
                Bottom Fade
            =========================== */}

            <div
                className="
                    pointer-events-none

                    absolute
                    bottom-0
                    left-0

                    h-24
                    w-full

                    bg-gradient-to-t
                    from-white
                    via-white/70
                    to-transparent
                "
            />

        </section>

    );
};

export default SmartShopHero;