import { PiNumberOne } from "react-icons/pi";


const Approach = () =>{
        return(
            <section 
               className="
                  w-full
                  text-[#1e293b] 
                  px-6  
              "> 
              <header className="lg:w-6/10 mx-auto text-[20px] space-y-6">
                    <h1 className=" text-4xl font-bold text-center my-6">
                        How We Work
                    </h1>
                    <p className="text-center ">
                        
                    </p>
              </header>
                
                {/*container */}
                <div 
                  className="
                    w-full
                    max-w-[1180px]
                    mx-auto
                    
                    mt-24
                    
                    text-lg
                    
                    grid
                    lg:grid-cols-[1fr_auto_1fr]
                    md:grid-rows-5
                    gap-x-6
                    
                    
                 
                 ">
                   <article className="hidden w-full h-fit flex justify-end py-4 space-y-3">
                        <div className="size-15 flex items-center justify-center p-6 rounded-full border font-bold">
                            01
                        </div> 
                   </article>

                   {/*Vertical line*/}
                   <article 
                       className="
                         hidden
                         md:block
                          
                          md:col-start-2
                          md:sticky 
                          top-28 
                          w-[3px]
                          rounded-full
                          h-30 
                          bg-[#03045e]
                          shadow
                          shadow-md
                          shadow-red-900

                    "/>
                   
                   <article className=" 
                               md:col-start-3 
                               w-full 
                               h-fit 
                               p-4 
                               border -dotted 
                               rounded-md 
                               space-y-3 
                               
                               text-lg
                               "
                        >
                        <div 
                            className="
                                size-12  
                                flex 
                                items-center 
                                justify-center 
                                p-2 
                                bg-[#03045e] 
                                font-bold 
                                text-white 
                                rounded-full
                        ">
                            01
                        </div>
                        <h1 className="font-bold">
                            Understand
                        </h1>
                        <p className="text-black">
                            Every engagement begins with understanding the business. We take time to learn 
                            how the organization operates, the challenges it faces, and the outcomes it wants 
                            to achieve before recommending any solution.
                        </p>
                        

                   </article>
                   <article 
                        className="
                           md:col-start-1 
                           md:row-start-2 
                           flex flex-col 
                           md:text-end 
                           w-full 
                           h-fit 
                           p-6 border-dotted rounded-md space-y-3 
                           border
                        ">
                        <div className="size-12 md:self-end flex items-center justify-center p-2 bg-[#03045e] font-bold text-white rounded-full">
                            02
                        </div>
                        <h1 className="font-bold">
                            Define
                        </h1>
                        <p className="">
                            We translate business needs into clear solution requirements to ensure 
                            making recommendation that addresses the right problem and supports a
                             meaningful business objective.
                        </p>
                        
                   </article>

                    
                   <article className="md:col-start-3 md:row-start-3 flex flex-col w-full h-fit p-6 bor der border-dotted rounded-md space-y-3 ">
                        <div className="size-12 flex items-center justify-center p-2 bg-[#03045e] font-bold text-white rounded-full">
                            03
                        </div>
                        <h1 className="font-bold">
                            Design The Solution
                        </h1>
                        <p className="">
                            Every solution is designed around the realities of the business it serves. 
                            Workflows, customers, teams, and objectives all influence the decisions 
                            we make.
                        </p>
                        <p className="">
                           We avoid unnecessary complexity and focus on solutions that are practical, 
                           scalable, and aligned with business goals.
                        </p>
                   </article>



                    <article className="md:col-start-1 md:row-start-4 flex flex-col md:text-end w-full h-fit p-6 b order border-dotted rounded-md space-y-3 ">
                        <div className="size-12 md:self-end flex items-center justify-center p-2 bg-[#03045e] font-bold text-white rounded-full">
                            04
                        </div>
                        <h1 className="font-bold">
                            Deliver
                        </h1>
                        <p className="">
                            Successful delivery goes beyond launching a product or system. Our focus remains on creating outcomes that improve operations, strengthen customer experiences, and support business performance.
                        </p>
                        <p className="">
                            Technology becomes valuable when it creates measurable impact in everyday operations.
                        </p>
                   </article>


                   <article className="hidden md:col-start-1 md:row-start-5 w-full h-fit flex flex-col">
                        <div className=" size-15 self-end flex items-center justify-center p-6 rounded-full border font-bold">
                            05
                        </div> 
                   </article>

                   <article className="md:col-start-3 md:row-start-5 flex flex-col w-full h-fit p-6 bord er border-dotted rounded-md space-y-3 ">
                        <div className="size-12 flex items-center justify-center p-2 bg-[#03045e] font-bold text-white rounded-full">
                            05
                        </div>
                        <h1 className="font-bold">
                            Support Growth
                        </h1>
                        <p className="">
                            Businesses evolve, markets shift, and new opportunities emerge. 
                            The systems that support organizations should be capable of evolving 
                            alongside them.
                        </p>
                        <p className="">
                            We see solutions as foundations for growth rather than finished destinations.
                        </p>
                   </article>

                   

                    

                </div>
            

            </section>
        )
}

export default Approach;