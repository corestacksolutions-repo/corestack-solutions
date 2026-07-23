// import Hero from "../components/home components/hero";

import Services from "../components/home components/services";
import Quotes from "../components/home components/market quotes";
import FeaturedSolutions from "../components/home components/featured solutions/featured solution";
import CTA from "../components/home components/CTA";
import FQA from "../components/home components/FAQ"
import Challenges from "../components/home components/Challenges";
import Process from "../components/home components/Process";
import Promise from "../components/home components/Promise";
import HomeHero from "../components/home components/HomeHero";

const Home = () => {
  return (
          <>
            <HomeHero />
            <Challenges />
            <Services/>
            <Promise />
            <FeaturedSolutions/>
            <FQA/>
            <CTA/>

          </>
  )
}
export default Home;
