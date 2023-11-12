import Banner from "./Banner";
import Category from "./Category";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="container mx-auto max-w-screen-2xl px-5">
        <div className="my-14">
          <Category></Category>
        </div>
      </div>
    </>
  );
};

export default Home;
