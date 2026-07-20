import { BiBriefcase } from "react-icons/bi";
import { BsPuzzle } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import { ImTarget } from "react-icons/im";
import { LuBlocks, LuBuilding2, LuLayers3, LuUsersRound } from "react-icons/lu";


const WhyUs = () =>{
      return(
           <section 
              className="
                w-full
                px-6
                py-24
                
            ">
                <div className=" w-full max-w-[1180px] mx-auto grid md:grid-cols-2 gap-12">
                     
                     <header className="space-y-6 text-black h-full space-y-8 text-[1.3rem]">
                         <div className="w-2/10 h-2 bg-[#03045e] mb-16"/>

                           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ">
                               Why CoreStack
                           </h1>
                           <h2 className="text-yellow-600 uppercase text-[1rem] mb-12">
                               A Different Way to Solve Business Challenges
                           </h2>
                           <p className="font-light tracking-wide leading-relaxed">
                                 Every project is designed to solve a real business challenge, 
                                 improve efficiency, and support your long-term goals. We 
                                 believe the best technology is simple to use, practical to 
                                 maintain, and valuable to the people who rely on it every day.
                           </p>
                     </header>
                     
                    
                          <div className="
                                 w-full
                                 space-y-12 
                                 text-[1.3rem]                                
                                 
                           "> 
                            <article 
                             className="
                              w-full
                              
                              space-y-6
                              border-b
                              border-gray-600
                              pb-4
                              space-y-6
                              tracking -wide
                              
                           ">
                           <h2 className="">
                               <b className="text-yellow-600 md:text-black mr-4 font-normal">01</b> Business-First Approach
                           </h2>
                           <p className="font-light">
                                We start with your business, not the technology. By understanding your 
                                processes and objectives, we deliver solutions that 
                                address real operational needs.
                           </p>  
                        </article>
                        
                              
                        <article 
                           className="
                              w-full
                              
                              space-y-6
                              border-b
                              border-gray-600
                              pb-4
                              space-y-6
                              tracking-wide
                              leading-relaxed
                           ">
                           <h2 className="">  
                               <b className="text-yellow-600 md:text-black mr-4 font-normal">02</b>  Tailored Solutions
                           </h2>
                           <p className="font-light">
                              
                              Our solutions are designed around 
                              existing business processes so they naturally become part of daily 
                              operations.
                           </p>     
                        </article>
                        <article 
                           className="
                              w-full
                              
                              
                              space-y-6
                              border-b
                              border-gray-600
                              pb-4
                              space-y-6
                              tracking-wide
                              leading-relaxed
                           ">
                           <h2 className="">
                              <b className="text-yellow-600 md:text-black mr-4 font-normal">03</b> Long-Term Partnership
                           </h2>
                           <p className="font-light">
                              After delivery, we continue supporting our clients as their businesses evolve.
                           </p>
                        </article>
                     </div> 

                     
                </div>
                {/*container */}
            </section>
      )
}

export default WhyUs;