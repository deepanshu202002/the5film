import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel /> {/* Use the Carousel component here */}
      <div className="p-10">
        <p>Scroll down to see the effect on the navbar.</p>
        <p>More content here...</p>
      </div>
    </div>
  );
}
