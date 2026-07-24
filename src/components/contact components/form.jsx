import { Link } from "react-router-dom";



const ContactForm = () =>{
           return(
              <section className="w-full  px-6 md:px-0">
                  
                  <header className="w-full  mb-16 text-[#393E46]">
                      <h2 className="uppercas text-[1.3rem] e font-semibold">
                          Send us a message
                      </h2>
                      <p className="  text-md my-3">
                          Tell us about your business,
                          project, or idea.
                      </p>
                  </header>
                  <form action="" className="space-y-6 ">
                     <fieldset className="flex flex- col md:fl ex-row gap-3 justify-between">
                        
                            <input 
                               type="text"
                               name="name" 
                               id="form -neuro"
                               className="
                                   w-1/2
                                   pb-4 
                                   outline-none 
                                    
                                   border-b 
                                   border-[#393E46]/20
                                   text-[15px]
                                   "
                                   placeholder="Full name"
                               
                            />
                        
                        
                            <input 
                               type="text" 
                               name="phone"
                               id="form -neuro"
                               className="
                                   w-1/2
                                   pb-4
                                   outline-none 
                                    
                                   border-b 
                                   border-[#393E46]/20
                                   text-[15px]
                                   "
                               placeholder="Phone"
                               
                            />
                      
                       
                     </fieldset> 
                     <input 
                        type="text" 
                        name="email"
                        className="
                            w-full
                            pb-4
                            outline-none
                            border-b 
                            border-[#393E46]/30
                            text-[15px]
                            placeholder:text-[#393E46]/80
                            "
                        placeholder="Email"
                        
                      />
                      <textarea 
                        type="text"
                        name="message"
                         
                        className="
                            w-full
                            pb 
                            outline-none  
                            border-b 
                            border-[#393E46]/20
                            text-[15px]
                            placeholder:text-[#393E46]/80"
                        placeholder="Briefly describe your message..."
                        
                      />
                       
                        <fieldset className="flex gap-4 justify-between">
                            <button 
                                type="submit" 
                                className="
                                    w-1/2
                                    rounded-full lg 
                                    md:px-8 
                                    p-4
                                    text-base
                                    font-semibold 
                                    text-white
                                    transition-all
                                    duration-500
                                    bg-[#03045e]
                                    mt-4
                            ">
                                Submit
                            </button>
                            <Link  
                              to='/'                              
                              className="
                                    flex
                                    justify-center
                                    items-center
                                    w-1/2
                                    rounded-full lg 
                                    md:px-8 
                                    p-4

                                    text-base
                                    font-semibold 
                                    text-[#03045e]
                                    transition-all
                                    duration-500
                                    border
                                    border-[#03045e]/10
                                    shadow
                                    bg-white
                                    mt-4
                            ">
                                Back
                            </Link>
                        </fieldset>
                  </form>
              </section>
           )

}

export default ContactForm;