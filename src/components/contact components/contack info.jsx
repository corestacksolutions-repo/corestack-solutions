import { AiOutlineMail } from "react-icons/ai"
import { BiPhoneIncoming, BiPhoneOutgoing } from "react-icons/bi"
import { BsPhoneFill, BsPhoneVibrate, BsWhatsapp } from "react-icons/bs"
import { CiPhone } from "react-icons/ci"
import { FaPhone, FaWhatsapp } from "react-icons/fa6"
import { FiMail, FiPhone, FiPhoneOutgoing } from "react-icons/fi"
import { HiMail } from "react-icons/hi"
import { LuPhone } from "react-icons/lu"
import { MdMail, MdPhone } from "react-icons/md"
import { PiPhone, PiWhatsappLogo, PiWhatsappLogoFill } from "react-icons/pi"
import { RiMailFill, RiPhoneLine, RiWhatsappLine } from "react-icons/ri"
import { TbPhonePlus, TbPhoneRinging } from "react-icons/tb"



const ContactInfor = () =>{
         return(
               <section 
                   id="contact-info"
                   className="
                      w-full
                      mt-16
                      py-16
                      px-6
                      
                      bg- gray-200/50
                      bg- [#f8fafc] 
                      border-t
                      border-2
                      border-white
                      
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
                            <BsWhatsapp className="size-6"/>
                        </span>
                        
                        <a href="https://wa.me+265981457386" className="font-extrabold text-lg text-[#03045e]">
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
                           p-8
                           bg-gray-100
                           rounded-md
                           md:rounded-xl
                      ">
                        <span className=" bord er border-black/15 g-[#03045e] rounded-md mb-6">
                           <FiMail className="size-6"/>
                        </span>
                        
                        <a href="mailto:sales.corestack.com" className="font-extrabold text-lg text-[#03045e]">
                           sales.corestack.com
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