import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import featuredProducts from "../../../data/featured products";
import FeaturedCard from "./featured productsCard";

const FeaturedSolutions = () =>{
       return(
            <section className="w-full p-3 md:py-16">
               <div className="max-w-[1180px] mx-auto">
                    <header className="w-fit mx-auto text-center space-y-6 tracking-wide">
                         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            Featured Products
                         </h1>
                         
                         <h2 className="text-center mx-auto text-yellow-600 text-[1.3rem] my-8">
                           Solutions Built For Your Businesses Workflow.
                         </h2>
                    </header> 
                    <div className="w-full gap-6 mt-24">
                         {featuredProducts.map((item)=>
                             <FeaturedCard
                                 key={item.id}
                                 {...item}
                             />
                         )
                        }
                         
                    </div>   
               </div> 
            </section>
       )
}

export default FeaturedSolutions;