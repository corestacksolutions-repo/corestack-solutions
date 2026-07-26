import background from "../../assets/images/hero/background.png";

import { Link } from "react-router-dom";

import { LuBox } from "react-icons/lu";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsChat } from "react-icons/bs";

import heroServices from "../../data/heroServices";

import nanth from "../../assets/clientel/nanth-logo.jpeg";
import daa from "../../assets/clientel/daa.png";

const HomeHero = () => {
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
                Background Image
            =========================== */}

            <img
                src={background}
                alt="CoreStack team collaborating"
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
                    items-center

                    px-6
                    md:px-10
                    lg:px-0

                    py-8
                    lg:py-12
                "
            >

                <div
                    className="
                        w-full
                        max-w-2xl

                        flex
                        flex-col

                        items-center
                        text-center

                        lg:items-start
                        lg:text-left
                    "
                >

                    {/* ==========================
                        Pill
                    =========================== */}

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2

                            rounded-full

                            bg-white

                            border
                            border-gray-100

                            shadow-sm

                            px-4
                            py-2
                        "
                    >

                        <LuBox
                            className="
                                text-[#B77F58]
                                text-lg
                            "
                        />

                        <span
                            className="
                                uppercase

                                tracking-widest

                                text-[11px]
                                sm:text-xs

                                font-semibold

                                text-[#B77F58]
                            "
                        >
                            Smarter Systems. Powering Growth.
                        </span>

                    </div>

                    {/* ==========================
                        Heading
                    =========================== */}

                    <header className="mt-7">

                        <h1
                            className="
                                font-bold

                                leading-[105%]

                                text-[#03045E]

                                text-4xl
                                sm:text-5xl
                                lg:text-6xl
                            "
                        >

                            <span className="block">
                                Strategic Solutions.
                            </span>

                            <span className="block">
                                Built Around You.
                            </span>

                            <span className="block text-[#B77F58]">
                                Designed to Scale.
                            </span>

                        </h1>

                        <p
                            className="
                                mt-6

                                max-w-xl

                                text-base
                                md:text-lg

                                leading-8

                                text-[#4B556F]
                            "
                        >
                            We combine strategy, technology,
                            and execution to help businesses
                            streamline operations, reach more
                            customers, and achieve sustainable
                            growth through practical digital
                            solutions.
                        </p>

                    </header>

                    {/* ==========================
                        Desktop Services
                    =========================== */}

                    <div
                        className="
                            hidden
                            lg:grid

                            w-full

                            grid-cols-5

                            gap-6

                            mt-10
                        "
                    >
                        {heroServices.map((service) => {
                            const Icon = service.icon;

                            return (
                                <article
                                    key={service.id}
                                    className="
                                        group

                                        flex
                                        flex-col

                                        items-start

                                        gap-3

                                        cursor-pointer

                                        transition-all
                                        duration-300

                                        hover:-translate-y-1
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-center

                                            h-14
                                            w-14

                                            rounded-full

                                            bg-[#F2F4FA]

                                            transition-all
                                            duration-300

                                            group-hover:bg-[#03045E]
                                            group-hover:shadow-lg
                                        "
                                    >
                                        <Icon
                                            size={24}
                                            className="
                                                text-[#03045E]

                                                transition-all
                                                duration-300

                                                group-hover:text-white
                                                group-hover:scale-110
                                            "
                                        />
                                    </div>

                                    <p
                                        className="
                                            text-sm
                                            leading-tight
                                            font-medium
                                            text-[#B77F58]
                                        "
                                    >
                                        {service.title}
                                        <br />
                                        {service.subtitle}
                                    </p>

                                </article>
                            );
                        })}
                    </div>

                    {/* ==========================
                        Mobile Trust Badges
                    =========================== */}

                    <div
                        className="
                            flex
                            lg:hidden

                            flex-wrap

                            justify-center

                            gap-3

                            mt-8
                        "
                    >

                        <span
                            className="
                                rounded-full

                                border

                                border-[#D6DCEB]

                                bg-white/70

                                backdrop-blur-sm

                                px-4
                                py-2

                                text-sm
                                font-medium

                                text-[#03045E]
                            "
                        >
                            ✓ Strategy First
                        </span>

                        <span
                            className="
                                rounded-full

                                border

                                border-[#D6DCEB]

                                bg-white/70

                                backdrop-blur-sm

                                px-4
                                py-2

                                text-sm
                                font-medium

                                text-[#03045E]
                            "
                        >
                            ✓ Tailored Solutions
                        </span>

                        <span
                            className="
                                rounded-full

                                border

                                border-[#D6DCEB]

                                bg-white/70

                                backdrop-blur-sm

                                px-4
                                py-2

                                text-sm
                                font-medium

                                text-[#03045E]
                            "
                        >
                            ✓ Long-Term Partnership
                        </span>

                    </div>

                    {/* ==========================
                        Call To Action
                    =========================== */}

                    <div
                        className="
                            w-full

                            flex
                            flex-col
                            sm:flex-row

                            items-stretch
                            sm:items-center

                            lg:items-start

                            gap-4

                            mt-10
                            lg:mt-12
                        "
                    >

                        {/* Primary CTA */}

                        <Link
                            to="/services"
                            className="
                                group

                                w-full
                                sm:w-auto

                                flex
                                items-center
                                justify-center

                                gap-2

                                rounded-full

                                bg-[#03045E]

                                px-8
                                py-4

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

                                hover:bg-[#021F46]

                                hover:shadow-xl
                            "
                        >

                            Explore Our Services

                            <IoIosArrowRoundForward
                                size={24}
                                className="
                                    transition-transform
                                    duration-300

                                    group-hover:translate-x-1
                                "
                            />

                        </Link>

                        {/* Secondary CTA */}

                        <Link
                            to="/contact"
                            className="
                                group

                                w-full
                                sm:w-auto

                                flex
                                items-center
                                justify-center

                                gap-2

                                rounded-full

                                border

                                border-[#C7C3C8]

                                bg-white/70

                                backdrop-blur-sm

                                px-8
                                py-4

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

                            Let's Talk

                            <BsChat
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
                        Trusted By
                    =========================== */}

                    <div
                        className="
                            mt-12

                            w-full

                            flex
                            flex-col
                            sm:flex-row

                            items-center
                            lg:items-start

                            justify-center
                            lg:justify-start

                            gap-5
                        "
                    >

                        {/* Client Logos */}

                        <div className="flex items-center">

                            <div
                                className="
                                    relative

                                    h-12
                                    w-12

                                    rounded-full

                                    bg-white

                                    border
                                    border-gray-200

                                    shadow-sm

                                    flex
                                    items-center
                                    justify-center

                                    z-20

                                    transition-all
                                    duration-300

                                    hover:-translate-y-1
                                    hover:shadow-md
                                "
                            >
                                <img
                                    src={nanth}
                                    alt="Nanth Consults"
                                    className="w-6 object-contain"
                                />
                            </div>

                            <div
                                className="
                                    relative

                                    h-12
                                    w-12

                                    rounded-full

                                    bg-white

                                    border
                                    border-gray-200

                                    shadow-sm

                                    flex
                                    items-center
                                    justify-center

                                    -ml-3

                                    z-10

                                    transition-all
                                    duration-300

                                    hover:-translate-y-1
                                    hover:shadow-md
                                "
                            >
                                <img
                                    src={daa}
                                    alt="DAA"
                                    className="w-6 object-contain"
                                />
                            </div>

                        </div>

                        {/* Trust Copy */}

                        <div
                            className="
                                text-center
                                lg:text-left
                            "
                        >

                            <p
                                className="
                                    text-sm

                                    uppercase

                                    tracking-[0.18em]

                                    text-[#6B7280]
                                "
                            >
                                Trusted By
                            </p>

                            <h3
                                className="
                                    mt-1

                                    text-lg

                                    font-semibold

                                    text-[#03045E]
                                "
                            >
                                Growing Businesses Across Malawi
                            </h3>

                        </div>

                    </div>

                </div>

            </div>

            {/* ==========================
                Decorative Bottom Fade
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

export default HomeHero;