import { Link } from "react-router-dom"

const CTA = () =>{
    return(
           <section className="w-full px-6 py-12 rounded-xl">
                <div className="w-full max-w-[1128px] mx-auto">
                      <h1 className="">
                         Thought Shapes The Outcome
                      </h1>
                      <p className="">
                         The quality of a solution is determined before it is ever built.
                         Discover the approach that guides our thinking from first conversation.
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