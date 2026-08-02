import { Link } from "react-router-dom"

const CTA = () =>{
    return(
           <section className="w-full px-6 py-12 rounded-xl">
                <div className="w-full max-w-[1128px] mx-auto">
                      <h1 className="">
                         Ideas matter, Execution matters more.
                      </h1>
                      <p className="">
                         .
                         Explore the principles and process that guide our 
                         engagements.
                      </p>
                      <footer className="">
                          <Link to='/approach'>
                             Our Approach
                          </Link>

                      </footer>
                </div>
           </section>
    )
}