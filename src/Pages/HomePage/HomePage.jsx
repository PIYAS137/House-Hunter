import { Carousel } from "../../Components/HomepageComponents/Carousel"
import FeaturesSection from "../../Components/HomepageComponents/FeaturesSection"
import HowWebsiteWork from "../../Components/HomepageComponents/HowWebsiteWork"
import RecentHomesSection from "../../Components/HomepageComponents/RecentHomesSection"


const HomePage = () => {
  return (
    <div>
      <Carousel/>
      <RecentHomesSection/>
      <FeaturesSection/>
      <HowWebsiteWork/>
    </div>
  )
}

export default HomePage