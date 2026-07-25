

const Projects = () =>{
       return(
              <section 
                  className="
                     w-full
                     h-[100vh]
                     flex

                  ">
                    {/*PELLETE */}
                    <div className="m-auto grid grid-cols-5 gap-15">

                        <div className="p-10 rounded-xl bg-[#03045e] ">primary</div>
                        <div className="p-10 rounded-xl bg-[#64748B] ">secondary</div>
                        <div className="p-10 rounded-xl bg-[#1F8A84] ">accent</div>
                        <div className="p-10 rounded-xl bg-[#f8fafc] ">bg</div>
                        <div className="p-10 rounded-xl bg-[#1e293b] ">text</div>
                    </div>

               </section>
       )
}

export default Projects;