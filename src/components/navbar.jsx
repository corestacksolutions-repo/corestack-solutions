import {Link, NavLink} from "react-router-dom"
// import logo from "../assets/logo/smr.png"
import logo from '../assets/logo/useLogo.png'
import { HiMenu, HiX } from "react-icons/hi";
import { MdMenu } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi2";
import { useState, useReducer, useEffect } from "react";


const pricesData =[
       {
          id:1,
          service: 'Business process automation',
          selectedCurrency: "MWK",
          price:300000,
       },
        {
          id:2,
          service: 'Web platforms & digitalpresence',
          selectedCurrency: "MWK",
          price:400000,
       },
        {
          id:3,
          service: 'e-Commerce platforms',
          selectedCurrency: "MWK",
          price:450000,
        },
        {
          id:4,
          service: 'System maintainance & support',
          selectedCurrency: "MWK",
          price:420000,
       },
       {
          id:5,
          service: 'Search optimization & online visibility',
          selectedCurrency: "MWK",
          price:15000,
       },
   ]
   const api = 'https://api.frankfurter.dev/v2/rates?quotes=USD,MWK'
   const exchangeRate=7500

const Navbar = () => { 
    

   {/*const [currencies, setCurrencies] = useState({
                                       id:'',
                                       currency:''
                                    })
   const [rates, setRates] = useState({});
   useEffect(()=>{
        const getRates = async () =>{
            const response = await fetch('https://api.frankfurter.dev/v2/rates?quotes=USD,MWK');
            const data = await response.json();
            const formattedRates = {};
            data.forEach((rate)=>{
                 formattedRates[rate.quote]=rate.rate
               })
            
            setRates(formattedRates);
            
        }
        getRates()
   },[]);

   //  RATE
   const usdRate =
    rates.MWK && rates.USD
    ? rates.MWK / rates.USD
    : null;

  const handleCurrency = (e, item) =>{
         setCurrencies({
               ...currencies,
               id:item.id,
               currency:e.target.value
             }
         )
         console.log('CURRENCIES', currencies)
  }
     

   const [viewPrice, setViewPrice] = useState(false);
   const togglePriceView = () =>{
         setViewPrice(!viewPrice)    
        }

   */}
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
               bg-white/30
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
            <button onClick={toggleMenu}
              className="md:hidden z-50 rounded-md"
              >
               <MdMenu className="size-8"/>
            </button>


             {/*MOBILE MENU */}
             <nav className={`
                  fixed
                  top-0  
                  left-0
                  ${
                     openMenu ?
                     'translate-x-[0] translate-y-[0] opacity-100' 
                     :
                     'translate-x-[100%] translate-y-[-100%] opacity-0'
                  }
                  transition-all duration-500
                  z-50
                  flex
                  flex-col 
                  justify-between

                  gap-[3rem]
                  md:hidden 
                  w-full 
                  h-full 
                  bg-white
                  pb-10 pt-5
                  px-2
                  `}
               >
                <div className="relative w-full px-5">
                   <button onClick={toggleMenu} 
                     className="absolute right-3 p-2 rounded-full bg-gray-200/20">
                     <HiX className="size-7 text-black/30 shrink-0"/>
                   </button>
                </div>
                <ul className="
                  flex 
                  flex-col
                  items-center 
                  
                  gap-15 
                  z-100
                  "
                  >
                 <NavLink 
                    
                    to="/"
                    onClick={toggleMenu}
                    className="hover:text-[#03045e] transition-all duration-300 "
                    >
                        Home
                 </NavLink>
                 <NavLink 
                    to="/solutions"
                    onClick={toggleMenu}
                    className="">
                        Services
                 </NavLink>
                 <NavLink 
                    to="/approach"
                    onClick={toggleMenu}
                    className="">
                         Approach
                  </NavLink>
                  <NavLink 
                    to="/about"
                    onClick={toggleMenu}
                    className="">
                        current solutions
                 </NavLink>
                 <NavLink 
                    to="/about"
                    onClick={toggleMenu}
                    className="">
                        About
                 </NavLink>
              </ul>
               {/*user guide */}
              <div 
                  className="
                    flex 
                    justify-between 
                    
                    font-light
                    border-t
                    border-black/20
                    pt-[4rem] 
                    "
               >
                {/*PRICE OVERVIEW BUTTON */}
                <button 
                    className="
                    flex
                    items-center
                    gap-2
                    group
                    px-8 
                    py 
                    border 
                    border-black/20 
                    rounded-full"
                   >   
                   Pricing overview
                   <HiChevronDown className="size-4 mx-auto text-black/40 -rotate-90"/>
                </button>

                <Link to='/contact'
                    className="
                     flex
                     items-center
                     px-8 
                     py-2 
                     rounded-full 
                     bg-blue-900
                     text-white"
                   >   
                   Lets talk
                </Link>
             </div>
            </nav>
           
             
            
          </header>
    )
}  
export default Navbar; 