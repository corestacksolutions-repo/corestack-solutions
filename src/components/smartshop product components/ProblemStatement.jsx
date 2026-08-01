import { Link } from "react-router-dom"
import businessChallenges from "../../data/businessChallenges"
import ChallengeCard from "./ChallengeCard"


const ProblemStatement = () => {
  return (
    <section className="w-full  mb-8">
        <div className="bg-gray-100/50 w-full lg:max-w-[1180px]
                    mx-auto px-5 md:px-10 p-2 pb-6 lg:py-4 lg:px-6 rounded-none sm:rounded-xl">
            <header className=" w-fit text-left space-y-6">
                          
                <h3
                        className="
                            uppercase
                            text-[12px]
                            lg:text-[14px]
                            tracking-[0.25em]
                            font-bold
                            text-[#4B556F]
                        "
                    >
                        the challenge
                    </h3>
                
                <h2
                        className="
                            mt-2
                            text-[2rem]
                            lg:text-5xl
                            font-bold
                            text-[#03045E]
                            max-w-[600px]
                        "
                    >
                        
                        Running a business is hard 
                    
                    
                        enough without these <span className='text-[#B77F58]'>problems</span>.
                    
                    </h2>
                          
                <p className=" max-w-[500px] text-[#4B556F] text-[1rem] lg:text-[1.2rem] ">
                    Many retailers lose time, sales and customers because of manual 
                    processes and lack of the right tools.
                </p>
            </header> 

            {/* Cards */}
            <div 
                className="
                relative
                w-full
                max-w-[1180px]
                mx-auto 
                 
                overflow-hidden
                
                grid 
                grid-cols-1 
                md:grid-cols-3 
                 
                gap-6
                md:gap-3 
                my-12
            ">
                            
                {businessChallenges.map((challenge)=>
                    <ChallengeCard 
                        key={challenge.id}
                        {...challenge}
                    />
                    )
                } 
            </div> 
            
            {/* CTA */}
            <Link
                            to="/contact"
                            className="
                                group

                                flex
                                items-center
                                justify-center

                                gap-2

                                w-full
                                max-w-[1180px]
                                mx-auto
                                sm:w-auto

                                rounded-lg

                                bg-[#03045E]

                                px-7
                                py-3.5

                                uppercase

                                text-[0.75rem]
                                md:text-sm

                                font-medium

                                tracking-widest

                                text-white

                                shadow-md
                                shadow-[#03045E]/20

                                transition-all
                                duration-300

                                hover:-translate-y-1

                                hover:bg-white

                                hover:text-[#03045E]

                                hover:border
                                hover:border-[#C7C3C8]

                                hover:shadow-xl
                            "
                        >
                            explore how smartshop works
                        </Link>                      
        </div>
    </section>
  )
}

export default ProblemStatement
