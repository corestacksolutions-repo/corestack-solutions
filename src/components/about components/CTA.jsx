import { LuArrowRight, LuRoute, LuSettings2 } from "react-icons/lu";
import { Link } from "react-router-dom"

const CTA = () =>{
    return(
           <section className="w-full max-w-[1180px] mx-auto rounded-3xl p-6 borbg-gradient-to-br from-[03045e] to-blue0">
                <div className="max-w-3xl mx-auto text-center">
               
                       <div className="hiddn flex justify-center">
                         <div className="w-16 h-16 border rounded-full bg-primary/10 flex items-center justify-center">
                           <LuRoute className="text-3xl text-primary" />
                         </div>
                       </div>
               
                       <h3 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold">
                         Great Results Begin With the Right Process.
                       </h3>
               
                       <p className="mt-8 text-[1.3rem] font-light text-black leading-relaxed">
                         Technology delivers the most when it's guided by a structured approach.
                         Our approach ensures every solution is tailored to your business and
                         designed to deliver measureable impact.
                       </p>
               
                      <Link
                         to="/approach"
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
                           Discover Our Process
                          <span className="p-2 bg-[#03045e] rounded-full group-hover:translate-x-3 transition-transform duration-1000 ">
                               <LuArrowRight className="text-white " />
                          </span>  
                       </Link>
                     </div>
           </section>
    )
}

export default CTA;