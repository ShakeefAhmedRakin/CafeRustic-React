const SectionTitle = ({ mainText, subText }) => {
  return (
    <>
      <div className="max-w-[410px] mx-auto my-10 space-y-4">
        <p className="italic text-xs md:text-lg text-primary text-center font-Inter">
          ---{subText}---
        </p>
        <hr className="border-2" />
        <h1 className="text-lg md:text-4xl text-center font-Inter">
          {mainText}
        </h1>
        <hr className="border-2" />
      </div>
    </>
  );
};

export default SectionTitle;
