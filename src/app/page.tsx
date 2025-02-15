import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import FiveImages from "../components/FiveImages";
import Services from "../components/Services";
import OurTeam from "../components/OurTeam";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Carousel />
      <FiveImages />
      <div className="mt-16 overflow-hidden">
        <Services />
      </div>
      <OurTeam />
    </div>
  );
}
