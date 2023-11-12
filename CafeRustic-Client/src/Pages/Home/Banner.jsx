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
            src="/src/assets/banner/01.jpg"
            className="aspect-video object-cover max-h-[750px]"
          />
        </div>
        <div>
          <img
            src="/src/assets/banner/02.jpg"
            className="aspect-video object-cover max-h-[750px]"
          />
        </div>
        <div>
          <img
            src="/src/assets/banner/03.png"
            className="aspect-video object-cover max-h-[750px]"
          />
        </div>
        <div>
          <img
            src="/src/assets/banner/04.jpg"
            className="aspect-video object-cover max-h-[750px]"
          />
        </div>
        <div>
          <img
            src="/src/assets/banner/05.png"
            className="aspect-video object-cover max-h-[750px]"
          />
        </div>
        <div>
          <img
            src="/src/assets/banner/06.png"
            className="aspect-video object-cover max-h-[750px]"
          />
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
