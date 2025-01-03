import TopNavigation from "@/component/common/TopNavigation";
import RootLayout from "./layout";
import HorizontalMenu from "@/component/common/HarizontalMenu";
import Slider from "@/component/common/Sliders";
import WifiConnectionProvider from "@/component/HomePage/wifiConnectionProvider";
import BroadbandExperience from "@/component/HomePage/BroadbandExperience";
import Blog from "@/component/HomePage/Blog";
import OurNetworkCoverage from "@/component/HomePage/OurNetworkCourage";

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
        <div >
     <h1>
      Home Page
     </h1>
    </div>
    </RootLayout>
  );
}
