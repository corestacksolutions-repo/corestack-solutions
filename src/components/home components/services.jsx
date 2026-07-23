
import { HiArrowRight, HiChevronRight } from "react-icons/hi";
import services from "../../data/services";
import ServicesCard from "./services card";
import { Link } from "react-router-dom";
const Services = () => {
        return(
               <section id="our-services" className="w-full px-5 md:px-15 py-10 bg-gray-100/50">
                     <header className="mt-12 w-fit mx-auto text-center space-y-6">
                          
                          <h1 className="text-3xl md:text-5xl font-bold my-3">
                                  Our Services
                         </h1>
                         <h2 className="text-center mx-auto text-yellow-600 text-[0.9rem] uppercase my-8">
                             Digital solutions designed around your business
                         </h2>
                          
                        <p className="hidden w-full   text-[1.3rem] font-light  tracking-wide">
                            Transforming business challenges into opportunities 
                            through purposeful digital innovations.
                        </p>
                     </header>
                    <div 
                         className="
                            relative
                            w-full
                            max-w-[1180px]
                            mx-auto 
                            bg-gray-100 /40
                            overflow-hidden
                            p-4
                            md:p-6
                            lg:p-12
                            rounded-4xl
                            grid 
                            grid-cols-1 
                            md:grid-cols-2 
                            lg:grid-cols-3 
                            gap-6 
                            my-12
                            ">
                            
                            {services.map((service)=>
                               <ServicesCard 
                                  key={service.id}
                                  {...service}
                                />
                              )
                            } 
                    </div>
                   
               </section>
        )
    }
export default Services;