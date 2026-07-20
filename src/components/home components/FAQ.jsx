import { FaChevronCircleDown } from "react-icons/fa";
import { useState } from "react";
import Question from "./question";
import questions from "../../data/questions";
import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";



export default function FAQ(){
                  
                {/*stte for mobile nav accordion */}
                const [isExpanded, setIsExpanded]=useState(1)
                const toggleExpansion =(id)=>{
                      
                     setIsExpanded(isExpanded===id ? null : id)
                    
                }

                
                   return(
                         <section 
                          className="
                              w-full 
                              
                              my-24
                              
                              px-6
                           ">
                           <div className="w-full max-w-[1180px] mx-auto">
                              <header className="text-center pb-4">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-3 ">
                                      Your Questions Answered
                                    </h2>

                                    <div className="h-[3px] w-1/10 bg-yellow-600 mx-auto my-6"/>

                                    <p className="text-[1.3rem] font-light text-black">
                                      Our team had to take time to respond to your frequent queiries.
                                      
                                    </p>
                             </header> 

                             <div className="w-full my-16">
                                    {
                                       questions.map((item)=>(
                                          <Question 
                                             key={item.id} 
                                             {...item}
                                             handleExpansion={toggleExpansion}
                                             isExpanded={isExpanded}
                                          />
                                          ))              
                                    }
                             </div>

                           </div>
                         </section>
                   )
}