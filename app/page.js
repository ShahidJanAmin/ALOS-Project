import TopNavigation from "@/components/common/TopNavigation";
import RootLayout from "./layout";
import HorizontalMenu from "@/components/common/HarizontalMenu";
import Slider from "@/components/common/Sliders";
import WifiConnectionProvider from "@/components/HomePage/wifiConnectionProvider";
import BroadbandExperience from "@/components/HomePage/BroadbandExperience";
import Blog from "@/components/HomePage/Blog";
import OurNetworkCoverage from "@/components/HomePage/OurNetworkCourage";
import UserTestimonial from "@/components/HomePage/UserTestimonial";
import SimpleBlog from "@/components/HomePage/SimpleBlog";
import GotQuestion from "@/components/HomePage/GotQuestion";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <RootLayout>
      <TopNavigation/>
      <HorizontalMenu/>
      <Slider/>

      <WifiConnectionProvider/>
      <BroadbandExperience/>

      <Blog/>
      <OurNetworkCoverage/>
      <UserTestimonial/>
      <SimpleBlog/>
       <GotQuestion/>

       <Footer/>
    </RootLayout>
  );
}
