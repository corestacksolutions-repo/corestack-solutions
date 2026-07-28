import { CgDanger } from "react-icons/cg";
import { LuArrowLeft } from "react-icons/lu";
import { MdOutlineDangerous } from "react-icons/md";
import { Link } from "react-router-dom";



const NoPageFound = () =>{
         return(
                <div 
                  className="
                    w-full 
                    h-[100vh]
                    flex
                   
                    
                  ">
                 <div 
                    className="
                     w-9/10
                     max-w-[1180px]
                     rounded-3xl
                     m-auto
                     flex
                     flex-col
                     items-center
                     gap-16
                     shadow
                     border
                     border-[#03045e]/20
                     p-6
                    ">
                      
                     <h1 
                        className="
                          text-3xl 
                          text-4xl 
                          font-bold
                          text-center
                          text-black/90 
                          leading-relaxed

                        ">
                         <strong className="text-red-800 mb-6">Oops!!</strong> 
                            <br className="my-8" />
                           Page not found
                        </h1>
                        <Link 
                           to='/'
                           className="
                            group
                            flex
                            items-center
                            gap-3
                            px-6
                            py-3
                            border
                            border-black/10
                            bg-[#03045e]
                            text-white
                            rounded-full
                            font-bold
                            text-2xl
                            hover:opacity-95
                            hover:-translate-y-2
                            hover:shadow-xl
                            hover:shadow-[#03045e]/30
                            transition-all
                            duration-500

                            ">
                            <span className="p-2 bg-white rounded-full text-[#03045e] group-hover:-translate-x-3 transition-all duration-500">
                              <LuArrowLeft size={18} className=""/>
                            </span>
                            
                            Back
                        </Link>
                    </div>
                </div> 
         )
}
export default NoPageFound;