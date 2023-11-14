import { Map, Marker } from "pigeon-maps";
import { MdLocationOn } from "react-icons/md";
import { AiTwotoneMail, AiFillPhone } from "react-icons/ai";

const Location = () => {
  return (
    <>
      <div className="container mx-auto max-w-screen-2xl px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="min-h-[300px] order-2 md:order-1">
            <Map
              defaultCenter={[42.5670340714189, 12.645802583344134]}
              defaultZoom={16}
            >
              <Marker
                width={50}
                anchor={[42.5670340714189, 12.645802583344134]}
              />
            </Map>
          </div>
          <div className="order-1 md:order-2 font-Inter text-white flex flex-col gap-4">
            <h1 className="font-Cinzel text-4xl flex items-center gap-2">
              <MdLocationOn className="text-3xl"></MdLocationOn>Our Location
            </h1>

            <p>
              Nestled in the heart of Italy, Cafe Rustic offers a culinary
              escape that perfectly mirrors the charm of its central location.
              Our restaurant is strategically positioned in the picturesque town
              of [Town Name], surrounded by the rolling hills and vineyards that
              characterize the breathtaking landscapes of central Italy.
              <hr className="my-1" />
              Cafe Rustic<br></br>
              Via del Gusto, 123<br></br>
              53100 Townville, Tuscany, Italy
              <hr className="my-1" />
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              <p className="flex items-center gap-2">
                <AiFillPhone></AiFillPhone>+1 (555) 123-4567
              </p>
              <p className="flex items-center gap-2">
                <AiTwotoneMail></AiTwotoneMail>info@caferustic.com
              </p>
            </div>
            <div className="flex">
              <button className="btn bg-secondary1 hover:bg-secondary1 border-0 border-b-2 border-white hover:border-white text-white font-medium">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
