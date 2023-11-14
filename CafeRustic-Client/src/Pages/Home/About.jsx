import { Parallax } from "react-parallax";

const About = () => {
  return (
    <>
      <Parallax
        bgImage={"/src/assets/about/1.jpg"}
        strength={500}
        className="p-4 md:p-24"
        bgImageStyle={{ "object-fit": "cover" }}
      >
        <div className="bg-white py-16">
          <div className="w-[80%] mx-auto">
            <h1 className="font-Cinzel text-2xl md:text-4xl text-center">
              Cafe Rustic
            </h1>
            <p className="text-center font-Inter mt-2 text-xs md:text-sm lg:text-base">
              Welcome to Cafe Rustic, a charming culinary haven situated in the
              heart of Italy. Our restaurant beckons you with a warm ambiance
              that seamlessly blends the allure of the countryside with the rich
              tapestry of flavors awaiting your discovery. At Cafe Rustic, our
              commitment to excellence begins with our dedication to using the
              freshest farm-to-table ingredients.
            </p>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default About;
