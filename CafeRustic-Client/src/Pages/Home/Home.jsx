import About from "./About";
import Banner from "./Banner";
import Category from "./Category";
import Contact from "./Contact";
import Menu from "./Menu";
import Recommendation from "./Recommendation";

const Home = () => {
  return (
    <>
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
        <div className="my-14">
          <Recommendation></Recommendation>
        </div>
      </div>
    </>
  );
};

export default Home;
