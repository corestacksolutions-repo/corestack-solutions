



const ProcessCard = ({id, icon, title, description, reverse=false}) =>{
        const Icon = icon
        return(
              <article className={
                      `relative
                      group
                      w-full 
                      grid
                      md:grid-cols-2
                      gap-y-6 
                      p-6 
                      space-y-4 
                      
                      ${reverse ? "md:[&>*:first-child]:order-2" : ""}
                      `}
                  >
                  
                    <div  className={`flex ${ reverse ? 'pl-12' : 'justify-end pr-12'} w-full`}>
                        <div id="neuro-in" className={`flex text-[4rem] font-extrabold text-yellow-600 mx-a uto ${ reverse ? 'roundel' : 'roundedfull'}   h-full w-1/2   p-4`}>
                           <span className="m-auto">
                              0{id}
                           </span>
                        </div>
                        
                    </div>
                  
                  <div className={`space-y-8 ${ !reverse ? 'rounded--2xl' : 'rounded-2'} p-4 `}>
                    <div className="w-fit p-4 border rounded-full border-black/20">
                       <Icon className="text-black/50 size-10"/>
                    </div>
                    <h3 className="text-xl text-yellow-600 font-semibold">
                          {title}
                    </h3>  
                    <p className="text-lg  text-bla ck/80">
                      {description}
                  </p>
                  </div>
                  
              </article>
       )
}
export default ProcessCard;