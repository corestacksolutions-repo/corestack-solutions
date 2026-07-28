import background from "../../assets/smartshop/background.png";
import { LiaArrowDownSolid, LiaArrowRightSolid, LiaQuestionCircle } from "react-icons/lia"
import { Link } from "react-router-dom"



const Hero = () =>{
      
         return(
               <section 
                  className="
                     relative
                     w-full 
                     min-h-[80vh]
                     py-8
                     mt-15
                     px-6
                     lg:px-0
               ">      
               {/*bg img */}
                <img 
                  src={background}
                  alt="Contact Background Image" 
                  className="
                     absolute
                     inset-0 
                     w-full
                     h-full
                     object-cover
                     mix-blend-overlay
                  " 
                />
                {/*overlay */}
                <div className="absolute inset-0 bg-white/0 w-full h-full"/>
                {/*content */}
               <div 
                  className="
                     relative
                     max-w-6xl
                     mx-auto
                     flex
                     flex-col
                     gap-6
                     mx-auto
                     text-center
                     text-blue-950 [#03045e]
                     px-3
                     lg:px-8
                     py-8

                  "> 
                  {/*badge */}
                  <span 
                     className="
                     flex
                     items-center
                     gap-3
                     tracking-[30%]
                     uppercase
                     text-[12px]
                     text-[#B77F58]
                     bg-white
                     shadow-sm
                     mx-auto
                     w-fit
                     bor der
                     font-semibold
                     rounded-full
                     px-4
                     py-2
                     ">
                     <LiaQuestionCircle size={24}/>
                     How We Work
                  </span>
                  <h1 
                     className="
                        text-2xl
                        md:text-6xl
                        font-extrabold
                        leading-tight
                        
                     ">
                     
                     Listen. <strong className="font- bold text-[B77F58]"> Understand.</strong> Deliver.
                  </h1>
                  <p 
                     className="
                     text-[1.3rem] font-light lg:max-w-4xl mx-auto leading-relaxed
                  ">                     
                     The quality of a solution depends on the thinking behind that comes before it.
                     Our approach is built around understanding the business first, then moving through
                     a clear deliberate process. 
               </p>
               <div className="hidden max-w-sm gap-x-8 gap-y-2 mx-auto flex items-center justify-center flex-wrap">
                   <span className="bg-whit e shadow rounded-full border border-blue-700/10 px-3 py-1">
                     Business First
                   </span>
                   <span className="bg-whi te shadow rounded-full border border-blue-700/10 px-3 py-1">
                     Purpose Driven
                   </span><span className="bg-wh ite shadow rounded-full border border-blue-700/10 px-3 py-1">
                     Outcome Focused
                   </span>
               </div>
               {/*buttons */}
               <div className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
                    <a 
                      href="#our-principles"
                      className="
                           group
                           px-8
                           shadow
                           shadow
                           py-4
                           rounded-full
                           bg-[#03045e]
                           text-white
                           tracking-wide
                           font-semibold
                           uppercase
                           hover:shadow-xl
                           hover:-translate-y-1
                           hover:bg-[#021F46]
                           transition-all
                           duration-300
                     ">
                  Our Principles
               </a>
                <a
                  href="#our-process"
                  className="
                     group
                     flex 
                     items-center
                     justify-center
                     gap-3
                     px-8
                     shadow
                     py-4
                     rounded-full
                     border
                     border-[#03045e]/20
                     tracking-wide
                     font-semibold
                     uppercase
                     hover:shadow-xl
                     hover:-translate-y-1
                     hover:
                     transition-all
                     duration-300
               ">
                  our process
                  <LiaArrowDownSolid size={18} className="group-ranslate-x-3 transition-all duration-1000"/>
               </a>

               </div>
              
               </div>
             
             {/*bottom fade*/}
              <div  
                className="
                  absolute
                  bottom-0
                  w-full 
                  h-15 
                  bg-gradient-to-b
                  from-transparent 
                  via-[#f8fafc]/60
                  to-[#f8fafc] "
               />
            </section>
         )
}

export default Hero