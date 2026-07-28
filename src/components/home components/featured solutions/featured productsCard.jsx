import { LiaArrowRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";


const FeaturedCard= ({img, alt, title, headline, use, description,benefits}) => {
        return(
                <article className="grid lg:grid-cols-2 3 gap-5 w-full rounded-xl p-6 rounded-2xl bg-gray-100 white text-[#222831] tex-white">
                    
                  <div className="lg:col-span -2 w-full space-y-6 "> 
                      <h1 className="text-3xl md:text-6xl font-bold text-[#03045e] my-4">
                         Smart<b className="text-[#B77F58]">Shop</b>
                      </h1>
                      <h2 className="font-bold text-xl md:text-2xl ">{headline}</h2>
                      
                      <p className="leading-relaxed">
                          {description}
                      </p>
                     
                      <div className=" flex flex-wrap gap-4 mt-8">
                        {benefits.map((benefit)=>
                          
                          <article key={benefit.id}
                               className="flex  gap-4  lg:w-[45%] gri d lg:grid-co ls-2 gp-2">
                                <div className="md:hidden size-10 shrink-0 rounded-full bg-[#03045e]"></div>
                                <div className="">
                                    <h3 className="text-[#03045e] font-semibold">
                                    {benefit.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                           </article>
                        )}   
                      </div>
                      <div className="flex flex-col md:flex-row gap-4 w-full my-8">
                         <Link 
                            to="/products"
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
                            Explore SmartShop
                        </Link>
                        <Link
                        to='/contact'
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
                        Request a Demo
                        <LiaArrowRightSolid size={18} className="group-hover:translate-x-3 transition-all duration-1000"/>
                    </Link>

                      
                      </div>    
                  </div> 
                  <div className=" mx-auto h-fit border border-black/10 md:bord er-none rounded-2xl mt-8">
                        <img src={img} alt={alt} className="w-full object-cover md:-trnslate-y-20 rounded-xl scale-120 hover:scale-130 transition-all duration-1000" />
                  </div>
                </article>
        )
    }
export default FeaturedCard;