import { HiMiniArrowSmallDown } from "react-icons/hi2";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import heroImg from "../../assets/smartshop/hero.png";


const CTA = () => {
  return (
    <section className="w-full px-5 md:px-12 mb-8">
        <div
            className="
                w-full
                 bg-[#03045E]
                rounded-xl
                p-5
                lg:p-8
                grid
                grid-col-1
                md:grid-cols-2
                gap-8
            "
        >
            {/* Text Box */}
            <div className="text-white flex flex-col  justify-center">
                <h2
                        className="
                            mt-2
                            text-[2rem]
                            lg:text-5xl
                            font-bold
                            leading-[105%]
                        "
                    >
                        Ready to Digitize Your Business?
                    </h2>
                
                <p className='text-lg tracking-wide max-w-[450px] my-5'>
                    Book a free consultation and let's build a SmartShop
                    that works for you.
                </p>
                        <Link
                            to="/contact"
                            className="
                                group

                                flex
                                items-center
                                justify-center

                                gap-2

                                w-full
                                max-w-[450px]
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

                                font-bold

                                tracking-wide

                                text-[#03045E]

                                transition-all
                                duration-300

                                hover:-translate-y-1

                                hover:border-[#C7C3C8]

                                hover:text-white

                                hover:bg-transparent

                                hover:shadow-lg
                            "
                        >

                            book a free consultation

                            <IoIosArrowRoundForward
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

            {/* Picture Area */}
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
    </section>
  )
}

export default CTA
