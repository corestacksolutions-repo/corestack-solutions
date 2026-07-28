import { 
   LuFilter, 
   LuGitBranch, 
   LuLayers, 
   LuTarget 
} 
from "react-icons/lu";
import philosophy from "../../data/philosophy";
import PhilosophyCard from "./philosophyCard";

const Philosophy = () =>{
        return(
               <section id="our-principles" className=" bg-[#f8fafc] px-6 py-16">
                  <header className="w-full max-w-3xl mx-auto text-center mt-16">
                     
                     <h2 className="text-[2.5rem] font-bold">
                          Principles That Guide Our Work
                     </h2>
                     <div className="hidden w-1/10 bg-[#B77F58] mx-auto my-6"/>

                     <p className="text-[1.3rem] font-light mt-6">
                          Each approach is guided by principles formed through careful 
                          observation of how businesses operate, adapt to change, and 
                          create value over time.
                     </p>
                  </header>
                  <div className=" w-full max-w-[1180px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 my-34">
                       {
                        philosophy.map((item)=>
                           <PhilosophyCard
                             key={item.id}
                             {...item} 
                           />
                        )
                        }
                  </div>
                  <footer className="">

                  </footer>

               </section>
        )
}
export default Philosophy;