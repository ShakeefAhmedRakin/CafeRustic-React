import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <>
      <Carousel
        className="text-center"
        infiniteLoop={true}
        autoPlay={true}
        showArrows={true}
        swipeable={true}
        emulateTouch={true}
        showStatus={false}
      >
        <div>
          <img
            src="/src/assets/banner/1.jpg"
            className="aspect-video object-cover max-h-[750px]"
          />
        </div>
        <div>
          <img
            src="/src/assets/banner/2.jpg"
            className="aspect-video object-cover max-h-[750px]"
          />
        </div>
        <div>
          <img
            src="/src/assets/banner/3.jpg"
            className="aspect-video object-cover max-h-[750px]"
          />
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
