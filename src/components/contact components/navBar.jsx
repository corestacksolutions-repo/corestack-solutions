
import {Link, NavLink} from "react-router-dom"
import { useState } from "react";
import { LiaShoppingCartSolid, LiaMoneyBillWaveSolid, LiaSmsSolid } from "react-icons/lia";
import { MdMenu, MdSms } from "react-icons/md";
import { HiX, HiChevronDown } from "react-icons/hi";
import logo from '../../assets/logo/useLogo.png'
import { FaSms } from "react-icons/fa";
import { CgSmileSad } from "react-icons/cg";
import { BsChat } from "react-icons/bs";






const Navbar = () => { 
    
    // TOGGLE MENU BAR
   const [openMenu, setOpenMenu] = useState(false);
   const toggleMenu = () =>{
            setOpenMenu(!openMenu) 
         }
   //drop down menu
   const [isExpanded, setExpanded] = useState(false)
   const handleExpansion = () =>{
         setExpanded(!isExpanded)
   }

   return (
          <header 
             className="
               w-full 
               fixed
               top-0
               left-0
               z-50
               w-full
               px-6
               pb-4  
               bg-white /30
               shadow-sm
               z-100
                "
               >
               {/**blog section */}
                <div className="hidden md:flex w-full max-w-[1180px] mx-auto justify-between items-center h-8 mb-4 bg-[#B77F58] rounded-b-lg px-4">
                  <a href="mailto:info@corestacksolutions.com" 
                     className="font-light text-[#03045e]  white text-[0.9rem] tracking-wider hover:text-white transition-all duration-500">
                     info@corestacksolutions.com
                  </a>
                  <Link 
                     to="/leadership-thoughts" 
                     className="font-light  text-[#03045e]  white text-[0.9rem] tracking-wider hover:text-white transition-all duration-500
                  ">
                     Leardership Thoughts
                  </Link>
                </div>
               {/**navbar section */}
              
               <nav
               className="
                  hidden
                  md:flex
                  items-center
                  justify-between
                  max-w-[1180px]
                  w-full
                  mx-auto
               "
               >
               {/* Logo */}
               <Link
                  to="/"
                  className="
                     flex
                     items-center
                     gap-3
                     select-none
                     transition-opacity
                     duration-300
                     hover:opacity-90
                  "
               >
                  <figure className="shrink-0">
                     <img
                     src={logo}
                     alt="CoreStack Solutions Logo"
                     className="h-12 w-auto"
                     />
                  </figure>

                  <div className="flex flex-col text-[#03045e] uppercase leading-none">
                     <span
                     className="
                        text-[1.55rem]
                        font-bold
                        tracking-tight
                     "
                     >
                     CoreStack
                     </span>

                     <span
                     className="
                        text-[0.75rem]
                        font-medium
                        tracking-[0.55rem]
                        text-[#03045e]/80
                        mt-1
                     "
                     >
                     Solutions
                     </span>
                  </div>
               </Link>
               {/*nav links */}
               <ul className="
                     flex 
                     justify-between
                     items-center
                     gap-10
                     font-semibold
                     text-[14px]
                     tracking-[0.8px]
                     text-[#1e293b]
                     "
                     >
                     <NavLink 
                     to="/"
                     className={({ isActive }) => `
                         relative
                         ${isActive 
                           ?"text-[#03045e]" 
                           : ""
                        }
                     `}
                     >
                     {  ({isActive})=>(
                        <>
                          Home
                            <div className={`
                               absolute 
                               left-0 
                               bottom-0
                               h-[0.5px]
                               bg-[#03045e]
                               transition-all duration-500
                               ${isActive 
                                 ? 'w-full'
                                 : 'w-0'
                                }
                              `}
                             />
                        </>
                     )}
                          
                     </NavLink>


                     <NavLink
                     to="/services"
                     className={({ isActive }) => `
                         relative
                         ${isActive 
                           ?"text-[#03045e]" 
                           : ""
                        }
                     `}
                     >
                     {({isActive})=>(
                        <>
                          Services
                            <div className={`
                               absolute 
                               left-0 
                               bottom-0
                               h-[0.5px]
                               bg-[#03045e]
                               transition-all duration-500
                               ${isActive 
                                 ? 'w-full'
                                 : 'w-0'
                                }
                              `}
                             />
                        </>
                     )}
                     </NavLink>

                     {/*drop down */}
                    <div className="relative group">
                        <NavLink
                        to="/products"
                        className={({ isActive }) => `
                           relative
                           ${isActive 
                              ?"text-[#03045e] " 
                              : ""
                           }
                        `}
                        >
                        {({isActive})=>(
                           <>
                              Products
                              <div className={`
                                 absolute 
                                 left-0 
                                 bottom-0
                                 h-[0.5px]
                                 bg-[#03045e]
                                 transition-all duration-500
                                 ${isActive 
                                    ? 'w-full'
                                    : 'w-0'
                                 }
                                 `}
                              />
                           </>
                        )} 
                        
                        </NavLink>

                        <div className="
                                absolute 
                                w-[500%] 
                                top-10 
                                left-1/2 
                                -translate-x-1/2
                                 translate-y-5
                                shadow
                                rounded-xl
                                bg-white
                                min-h-40
                                p-6
                                invisible
                                opacity-0
                                group-hover:visible
                                group-hover:translate-y-0
                                group-hover:opacity-100
                                transition-all
                                duration-500

                                flex
                                flex-col
                                gap-3
                                font-normal
                                text-[1rem]
                                text-black
                           ">
                            <NavLink 
                              to="/products"
                              onClick={toggleMenu}
                              className={({ isActive }) => `
                                    flex items-center gap-2
                                    transition-all duration-300
                                    ${isActive 
                                    ? "text-[#03045e]" 
                                    : ""
                                 }
                              `}>
                                 <LiaShoppingCartSolid size={24}/>
                                 Smartshop
                           </NavLink>
                           <NavLink 
                              to="/booking"
                              onClick={toggleMenu}
                              className={({ isActive }) => `
                                    flex items-center gap-2
                                    transition-all duration-300
                                    ${isActive 
                                    ? "text-[#03045e]" 
                                    : ""
                                 }
                              `}>
                                 <LiaMoneyBillWaveSolid size={24}/>
                                 SmartBooking
                           </NavLink>


                        </div>
                     </div>
                     <NavLink 
                     to="/about"
                     className={({ isActive }) => `
                          relative
                         ${isActive 
                           ?"text-[#03045e]" 
                           : ""
                        }
                     `}
                     >
                     {({isActive})=>(
                        <>
                           About
                            <div className={`
                               absolute 
                               left-0 
                               bottom-0
                               h-[0.5px]
                               bg-[#03045e]
                               transition-all duration-500
                               ${isActive 
                                 ? 'w-full'
                                 : 'w-0'
                                }
                              `}
                             />
                        </>
                     )}     
                     </NavLink>
                      <NavLink 
                     to="/approach"
                     className={({ isActive }) => `
                         relative
                         ${isActive 
                           ?"text-[#03045e]" 
                           : ""
                        }
                     `}
                     >
                     {({isActive})=>(
                        <>
                          Approach
                            <div className={`
                               absolute 
                               left-0 
                               bottom-0
                               h-[0.5px]
                               bg-[#03045e]
                               transition-all duration-500
                               ${isActive 
                                 ? 'w-full'
                                 : 'w-0'
                                }
                              `}
                             />
                        </>
                     )}   
                  </NavLink>
               </ul>

               <a href="https://wa.me/265981457286?text=Hi+Corestack+,+I+would+like+to+know+about+..."
                  className="
                     flex
                     items-center
                     gap-3
                     px-8
                     py-2 
                     font-semibold
                     rounded-full
                     bg-[#03045e]
                      text-white
                     shadow-sm
                     shadow-[#03045e]/20
                      hover:bg-[#03045e]/90
                     transition-all duration-300
                     "
                  >   
                     <BsChat size={18} className="hidden"/> 
                     Start a Project
                </a>
              
               
             
            </nav>
 
            {/*menu button */}
            <div className="md:hidden w-full flex justify-between items-center">
                 <Link to='/'
                 >
                  <figure className="shrink-0">
                        <img
                        src={logo}
                        alt="CoreStack Solutions Logo"
                        className="h-10 w-auto"
                        />
                  </figure>
                 </Link>

                  <button onClick={toggleMenu}
                          className="md:hidden z-50 rounded-md"
                  >
                     <MdMenu className="size-8"/>
                  </button>
            </div>
           


             {/*MOBILE MENU */}
             <div className={`
                  fixed
                  top-0  
                  right-0
                  
                  ${
                     openMenu ?
                     'translate-x-[0] opacity-100' 
                     :
                     'translate-x-[100%] opacity-0'
                  }
                  transition-all duration-500
                  z-50
                  md:hidden 
                  w-full
                  h-full 
                  flex
                  justify-end
                  overflo
                  `}
               >
                  {/*overlay */}
               <div className="pointer-events-none fixed left-0 top-[4rem] w-full h-screen bg-white/60 backdrop-blur-md"></div>
                 <nav className="
                        w-8/10 
                        z-100 
                        bg-white
                        flex
                        flex-col
                        items-end

                        gap-10
                        py-3
                        px-6
                        overflow-y-auto
                        
                        ">
                    <button onClick={toggleMenu} 
                         className="p-2 rounded-full bg-gray-200/20">
                         <HiX className="size-7 text-black/70 shrink-0"/>
                    </button>
                
                   <ul className="
                        
                        w-full
                        flex 
                        flex-col
                        gap-15 
                        px-8
                        text-[1.2rem]
                    ">
                     <NavLink  
                       to="/"
                       onClick={toggleMenu}
                       className={({ isActive }) => `
                            transition-all duration-300 
                            ${isActive 
                            ? "text-[#03045e]" 
                            :  ""
                        }
                     `}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                       to="/services"
                       onClick={toggleMenu}
                       className={({ isActive }) => `
                            transition-all duration-300 
                            ${isActive 
                            ? "text-[#03045e]" 
                            : ""
                        }
                     `}
                    >
                        Services
                    </NavLink>

                    {/* dropdown  products */}
                    <div className={`
                            ${isExpanded ? 'max-h-50 border-black/0': 'max-h-9 border-black/0'} -translate-x-2
                            p-2 w-full overflow-hidden border  rounded-xl transition-all duration-1000`}>
                        <span onClick={handleExpansion} className="w-full flex gap-6 ustify-between items-center">
                           Products
                           <HiChevronDown className="size-4"/>
                        </span>
                        <ul className={`${isExpanded ? 'border-l border-black/15':'opacity-0' } 
                           flex flex-col gap-3 p-2 w-full text-[0.9rem] text-black/80 transtion-all duration-1000`}>
                           <NavLink 
                              to="/products"
                              onClick={toggleMenu}
                              className={({ isActive }) => `
                                    transition-all duration-300
                                    ${isActive 
                                    ? "text-[#03045e]" 
                                    : ""
                                 }
                              `}>
                                 Smartshop
                           </NavLink>
                           <NavLink 
                              to="/booking"
                              onClick={toggleMenu}
                              className={({ isActive }) => `
                                    transition-all duration-300
                                    ${isActive 
                                    ? "text-[#03045e]" 
                                    : ""
                                 }
                              `}>
                                 SmartBooking
                           </NavLink>
                        </ul>
                         
                    </div>

                    <NavLink 
                       to="/about"
                       onClick={toggleMenu}
                       className={({ isActive }) => `
                            transition-all duration-300 
                            ${isActive 
                            ? "text-[#03045e]" 
                            : ""
                        }
                     `}>
                        About
                 </NavLink>
                  <NavLink 
                       to="/approach"
                       onClick={toggleMenu}
                       className={({ isActive }) => `
                            transition-all duration-300 
                            ${isActive 
                            ? "text-[#03045e]" 
                            : ""
                        }
                     `}>
                         Approach
                    </NavLink>
                    <NavLink 
                     to="/leadership-thoughts"
                     onClick={toggleMenu}
                     className={({ isActive }) => `
                        transition-all duration-300 
                        ${isActive 
                        ? "text-[#03045e]" 
                        : ""
                     }
                  `}>
                     Our blogs
                  </NavLink> 
               </ul>
              
               <a href="https://wa.me/265981457286?text=Hi+Corestack+,+I+would+like+to+know+about+..."
                  className="
                     self-center
                     mt-16
                     flex
                     items-center
                     gap-3
                     px-6
                     py-2 
                     font-semibold
                     rounded-full
                     bg-[#03045e]
                      text-white
                     shadow-sm
                     shadow-[#03045e]/20
                      hover:bg-[#03045e]/90
                     transition-all duration-300
                     "
                  >   
                     <BsChat size={18} className="hidden"/> 
                     Start a Project
                </a>
              </nav>
            </div>
           
             
            
          </header>
    )
}  
export default Navbar; 