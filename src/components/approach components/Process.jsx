import ProcessCard from "./ProcessCard";
import workProcess from "../../data/process";
import { LuArrowRight, LuHandshake } from "react-icons/lu";
import { Link } from "react-router-dom";

const Process = () => {
  return (
    <section id="how-we-work" className="w-full px-5 md:px-15 py-20 bg-gray-100/50">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center space-y-6 space-y-12">
        {/* <span className="text-primary font-semibold tracking-wide uppercase">
          How We Work
        </span> */}

        <h2 className="text-3xl md:text-4xl font-bold">
          Working Together in Every Step
        </h2>

        <p className="text-[1.3rem] font-light leading-relaxed">
          Every business is different, and so is every solution. That's why we
          don't believe in one-size-fits-all technology. We take the time to
          understand your business, uncover what's holding it back, and work
          alongside you to implement solutions that make a real difference.
          From our first conversation to long after launch, we're committed to
          helping you grow with confidence.
        </p>
      </header>

      {/* Process Cards */}
      <div
        className="
          w-full
          max-w-[1180px]
          space-y-24
          mx-auto
          mt-16
        "
      >
        {workProcess.map((process, index) => (
          <ProcessCard key={process.id} 
          {...process}
          reverse={index % 2 !== 0} 
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto mt-20 text-center">
        <div className="w-24 h-[1px] bg-gray-300 mx-auto mb-8" />

        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <LuHandshake className="text-3xl text-primary" />
          </div>
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Technology works best when people work together.
        </h3>

        <p className="mt-8 text-[1.3rem] font-light text-black leading-relaxed">
          We believe the best digital solutions are built through collaboration,
          not assumptions. That's why we see every client as a partner, every
          project as a shared journey, and every success as something we
          celebrate together.
        </p>

       <Link
          to="/contact"
            className="
              group
              inline-flex
              items-center
              gap-8
              px-7
              py-3.5
              rounded-full
              bg-primary
              my-16
              
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
            Start a Conversation
           <span className="p-2 bg-[#03045e] rounded-full group-hover:translate-x-3 transition-transform duration-1000 ">
                <LuArrowRight className="text-white " />
           </span>  
        </Link>
      </footer>
    </section>
  );
};

export default Process;