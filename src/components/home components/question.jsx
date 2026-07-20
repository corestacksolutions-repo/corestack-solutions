import { FaChevronCircleDown } from "react-icons/fa";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { HiChevronDown, HiPlus } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi";

                
      {/* A question component that structure the layout of question and answer. it accepts props for question and answer display
           and a function and a value/ state of expansion for each question */} 
      {/* the function and question expansion state value help in toggling expansion*/}         

export default function Question({id, Q, A, handleExpansion, isExpanded}){
                        return(
                                <div onClick={()=>handleExpansion(id)} 
                                     className=
                                        {`${id===isExpanded 
                                          ? 
                                          'text-yellow-600 bg-gray-200' 
                                          : 'text-black/70'
                                         } 
                                          transition-all 
                                          text-[14px]
                                          duration-500 
                                        cursor-pointer 
                                        w-full
                                        flex 
                                        justify-between 
                                        gap-4 
                                        my-4 
                                        items-center  
                                        border 
                                        border-blue-600/5
                                        shadow 
                                        rounded-3xl sm 
                                        
                                        
                                        
                                        p-3
                                        `}>
                                    <div className={`${id===isExpanded ? 'h-65 md:h-40 lg:h-30 ' : 'h-14 lg:h-8'} w-full tracking-wide  transition-all duration-500 overflow-hidden space-y-4`}>
                                            <h3 className={` text-[1.2rem] `}>
                                             {Q}
                                             </h3>
                                            <p className={
                                                 `${id===isExpanded 
                                                  ? 
                                                  'opacity-100' 
                                                  : 'opacity-0'} 
                                                  text-black
                                                  transition-all
                                                  tracking-2 
                                                  text-[1.1rem]
                                                  font-light
                                                  duration-500 
                                                  
                                                  
                                                  opacity 
                                                  
                                                  `}
                                                >
                                                {A}
                                            </p>
                                    </div>
                                       <button className="self-start p-1 rounded-full">
                                         <HiChevronDown className={`size-5 shrink-0 transition-all`}/>
                                       </button>
                                     
                                </div>
                        )
}