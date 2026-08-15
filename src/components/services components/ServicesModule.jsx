import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";

const ServiceModule = ({
  icon,
  title,
  intro,
  problem,
  audience,
  link,
  reverse = false,
}) => {
  const Icon = icon;

  return (
    <article
      className={`
        grid
        lg:grid-cols-2
        gap-12
        items-center
        py-20
        border-b
        border-[#03045e]/10
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* Left Side */}
      <div>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/15">
          <Icon className="size-8 text-primary" />
        </div>

        <h2 className="mt-8 text-3xl md:text-4xl font-bold text-[#03045e]">
          {title}
        </h2>

        <p className="mt-6 text-lg leading-8 text-black/70 ">
          {intro}
        </p>

        <Link
          to={link}
          className=" hidden
            
            items-center
            gap-2
            mt-8
            font-semibold
            text-primary
            group
          "
        >
          Learn More

          <LuArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Right Side */}
      <div className="space-y-8">

        <div className="bg-gray-50 rounded-xl p-6 border border-[#03045e]/10">
          <span className="text-primary font-semibold">
            The Challenge
          </span>

          <p className="mt-3 text-black/70 leading-8">
            {problem}
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 border border-[#03045e]/10">
          <span className="text-primary font-semibold">
            Who It's For
          </span>

          <p className="mt-3 text-black/70 leading-8">
            {audience}
          </p>
        </div>

      </div>
    </article>
  );
};

export default ServiceModule;