import { LiaQuestionCircle } from "react-icons/lia"



const Hero = () =>{
      
         return(
               <section 
                  className="
                     w-full 
                     h
                     md:h-[90vh] 
                     md:max-h-150
                     lg:h-[90vh]
                     py-8
                     mt-15
                     flex
                     px-6
               ">
                {/*container */}
                <div 
                   className="
                      relative
                      rounded-md
                      md:rounded-xl
                      overflow-hidden
                      w-full 
                      h-
                      md:h-full
                      max-w-[1180px]
                      flex
                      m-auto
                      bg-rad ial -[at_50%_75%] from-[#03045e]/80 to-[#000]/30

               "> 
               {/*bg img */}
                <img 
                  src="https://i.pinimg.com/736x/31/78/96/31789686b4acb6729f6d01f66256f531.jpg"
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
                <div className="absolute inset-0 bg-black/0 w-full h-full"/>
                {/*content */}
               <div 
                  className="
                     relative
                     flex
                     flex-col
                     mx-auto
                     text-center
                     text -white/80
                     space-y-8
                     px-3
                     lg:px-8
                     py-8
                     bord er
                     
                     
                  "> 
                  <span 
                     className="
                     flex
                     items-center
                     gap-3
                     tracking-[30%]
                     uppercase
                     text-[12px]
                     text-yellow-700
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
                        text-4xl
                        md:text-6xl
                        font-bold
                        leading-tight
                        
                     ">
                     More Than Software. 
                     <br/>
                     A Partner in Business Improvement.
                  </h1>
                  <p 
                     className="
                     text-xl  
                  ">                     
                     
               </p>
               {/*button for scrolling down */}
               <a 
                  href="#about-us"
                  className=" hidden
                     cursor-pointer
                     px-8
                     shadow
                     shadow-[#03045e]
                     py-4
                     rounded-md
                     bg-[#03045e]
                     font-bold
               ">
                  Get To Know Us
               </a>
               </div>
             </div>
            </section>
         )
}

export default Hero