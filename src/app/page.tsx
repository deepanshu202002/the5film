import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import FiveImages from "../components/FiveImages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel /> {/* Use the Carousel component here */}
      <FiveImages />
    </div>
  );
}
