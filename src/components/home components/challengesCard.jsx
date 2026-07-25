



const Challengescard = ({id, icon, title, description}) =>{
        const Icon = icon
        return(
              <article className="
                      relative
                      group
                      w-fu ll 
                    
                       shado
                      border 
                      border
                      border-blue-600/60 
                      bg-blue -600/10 
                      radial from-white -100 via-gray-50 to-blue-900/10
                      p-4 
                      w-fit
                      py -2
                      lg:px-8 
                      rounded-full xl md 
                      space- y-4 
                      hover:scale-  105 
                      transition-all 
                      duration-1000
                      
                      "
                      
                  >
                  <header className="">
                    <div className="hidden w-fit sm:p-2 p-3  bg-black/2 border border-black/4 rounded-full">
                       <Icon className="size-7 text-blue-900/80"/>
                    </div>
                    <h3 className="
                          text- xl
                          text  
                          font- semibold
                          tracking-wide
                          m-auto
                          ">
                       {title}
                    </h3>
                    <div className="hidden w-full h-px [px] bg-gray-600/10 my- 8">
                       <div className="w-0 h-full bg-yellow-600/40 group-hover:w-full transition-all duration-3000"></div>
                    </div>
                  </header>
                  <p className="hidden text-[1.1rem] font-normal light text-black leading-relaxed">
                      {description}
                  </p>
              </article>
       )
}
export default Challengescard;