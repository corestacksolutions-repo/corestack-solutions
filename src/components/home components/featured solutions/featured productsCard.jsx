import { LiaArrowRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";


const FeaturedCard= ({img, alt, icon, title, headline, use, description,benefits, cta, link}) => {
        return(
                <article className="grid lg:grid-cols-2 gap-y-12 w-full rounded-xl bg-gray-100 text-[#222831] px-3 md:px-6 py-6">
                    
                  <div className="lg:col-span w-full space-y-6 "> 
                      <h1 className="text-3xl md:text-6xl font-bold text-[#03045e]">
                         Smart<b className="text-yellow-700 [#B77F58]">Shop</b>
                      </h1>
                      <h2 className="font-bold text-xl md:text-2xl ">{headline}</h2>
                      
                      <p className="leading-relaxed">
                          {description}
                      </p>
                      {/*benefits */}
                       <div className=" flex flex-wrap gap-4 mx-auto">
                        {benefits.map((benefit)=>{ 
                          const Icon =benefit.icon
                          return(
                          <article key={benefit.id}
                               className="flex  gap-4 ">
                                <div className="flex size-12 border shrink-0 rounded-full bg -[#03045e]">
                                     <Icon className="m-auto size-6 text-black white"/>
                                </div>
                                <div className="">
                                    <h3 className="text-yellow-700 [#03045e] font-semibold">
                                    {benefit.title}
                                    </h3>
                                    <p className="hiddn text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                           </article>
                        )})}   
                      </div>    
                  </div> 
                  {/*right side-image plue cta btn */}
                  <div className="mx-auto">
                        <img src={img} alt={alt} className="w-full lg:-translate-y-20 object-cover rounded-xl " />
                         {/**cta */}
                         <div className=" flex flex-col md:flex-row gap-4 w-full lg:-translate-y-10">
                              <Link 
                            to={link}
                            className="
                                w-fit
                                group
                                flex 
                                items-center
                                justify-center
                                gap-4
                                
                                px-4
                                shadow
                                py-4
                                rounded-full
                                bg-[#03045e]
                                text-white
                                text-[1rem]
                                lg:text-[1.3rem]
                                tracking-wide
                                font-semibold
                                hover:shadow-xl
                                hover:-translate-y-1
                                hover:
                                transition-all
                                duration-300
                                whitespace-nowrap

                                mt-6
                            ">
                            {cta}
                            <span className="bg-white p-2 rounded-full group-hover:translate-x-3 transition-all duration-1000">
                                 <LiaArrowRightSolid size={18} className=" text-[#03045e]"/>
                            </span>
                           
                        </Link>    
                      </div>
                      
                  </div>
                </article>
        )
    }
export default FeaturedCard;