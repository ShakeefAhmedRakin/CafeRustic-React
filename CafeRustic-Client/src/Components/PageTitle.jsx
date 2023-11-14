import { Parallax } from "react-parallax";

const PageTitle = ({ image, title }) => {
  return (
    <>
      <Parallax
        bgImage={image}
        strength={500}
        blur={{ min: -1, max: 1 }}
        bgImageStyle={{ "object-fit": "cover" }}
        className="mb-10"
      >
        <div className="aspect-video max-h-[350px] w-full px-8 py-8 md:p-20 flex justify-center items-center">
          <h1 className="font-Cinzel px-8 py-8 md:p-20 text-3xl md:text-7xl text-center text-white font-medium w-full bg-black max-w-4xl mx-auto bg-opacity-60">
            {title}
          </h1>
        </div>
      </Parallax>
    </>
  );
};

export default PageTitle;
