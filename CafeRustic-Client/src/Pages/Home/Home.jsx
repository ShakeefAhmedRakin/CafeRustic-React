import About from "./About";
import Banner from "./Banner";
import Category from "./Category";
import Contact from "./Contact";
import Menu from "./Menu";
import Location from "./Location";
import { Parallax } from "react-parallax";
import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Cafe Rustic</title>
      </Helmet>
      <Banner></Banner>
      <div className="container mx-auto max-w-screen-2xl px-5">
        <div className="my-14">
          <Category></Category>
        </div>
        <div className="my-14">
          <About></About>
        </div>
        <div className="my-14">
          <Menu></Menu>
        </div>
        <div className="my-14">
          <Contact></Contact>
        </div>
      </div>
      <div className="my-14">
        <Parallax
          bgImage={"/src/assets/form/1.jpg"}
          strength={500}
          bgImageStyle={{ "object-fit": "cover", filter: "brightness(40%)" }}
        >
          <div>
            <Location></Location>
          </div>
        </Parallax>
      </div>
      <div className="container mx-auto max-w-screen-2xl px-5">
        <div className="my-14">
          <Testimonial></Testimonial>
        </div>
      </div>
    </>
  );
};

export default Home;
