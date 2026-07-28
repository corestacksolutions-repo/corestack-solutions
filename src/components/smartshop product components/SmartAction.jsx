import { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";

import smartShopSlides from "../../data/smartShopSlides";

const SmartAction = () => {

    /*
    ==========================================
    Active Slide
    ==========================================
    */

    const [activeSlide, setActiveSlide] = useState(0);

    const slide = smartShopSlides[activeSlide];

    return (
        <section className="w-full px-5 md:px-12 mb-8">
            <div
                className="
                    w-full

                    bg-gray-100/50

                    rounded-xl

                    p-5
                    lg:p-8
                "
            >

                {/* =====================================
                    Header
                ====================================== */}

                <header
                    className="
                        flex
                        flex-col

                        gap-8
                    "
                >

                    {/* Heading + Desktop Buttons */}

                    <div
                        className="
                            flex

                            flex-col
                            lg:flex-row

                            lg:items-center
                            lg:justify-between

                            gap-8
                        "
                    >

                        {/* Heading */}

                        <div className="flex-shrink-0">

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
                                Built For Your Business
                            </h3>

                            <h2
                                className="
                                    mt-2

                                    text-[2rem]
                                    lg:text-5xl

                                    font-bold

                                    leading-tight

                                    whitespace-nowrap

                                    text-[#03045E]
                                "
                            >
                                See Smart
                                <span className="text-[#B77F58]">
                                    Shop
                                </span>{" "}
                                in <br /> Action
                            </h2>

                        </div>

                        {/* Desktop Buttons */}

                        <div
                            className="
                                hidden
                                lg:flex

                                items-center

                                gap-3
                            "
                        >

                            {smartShopSlides.map((item, index) => (

                                <button
                                    key={item.id}

                                    onClick={() => setActiveSlide(index)}

                                    className={`
                                        whitespace-nowrap

                                        rounded-full

                                        px-6
                                        py-3

                                        uppercase

                                        text-sm

                                        font-medium

                                        tracking-wide

                                        transition-all
                                        duration-300

                                        ${
                                            activeSlide === index
                                                ? "bg-[#03045E] text-white shadow-lg"
                                                : "border border-[#C7C3C8] bg-white text-[#03045E] hover:bg-[#03045E] hover:text-white hover:border-[#03045E] hover:-translate-y-1"
                                        }
                                    `}
                                >
                                    {item.button}
                                </button>

                            ))}

                        </div>

                    </div>

                </header>

{/* =====================================
    Slider
====================================== */}

<div
    className="
        mt-10

        grid
        grid-cols-1
        lg:grid-cols-[35%_1fr]

        gap-8

        items-center
    "
>

    {/* ===========================
        Desktop Text Panel
    ============================ */}

    <article
        className="
            hidden
            lg:flex

            flex-col

            rounded-[28px]

            border
            border-[#C7C3C8]

            bg-white

            p-8

            shadow-sm

            min-h-[520px]

            justify-between
        "
    >

        <div>

            <h3
                className="
                    text-3xl

                    font-bold

                    text-[#03045E]

                    leading-tight
                "
            >
                {slide.title}
            </h3>

            <p
                className="
                    mt-5

                    text-lg

                    leading-8

                    text-[#4B556F]
                "
            >
                {slide.description}
            </p>

        </div>

        <div className="space-y-5 mt-5">

            {slide.features.map((feature, index) => (

                <div
                    key={index}
                    className="
                        flex
                        items-start

                        gap-4
                    "
                >

                    <div
                        className="
                            w-8
                            h-8

                            rounded-full

                            bg-[#03045E]

                            flex
                            items-center
                            justify-center

                            flex-shrink-0
                        "
                    >
                        <IoIosCheckmark
                            className="
                                text-white
                                text-xl
                            "
                        />
                    </div>

                    <p
                        className="
                            text-[#4B556F]

                            text-base

                            leading-7
                        "
                    >
                        {feature}
                    </p>

                </div>

            ))}

        </div>

    </article>

    {/* ===========================
        Image Panel
    ============================ */}

    <div
        className="
            flex
            flex-col
            items-center
        "
    >

        <div
            className="
                relative

                w-full

                overflow-hidden

                rounded-[28px]

                border
                border-[#03045E]/10

                bg-white

                shadow-[0_30px_80px_rgba(3,4,94,0.12)]

                transition-all
                duration-500
            "
        >

            {/* Decorative Gradient */}

            <div
                className="
                    absolute
                    inset-0

                    bg-gradient-to-br
                    from-white/0
                    via-transparent
                    to-[#03045E]/5

                    pointer-events-none

                    z-10
                "
            />

            <img
                src={slide.image}
                alt={slide.title}
                className="
                    block

                    w-full

                    object-cover

                    transition-all
                    duration-500
                "
            />

        </div>

        {/* ===========================
            Mobile Buttons
        ============================ */}

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

            {smartShopSlides.map((item, index) => (

                <button
                    key={item.id}

                    onClick={() => setActiveSlide(index)}

                    className={`
                        whitespace-nowrap

                        rounded-full

                        px-5
                        py-3

                        uppercase

                        text-sm

                        font-medium

                        tracking-wide

                        transition-all
                        duration-300

                        ${
                            activeSlide === index
                                ? "bg-[#03045E] text-white shadow-lg"
                                : "border border-[#C7C3C8] bg-white text-[#03045E]"
                        }
                    `}
                >
                    {item.button}
                </button>

            ))}

        </div>

    </div>

</div>
</div>
</section>
);
};

export default SmartAction;
