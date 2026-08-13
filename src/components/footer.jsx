
import { FiMail, FiPhone } from "react-icons/fi";
import { ImFacebook, ImInstagram, ImLinkedin2, ImPhone, ImTwitter, ImWhatsapp } from "react-icons/im";

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/logo/logo.png"
import { LiaMoneyBillWaveSolid, LiaShoppingCartSolid } from "react-icons/lia";
import { BiChevronDown } from "react-icons/bi";
import { LuChevronDown } from "react-icons/lu";
const Footer = ()=> {
  //products dropdown
  const [isExpanded, setIsExpanded]=useState(false);
  const handleExpansion = () =>{
        setIsExpanded(!isExpanded)
        console.log(isExpanded)
  }


  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-6">
      <div className="mx-auto max-w-[1180px]">

        {/** LINKS AND SOCIAL */}
        <div className="grid grid-cols-2 lg:grid-cols-4 text-black my-12">
           
           {/*SOCIAL */}
           <div className="flex gap-4 lg:col-span-2 w-full h-40">
              <div className="w-fit h-fit grid grid-cols-2 gap-4">
                   <Link to='https://www.facebook.com/share/1KTqv8iZkR/'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit h-fit rounded-xl p-3 bg-gray-300/80 hover:bg-gray-200 transition-all duration-500"
                    >
                     <ImFacebook size={22}/> 
                  </Link> 

                   <Link  to='https://www.linkedin.com/company/corestack-solutions-mw/'
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" w-fit h-fit rounded-xl p-3 bg-gray-300/80 hover:bg-gray-200 transition-all duration-500"
                    >
                     <ImLinkedin2 size={22}/> 
                  </Link> 

                   <Link to='/'
                         target="_blank"
                         rel="noopener noreferrer"
                         className="w-fit h-fit rounded-xl p-3 bg-gray-300/80 hover:bg-gray-200 transition-all duration-500" 
                      >
                     <ImInstagram size={22}/> 
                  </Link> 

                   <Link to='/'
                          className=" hidden
                            w-fit h-fit 
                            rounded-xl 
                            p-3 
                            bg-gray-300/80
                            hover:bg-gray-200
                            transition-all duration-500"
                      >
                     <ImTwitter size={22}/> 
                  </Link> 
              </div>
           </div>
         
          {/* Solutions */}
          <div className="text-[18px]">
            <h3 className="
                 mb-6 
                 text-sm 
                 font-semibold 
                 uppercase 
                 tracking-wider
                 
                 ">
              Nav links
            </h3>

            <ul className="flex flex-col space-y-4 text-[15px] font-light">
              
                <Link 
                    to="/" 
                    className="
                      hover:text-[#03045e]
                  ">
                    Home
                </Link>
                <Link 
                    to="/services" 
                    className="
                      hover:text-[#03045e]
                  ">
                   Services
                </Link>
                
                {/*products dropdown*/}
                <div className={`${isExpanded ? 'max-h-30 opacity-100 bg-gray00':'max-h-5 opacity '}rounded-md overflow-hidden 
                     w-fit space-y-2 transition-all duration-1000`}>
                  
                  <button onClick={handleExpansion} className="flex items-center gap-1 w-fit opacity-100 cursor-pointer hover:text-[#03045e]"> 
                      Products
                      <LuChevronDown className="size-4"/>
                  </button>
                  <ul className="flex flex-col gap-3 text [#03045e] px-2">
                    <NavLink onClick={handleExpansion}
                      to="/products/smart-shop"
                      className={`flex items-center gap-2 text-[0.8rem]`}>
                        <LiaShoppingCartSolid size={20}/>
                        Smartshop
                    </NavLink>
                    <NavLink onClick={handleExpansion}
                      to="/products/smart-booking"
                      className={`flex items-center gap-2 text-[0.8rem]`}>
                        <LiaMoneyBillWaveSolid size={20}/>
                        SmartBooking
                    </NavLink>
                  </ul>
                </div>

                {/* About Page */}
                <Link 
                    to="/about" 
                    className="
                       hover:text-[#03045e]
                    ">
                  About
                </Link>

                {/* Contact Page */}
                <Link 
                    to="/contact" 
                    className="
                       hover:text-[#03045e]
                    ">
                     Contact
                </Link>

                {/* Insights Page */}
                <Link 
                    to="/leadership-thoughts" 
                    className="
                       hover:text-[#03045e]
                    ">
                     Leadership Thoughts
                </Link>
            </ul>
          </div>

         {/* Contact */}
          <div className="col-span-2 md:col-span-1 text-black">
            <h3 className="
                mb-6 
                text-sm 
                font-semibold 
                uppercase 
                tracking-wider

                ">
              Contact
            </h3>

            <ul className="space-y-5 text-[15px] font-light">
              <li className="flex items-start gap-3">
                <ImWhatsapp className="mt-1 text-[#03045e]" size={18} />
                 <a href="https://wa.me/265981457286?text=Hi+Corestack+,+I+would+like+to+know+about+..."
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-[#03045e]">
                  +265 981 457 286
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FiPhone className="text-[#03045e]" size={18} />
                <a href="tel:+265887914433" className="hover:text-[#03045e]">
                  +265 887 914 433
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FiMail className="text-[#03045e]" size={18} />
                <a href="mailto:info@corestacksolutions.tech" className="hover:text-[#03045e]">
                  info@corestacksolutions.tech
                </a>
              </li>
            </ul>
          </div>
          

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-400 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <span className=" flex text-sm text-gray-600">
              © { new Date().getFullYear()} 
              
              <p className="
                  mx-2
                  ">
                  CoreStack Solutions. 
                  All rights reserved.
                </p>
            </span>

            <div className=" hidden flex gap-6 text-sm text-gray-500">
              <a href="/privacy-policy" className="hover:text-[#03045e]">
                Privacy Policy
              </a>

              <a href="/terms-of-service" className="hover:text-[#03045e]">
                Terms of Service
              </a>

              <a href="/cookies" className="hover:text-[#03045e]">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;  