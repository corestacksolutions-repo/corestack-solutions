import CTA from "../components/smartshop product components/CTA";
import FAQ from "../components/smartshop product components/FAQ";
import HowItWorks from "../components/smartshop product components/HowItWorks";
import IdealFor from "../components/smartshop product components/IdealFor";
import MeetSmartShop from "../components/smartshop product components/MeetSmartShop";
import ProblemStatement from "../components/smartshop product components/ProblemStatement";
import SmartAction from "../components/smartshop product components/SmartAction";
import SmartShopHero from "../components/smartshop product components/SmartShopHero";

const SmartShop = () => {
  return (
    <div>
      <SmartShopHero />
                <ProblemStatement />
                <MeetSmartShop />
                <SmartAction />
                <HowItWorks />
                <IdealFor />
                <CTA />
                <FAQ />
    </div>
  )
}

export default SmartShop
