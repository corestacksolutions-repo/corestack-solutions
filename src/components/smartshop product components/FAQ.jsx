import { FaChevronCircleDown } from "react-icons/fa";
import { useState } from "react";
import Question from "./Question";
import smartShopFAQs from "../../data/smartShopFAQs";
import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";

const FAQ = () => {

    {/*stte for mobile nav accordion */}
                    const [isExpanded, setIsExpanded]=useState(1)
                    const toggleExpansion =(id)=>{
                          
                         setIsExpanded(isExpanded===id ? null : id)
                        
                    }

  return (
        <section className="w-full px-5 md:px-12 mb-8">
            <div
                className="
                    w-full
                    bg-gray-100/50
                    rounded-xl
                    p-5
                    lg:p-8
                "
            >
                {/* Heading */}

                <header>
                    <h3
                        className="
                            uppercase
                            text-[12px]
                            lg:text-[14px]
                            tracking-[0.25em]
                            font-bold
                            text-[#B77F58]
                        "
                    >
                        Questions?
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
                        Frequently Asked Questions
                    </h2>
                </header>

                <div className="w-full my-16">
                                    {
                                       smartShopFAQs.map((item)=>(
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

export default FAQ
