import background from "../../assets/images/hero/background.png";
import { LuBox } from "react-icons/lu";
import heroServices from "../../data/heroServices";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsChat } from "react-icons/bs";

const HomeHero = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background */}
      <img
        src={background}
        alt="CoreStack team working together"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          -z-10
        "
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-white/20 -z-10" />

      {/* Content */}
      <div className="max-w-[1180px]  px-5 md:px-12 py-10">
        {/* Pill / No-Pill */}
        <div className="flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-white shadow-sm">
          <LuBox className="text-yellow-600" />

          <span className="uppercase tracking-wide text-sm font-medium text-[#B77F58]">
            Smarter Systems. Powering Growth.
          </span>
        </div>

        {/* Headings */}
        <div className="flex flex-col text-[#03045e] leading-[110%] my-6 text-2xl md:text-5xl font-bold">
            <h2>Strategic Solutions.</h2>
            <h2>Built Around You.</h2>
            <h2 className="text-[#B77F58]">Designed to Scale.</h2>
        </div>

        {/* Text description */}
        <p className="text-[#4B556F] text-lg">
            We combine strategy, technology, and execution to help <br />
            you streamline operations, reach more customers, <br />
            and achieve sustainable growth.
        </p>

        {/* Service Icons */}
        <div className="flex flex-wrap gap-8 mt-8">

            {heroServices.map((service) => {
                const Icon = service.icon;

                return (
                <div
                    key={service.id}
                    className="
                    flex
                    flex-col
                    items-center
                    text-center
                    gap-2
                    group
                    cursor-pointer
                    "
                >
                    <div
                    className="
                        bg-[#F2F4FA]
                        rounded-full
                        p-3
                        transition-all
                        duration-300
                        group-hover:bg-[#03045E]
                        group-hover:scale-110
                    "
                    >
                    <Icon
                        size={22}
                        className="
                        text-[#03045E]
                        transition-colors
                        duration-300
                        group-hover:text-white
                        "
                    />
                    </div>

                    <p
                    className="
                        leading-tight
                        text-sm
                        font-medium
                        text-[#4B556F]
                    "
                    >
                    {service.title}
                    <br />
                    {service.subtitle}
                    </p>
                </div>
                );
            })}
        </div>

        {/* Call To Actions */}
        <div className="flex flex-wrap gap-5 my-10">

            {/* Primary CTA */}
            <Link
                to="/services"
                className="
                    group
                    uppercase
                    text-white
                    bg-[#03045e]
                    py-3
                    px-7
                    rounded-full
                    font-medium
                    tracking-wide
                    flex
                    items-center
                    gap-2
                    shadow-md
                    transition-all
                    duration-300
                    hover:bg-white/60
                    hover:text-[#03045e]
                    hover:border
                    hover:border-[#C7C3C8]
                    hover:-translate-y-1
                    hover:shadow-xl
                "
            >
                Explore Our Services

                <IoIosArrowRoundForward
                    size={25}
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
                    uppercase
                    text-[#03045e]
                    border
                    border-[#C7C3C8]
                    bg-white/60
                    backdrop-blur-sm
                    py-3
                    px-7
                    rounded-full
                    font-medium
                    tracking-wide
                    flex
                    items-center
                    gap-2
                    transition-all
                    duration-300
                    hover:bg-[#03045e]
                    hover:text-white
                    hover:border-[#03045e]
                    hover:-translate-y-1
                    hover:shadow-lg
                "
            >
                Let's Talk

                <BsChat
                    size={16}
                    className="
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:rotate-6
                    "
                />
            </Link>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;