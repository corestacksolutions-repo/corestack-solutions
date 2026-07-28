import { Link } from "react-router-dom"
import { RiFacebookBoxFill, RiFacebookBoxLine, RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri"
import { BsFacebook, BsInstagram } from "react-icons/bs"
import { ImFacebook, ImInstagram, ImLinkedin, ImLinkedin2 } from "react-icons/im"
import { CiInstagram } from "react-icons/ci"

export default function Socials () {
            return(
                    <section className="px-6 py-12 bg-gray-200/50">
                     <div 
                        className="
                           w-full
                           max-w-[1180px]
                           mx-auto
                           bg-[#222831] 
                           p-5 
                           md:px-10 
                           rounded-md
                           md:rounded-xl 
                           
                           ">
                        <div 
                           className="
                              flex
                              flex-col
                              gap-8
                              md:flex-row
                              justify-between
                         ">
                        {/*social hundles*/}
                        <div 
                          className="
                          space-y-6
                          
                        ">
                        <h1 className="text-[15px] text-white font-semibold uppercase tracking-[1.5px]">
                           Our Social Hundles
                        </h1>
                        <div 
                           className="
                             w-full
                             md:w-fit
                             justify-between
                             flex 
                             gap-5
                             items-center
                             ">
                        <Link  
                           to="/" 
                           target="_blank"
                           rel="noopener noreferrer"
                           className="
                              size-12 
                              rounded-md full 
                              bg- 
                              border  
                              border-white/20 
                              flex items-center 
                              justify-center
                              hover:bg-blue-900/30 
                              transition-all 
                              duration-300
                           "
                        >
                           <ImFacebook  className="size-6 text-white" />
                        </Link>
                        <Link  
                           to="/" 
                           target="_blank"
                           rel="noopener noreferrer"
                           className="
                              size-12 
                              rounded-md full 
                              bg- 
                              border  
                              border-white/20 
                              flex items-center 
                              justify-center
                              hover:bg-blue-900/30 
                              transition-all 
                              duration-300
                           "
                        >
                           <ImLinkedin2  className="size-6 text-white" />
                        </Link>
                        <Link  
                           to="/" 
                           target="_blank"
                           rel="noopener noreferrer"
                           className="
                              size-12 
                              rounded-md full 
                              bg- 
                              border  
                              border-white/20 
                              flex items-center 
                              justify-center
                              hover:bg-blue-900/30 
                              transition-all 
                              duration-300
                           "
                        >
                           <BsInstagram  className="size-6 text-white" />
                        </Link>
                        
                        </div>
                       </div>

                       {/*copy right*/}
                        <div 
                           className="
                              flex
                              flex-col
                              justify-between
                              pt-6
                              ">
                           <p 
                              className="
                                 hidden
                                 md:block
                                 tracking-wide
                                 uppercase
                                 text-white/80
                                 text-[13px]
                              ">
                              Copy right
                           </p>
                           <span className="border-t border-gray-600 flex text-sm text-gray-300">
                              © { new Date().getFullYear()} 
                              
                              <p className="
                                  mx-2
                                 ">
                                 CoreStack Solutions. 
                                 All rights reserved.
                               </p>
                           </span>

                        </div>
                       </div>
                      </div>
                  </section>
            )
}