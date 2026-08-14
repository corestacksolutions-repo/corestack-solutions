
import { FiMail, FiPhone } from "react-icons/fi"
import { ImWhatsapp } from "react-icons/im"

const ContactInfor = () =>{
         return(
               <section 
                   id="contact-info"
                   className="
                      w-full
                      mt-16
                      py-16
                      px-4
                      
                      
                      ">
                    <address 
                       className="
                          w-full
                          max-w-[1180px]
                          mx-auto
                          not-italic
                          grid
                          md:grid-cols-2
                          lg:grid-cols-3
                          gap-6
                          text-[#393E46]
                     ">
                      {/*phone */}
                      <div 
                         className="
                           w-full
                           h-full
                           flex
                           flex-col
                           gap-2
                           items-center
                           md:items-start
                           p-8
                           bg-gray-100
                           rounded-md
                           md:rounded-xl
                           
                      ">
                        <span className="bord er border-black/15 g-[#03045e] rounded-md mb-6">
                            <FiPhone className="size-6"/>
                        </span>
                        
                        <a href="tel:+265887914433" className="font-extrabold text-lg text-[#03045e]">
                             +265 887 914 433
                        </a>
                        <p className="text-sm text-[#B77F58]">Speak With Us</p>

                      </div>
                      {/*WhatsApp */}
                      <div 
                         className="
                           w-full
                           h-full
                           flex
                           flex-col
                           gap-2
                           items-center
                           md:items-start
                           p-8
                           bg-gray-100
                           rounded-md
                           md:rounded-xl
                      ">
                        <span className=" bord er border-black/15 g-[#03045e] rounded-md mb-6">
                            <ImWhatsapp className="size-6"/>
                        </span>
                        
                        <a href="https://wa.me/265981457286?text=Hi+Corestack+,+I+would+like+to+know+about+..." 
                           className="font-extrabold text-lg text-[#03045e]">
                           +265 981 457 286
                        </a>
                        <p className="text-sm  text-[#B77F58]">
                            Start A Conversation
                        </p>

                      </div>
                      {/*mail */}
                      <div 
                         className="
                           
                           w-full
                           h-full
                           flex
                           flex-col
                           gap-2
                           items-center
                           md:items-start
                           px-
                           md:px-8
                           py-8
                           bg-gray-100
                           rounded-md
                           md:rounded-xl
                      ">
                        <span className=" bord er border-black/15 g-[#03045e] rounded-md mb-6">
                           <FiMail className="size-6"/>
                        </span>
                        
                        <a href="mailto:info@corestacksolutions.tech" className="font-extrabold text-lg text-[#03045e]">
                           info@corestacksolutions.tech
                        </a>
                        <p className="text-sm  text-[#B77F58]">
                            Send Your Inquiry
                        </p>
                      </div>
                    </address>
               </section>
         )
}

export default ContactInfor