

const Member = ({img, alt, name, role, description, social}) =>{
    
    const {Phone, WhatsApp, Facebook, LinkedIn, Twitter} = social
    
    
    return(       
            <article className="w-full h-full border border-black/10 p-6 space-y-6 rounded-xl
            ">
             <div className="w-full flex gap-4 shrink-0 overflow-hidden">
                <img src={img} 
                     alt={alt} 
                     className="size-15 rounded-full object-cover" 
                />
                <div className="">
                    <p className="text-[1.1rem] font-bold">
                    {name}
                    </p>
                    <p className="text-[0.8rem] text-yellow-600 font-semibold">
                    {role}
                    </p>
                </div>

            </div>       
              <p className="font-light  text-[1.1rem]">
                {description}
              </p>
              <div className="flex items-center gap-6 -translate-x-1 bg- text-gray-600 [#03045e] borde r border-gray-600/10 -2 yellow-900 w-fit">
                <LinkedIn size={26} className="cursor-pointer"/>
                <Phone size={26} className="cursor-pointer"/>
                <WhatsApp size={26} className="cursor-pointer"/>
              </div> 
            </article>
       )
}

export default Member;