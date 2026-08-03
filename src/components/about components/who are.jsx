

const AboutUs = () =>{
       return(
             <section 
                id="about-us"
                className="
                  w-full
                  
                  
                  px-6
                  
                  text-[#1e293b]
                  bg-[#f8fafc] 
                  bg- gray-100
                   
               ">
               <div 
                  className="
                     max-w-[1180px]
                     mx-auto
                     grid
                     md:grid-cols-2
                     gap-x-8
                     gap-y-6
                     py-16
                     
               ">
                 <aside 
                    className="
                      w-full
                      h-full
                      
                      rounded-md
                      space-y-8
                 ">
                  <h1 
                    className="
                      w-fit
                      text-3xl 
                      md:text-4xl
                      lg:text-5xl 
                      font-bold 
                      text-black 
                     
                    ">
                     About CoreStack
                  </h1>
                  <p className="text-[#B77F58] md:text-black uppercase text-[16px]">
                    Creating Digital Tools That Support Organizations' Operations.
                  </p>
                  <p 
                    className="
                      text-[1.3rem]
                      lg:text-[22px]
                      leading-relaxed
                      
                      font-light
                      text-black
                      
                    ">
                     CoreStack is a business solutions company that helps organizations solve 
                     operational challenges through purposeful technology. We work with businesses 
                     to understand how they operate, identify opportunities for improvement, and 
                     design digital solutions that simplify processes, strengthen efficiency, and 
                     support sustainable growth. Every solution we deliver is guided by a clear 
                     business objective. 
                  </p>
                  <p 
                    className="
                      text-lg
                      
                    ">
                    
                  </p>

                 </aside>

                 {/*right side */}
                 <aside 
                    className="
                      w-full
                      h-full
                      flex
                      rounded-md 
                 "> 
                    {/*supporting cards container */}
                     <div 
                       className="
                        w-full
                        m-auto
                        self-end
                        grid
                        grid-cols-2
                        
                        gap -4
                        gap-8 
                     ">
                      <div className="border border-gray-600/10 shadow-md rounded-xl  text-black p-3 6 space-y-4 tracking-wide">
                         <h3 className="text-[12px] uppercase  text-[#B77F58]">
                             Business First
                         </h3>
                         <p className="font-light text-[1.1rem]">
                             Technology decisions guided by business objectives.
                         </p>
                      </div>

                      <div className="border border-gray-600/10 shadow-md rounded-xl text-black p-3 space-y-4 tracking-wide">
                         <h3 className="text-[12px] font-normal uppercase text-[#B77F58]">
                             Practical Innovation
                         </h3>
                         <p className="font-light text-[1.1rem]">
                             Solutions designed for real-world operations.
                         </p>
                      </div>

                      <div className="border border-gray-600/10 shadow-md rounded-xl text-black p-3 space-y-4 tracking-wide">
                         <h3 className="text-[12px] uppercase text-[#B77F58]">
                             Long-Term Partnership
                         </h3>
                         <p className="font-light text-[1.1rem]">
                             We grow alongside the businesses we serve.
                         </p>
                      </div>
                    </div>
                  </aside>
                 </div>
            </section>
       )
}

export default AboutUs;