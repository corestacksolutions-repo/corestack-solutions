


const ChallengeCard = ({id, icon, title, description}) =>{
        const Icon =icon
        return(
              <article className="
                      relative
                      group
                      w-full 
                      
                      shadow-sm 
                      shadow-[#03045e]/10 
                      border 
                      border-[#03045e]/15
                      bg-white 
                      p-6 
                      rounded-3xl md 
                      space-y-4 
                      hover:scale-101 
                      transition-all 
                      duration-1000"
                  >
                  <header>
                    <div className="w-fit sm:p-2 p-3  bg-[#FEE2E2] rounded-lg mb-6">
                       <Icon className="size-7 text-blu e-800 /80"/>
                    </div>
                    <h3 className="
                          text-xl  
                          font-semibold
                          tracking-wide
                          my-4
                          ">
                       {title}
                    </h3>
                  </header>
                  <p className="text-[1.1rem] font-light text-[#4B556F] leading-[1.9rem]">
                      {description}
                  </p>
              </article>
       )
}
export default ChallengeCard;