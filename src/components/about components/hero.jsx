import background from "../../assets/smartshop/background.png";
import { LiaArrowRightSolid, LiaQuestionCircle } from "react-icons/lia"
import { Link } from "react-router-dom"



const Hero = () =>{
      
         return(
               <section 
                  className="
                     relative
                     w-full 
                     min-h-[100vh]
                     py-8
                     mt-15
                     
                     
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
                     max-w-5xl
                     mx-auto
                     flex
                     flex-col
                     gap-6
                     mx-auto
                     text-center
                     text-blue-950 [#03045e]
                     px-3
                     px-6
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
                     Who are We
                  </span>
                  <h1 
                     className="
                        text-3xl
                        md:text-6xl
                        font-bold
                        leading-tight
                        
                     ">
                     More Than Software. 
                     <br/>
                     A Partner in <strong className="font-bold text-[#B77F58]"> Business</strong> Improvement.
                  </h1>
                  <p 
                     className="
                     text-lg font-light lg:max-w-4xl mx-auto leading-relaxed
                  ">                     
                     CoreStack Solutions exists to help businesses make better use technology through thoughtful
                     decisions and practical execution. The company is shaped by a clear purpose, shared values, and 
                     a commitment to building solutions that serve real business need. 
               </p>
               {/*buttons */}
               <div className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
                    <a 
                      href="#about-us"
                      className="
                           group
                           px-8
                           shadow
                           shadow
                           py-4
                           rounded-full
                           bg-[#03045e]
                           text-white
                           tracking-widest
                           font-semibold
                           uppercase
                           hover:shadow-xl
                           hover:-translate-y-1
                           hover:bg-[#021F46]
                           transition-all
                           duration-300
                     ">
                  Get To Know Us
               </a>
                <Link
                  to='/approach'
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
                     tracking-widest
                     font-semibold
                     uppercase
                     hover:shadow-xl
                     hover:-translate-y-1
                     hover:
                     transition-all
                     duration-300
               ">
                  our approach
                  <LiaArrowRightSolid size={18} className="group-hover:translate-x-3 transition-all duration-1000"/>
               </Link>

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