import { IoIosCheckmark } from "react-icons/io";
import idealFor from "../../data/idealFor";
import { BsPlusCircleDotted } from "react-icons/bs";

const targets = [
    {
        id: 1,
        target: "Fashion Boutiques & Clothing Stores"
    },
    {
        id: 2,
        target: "Accessories & Beauty Stores"
    },
    {
        id: 3,
        target: "Electronics & Gadgets Shop"
    },
    {
        id: 4,
        target: "And more retail businesses"
    }
]

const IdealFor = () => {
  return (
    <section className="w-full  mb-8">
        <div
            className="
            lg:max-w-[1180px]
                    mx-auto

            rounded-none
            sm:rounded-xl

            px-5 md:px-10 p-2 pb-6 lg:py-4 lg:px-6 
                w-full
                bg-transparent
                
                grid


                grid-cols-1
                md:grid-cols-2

                gap-8
                lg:gap-10
            "
        >

            {/* Text Grid */}
            <div className="w-full">
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
                        built for business owners
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
                        Who Is Smart
                        <span className="text-[#B77F58]">
                            Shop
                        </span>{" "}
                        For?
                    </h2>
                </header>

                {/* Descriptions */}
                <div className="">
                    <p className='text-[#4B556F] tracking-wide text-lg my-5 max-w-[500px]'>
                        SmartShop is perfect for retailers and brands who want 
                        to sell online and manage their business more efficiently
                    </p>
                    <h4 className='font-semibold text-[#B77F58] text-xl'>
                        Perfect for:
                    </h4>
                            <div className="space-y-5 mt-5">
                    
                                {targets.map((target, index) => (
                    
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
                                            {target.target}
                                        </p>
                    
                                    </div>
                    
                                ))}
                    
                            </div>
                    
                </div>
            </div>

            {/* Picture Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 pt-18">
                {idealFor.map((feature) => (
                    <article
                        key={feature.id}
                        className="
                            h-[200px]

                            bg-white

                            border
                            border-[#D6DCEB]

                            shadow-sm

                            rounded-2xl

                            overflow-hidden

                            flex
                            flex-col

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:shadow-lg
                        "
                    >
                        {/* Image */}
                        <div className="basis-[80%] overflow-hidden">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="
                                    w-full
                                    h-full

                                    object-cover

                                    transition-transform
                                    duration-500

                                    hover:scale-105
                                "
                            />
                        </div>

                        {/* Title */}
                        <div
                            className="
                                basis-[20%]

                                flex
                                items-center
                                justify-center

                                px-4
                            "
                        >
                            <h3
                                className="
                                    text-[#03045E]

                                    font-semibold
                                    tracking-wide
                                "
                            >
                                {feature.title}
                            </h3>
                        </div>
                    </article>
                ))}

                {/* Many More */}
<article
    className="
        h-[200px]

        bg-white

        border-2
        border-dashed
        border-[#D6DCEB]

        rounded-2xl

        overflow-hidden

        flex
        flex-col

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-lg
    "
>
    {/* Icon Area */}
    <div
        className="
            basis-[80%]

            flex
            items-center
            justify-center

            transition-colors
            duration-300

            group
        "
    >
        <BsPlusCircleDotted
            className="
                text-[#B77F58]

                text-6xl

                transition-all
                duration-300

                group-hover:scale-110
                group-hover:rotate-90
            "
        />
    </div>

    {/* Title */}
    <div
        className="
            basis-[20%]

            flex
            items-center
            justify-center

            px-4
        "
    >
        <h3
            className="
                text-[#03045E]

                font-semibold

                tracking-wide
            "
        >
            And Many More
        </h3>
    </div>
</article>
            </div>
        </div>
    </section>
  )
}

export default IdealFor
