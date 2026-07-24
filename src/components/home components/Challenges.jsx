import { LuArrowRight } from "react-icons/lu";
import challenges from "../../data/challenges";
import Challengescard from "./challengesCard";

const Challenges = () => {
  return (
    <section className="w-full px-5 md:px-15 py-20 bg-white gray-100/50">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          The Challenges Holding Your Business Back
        </h2>
        <div className="h-[3px] w-1/10 bg-yellow-600 mx-auto my-6"/>

        <p className="text-[1.4rem] font-light text-black leading-relaxed">
          All businesses reach a point where manual processes,
          disconnected tools, and outdated systems begin to slow progress. We
          help you identify these challenges and implement
          solutions that improve efficiency, customer
          experience, and sustainable growth.
        </p>
      </header>

      {/* Challenge Cards */}
      <div
        className="
          w-full
          max-w-[1180px]
          mx-auto
          flex
          flex-wrap
          justify-center
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-16
        "
      >
        {challenges.map((challenge) => (
          <Challengescard
            key={challenge.id}
            {...challenge}
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="w-full max-w-3xl mx-auto mt-20 text-center space-y-6 lg:p-6 rounded-4xl">
        <div className="w-24 h-[px] bg-gray-300 mx-auto mb-8" />

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">
          An opportunity to grow.
        </h3>

        <p className="mt-5 text-[1.3rem] font-light leading-relaxed">
          Behind every inefficiency is an opportunity to work smarter. Through Technology,
          CoreStack helps you simplify your work, strengthen your customer relationships, 
          and unleash your business potential.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="#our-services"
            className="
              group
              inline-flex
              items-center
              gap-8
              px-7
              py-3.5
              rounded-full
              bg-primary
               
              border
              border-blue-600/20
              font-semibold
              transition-all
              duration-300
              hover:shadow-lg
              hover:scale-105
              text-[#03045e] yellow-600
            "
          >
            See What We Offer
           <span className="p-2 bg-[#03045e] rounded-full group-hover:rotate-45 transition-transform duration-1000 ">
                <LuArrowRight className="text-white group-hover: " />
           </span>
            
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Challenges;