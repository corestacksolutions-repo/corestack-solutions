

const OurExistence = () =>{
         return( 
                <section 
                   className="
                     w-full
                     px-6

                ">
                   
                  {/*container*/}
                  <div 
                     className="
                       w-full
                       max-w-screen-lg
                       mx-auto
                       grid
                       md:grid-cols-3
                       gap-16
                       my-32
                       text-[#393E46]
                  ">
                    <aside 
                      className="
                        relative
                        md:block
                        md:sticky
                        md:top-30
                        w-full
                        h-fit
                        
                        
                        

                      ">
                       <figure 
                         className="
                            w-full
                            h-full
                            rounded-lg
                            overflow-hidden
                         ">
                         <img src="htt ps://i.pinimg.com/1200x/e3/b7/a6/e3b7a62de10c1250f574dbf8240ed0ba.jpg" 
                              alt="Business growth" 
                              className="hidden h-80 w-full object-cover opacity-80" 
                        />
                      </figure>
                         <h1 
                            className="
                              absolute
                              left-10
                              top-20

                              p-4
                              
                              rounded-lg
                              z-50

                              bg-[#03045e] /80
                              text-white
                              font-bold
                              text-3xl
                              lg:text-4xl

                              flex
                              flex-col
                              gap-2
                              items-center
                         ">
                            Why We 
                             <b className=""
                             >
                                Exist ?
                             </b>
                         </h1>
                    </aside>

                    {/*right side... content */}
                    <aside 
                       className="
                         
                         w-full
                         h-full
                         md:col-span-2
                         bor der
                         rounded-md
                         md:rounded-lg

                         md:text-justify text-lg

                       ">
                       <h2 
                          className="
                           w-full
                            md: s ticky
                            md: top-30
                            tracking-wide
                            uppercase
                            font
                            text-end
                            text-[#B77F58]
                            text-[12px]
                            bg-white
                            
                          ">

                            The Reasons Behind CoreStack
                          </h2>
                          <div 
                             className="
                               mt-6
                               flex 
                               justify-between
                               gap-4
                               
                            ">
                           
                            <b className="hidden w-50 italic mr-3 ">01</b>
                                
                            
                            <span className="text-lg font-normal">
                                <h4 className="text-xl font-bold">Evolving Business Challenges</h4>
                              <p className="my-4">
                                Businesses today operate in an environment where efficiency, 
                                customer experience, and access to information increasingly 
                                determine growth, competitiveness, and long-term sustainability.
                              </p>

                              <p className="">
                                As markets evolve and customer expectations continue to rise, 
                                organizations are under growing pressure to adapt quickly while 
                                maintaining consistency, quality, and operational efficiency across 
                                every aspect of the business.
                              </p>
                            </span>
                          </div>

                          <div 
                             className="
                               mt-6
                               flex 
                               justify-between
                               gap-4
                               
                            ">
                           
                            <b className="hidden w-50 italic mr-3 ">01</b>
                                
                            
                            <span className=" text-lg font-normal">
                                <h4 className="text-xl font-bold">Misalighnment Between Technology & Business</h4>
                              <p className="my-4">
                                Despite rapid technological advancement, many organizations continue to 
                                experience a disconnect between business needs and the systems intended 
                                to support them. Processes remain manual, opportunities go unnoticed, 
                                and technology often adds complexity instead of reducing it.
                              </p>

                              <p className="">
                                Too often, businesses find themselves adjusting their operations to fit 
                                technology rather than implementing technology that fits the way their 
                                businesses operate and grow. The result is frustration, inefficiency, 
                                and unrealized potential.
                              </p>
                            </span>
                          </div>
                          <div 
                             className="
                               mt-6
                               flex 
                               justify-between
                               gap-4
                               
                            ">
                           
                            <b className="hidden w-50 italic mr-3 ">01</b>
                                
                            
                            <span className="text-lg font-normal">
                                <h4 className="text-xl font-bold">Bridging The Gap</h4>
                              <p className="my-4 ">
                                CoreStack was created to help bridge that gap by connecting business 
                                objectives with practical digital solutions that support the way 
                                organizations operate, serve customers, and grow.
                              </p>

                              <p className="">
                                Rather than beginning with technology, we begin with understanding the 
                                business model, its challenges, objectives, and opportunities 
                                to ensure that creating tailored solutions that contributes to meaningful and 
                                measurable outcomes.
                              </p>
                            </span>
                          </div>
                    
                    </aside>
                  
                  </div>  

                </section>

        )
}

export default OurExistence;