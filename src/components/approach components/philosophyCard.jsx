

const PhilosophyCard = ({icon, title, description}) =>{
        const Icon = icon
        return(
             <article id="philo" className=" relative w-full gray-50 bord er border-black/5 p-6 roun ded-4xl">
                <div className="absolute flex left-1/2 -translate-x-1/2 -top-8 border border-5 border-white p-3 bg-[#03045e] gray-300 rounded-full">
                    <Icon size={24} className="stroke-[1.5px] m-auto text-white"/>
                </div>
                <div className="space-y-4 mt-8">
                    <h2 className="font-semibold text-yellow-600 [#03045e] text-[1.1rem] yellow-600">
                        {title}
                    </h2>
                    <p className="text-[1.1rem] font-light tracking- leading-relaxed">
                        {description}
                    </p>
                </div>
            </article>
        )
}

export default PhilosophyCard;
