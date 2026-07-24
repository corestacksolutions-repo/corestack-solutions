import {Link, NavLink} from "react-router-dom"
// import logo from "../assets/logo/smr.png"
import logo from '../assets/logo/useLogo.png'
import { HiMenu, HiX } from "react-icons/hi";
import { MdMenu } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi2";
import { useState, useReducer, useEffect } from "react";


   const api = 'https://api.frankfurter.dev/v2/rates?quotes=USD,MWK'
   

const Navbar = () => { 
    

  
    // TOGGLE MENU BAR
   const [openMenu, setOpenMenu] = useState(false);
   const toggleMenu = () =>{
            setOpenMenu(!openMenu) 
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
               py-4  
               bg-white /30
               shadow-sm
               z-100
                "
               >
               {/**nav */}
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
                           About Us
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

               <NavLink to='/contact'
                  className="
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
                     Let's have a talk
                </NavLink>
              
               
             
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
                        
                        ">
                    <button onClick={toggleMenu} 
                         className="p-2 rounded-full bg-gray-200/20">
                         <HiX className="size-7 text-black/30 shrink-0"/>
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
                       to="/products"
                       onClick={toggleMenu}
                       className={({ isActive }) => `
                            transition-all duration-300 
                            ${isActive 
                            ? "text-[#03045e]" 
                            : ""
                         }
                      `}>
                        Products
                    </NavLink>
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
               </ul>
              
                  <Link to='/contact'
                    className="
                     self-center
                     mt-24 auto
                     px-8 
                     py-2 
                     w-8/10
                     rounded-full 
                     bg-[#03045e]
                     font-semibold
                     text-center
                     text-white"
                   >   
                   Let's have a talk
                 </Link> 
              </nav>
            </div>
           
             
            
          </header>
    )
}  
export default Navbar; 