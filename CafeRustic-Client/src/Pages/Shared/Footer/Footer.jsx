import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex justify-center flex-col md:flex-row">
          <div className="text-white bg-secondary1 w-full flex justify-center md:justify-end pr-0 md:pr-10 lg:pr-40 py-[96px]">
            <div>
              <h1 className="text-center text-2xl font-medium mb-5">
                CONTACT US
              </h1>
              <p className="text-center">
                123 ABS Street, Uni 21, Bangladesh<br></br>
                +88 123456789<br></br>
                Mon - Fri: 08:00 - 22:00<br></br>
                Sat - Sun: 10:00 - 23:00
              </p>
            </div>
          </div>
          <div className="text-white  bg-secondary2 w-full flex justify-center md:justify-start md:pl-10 lg:pl-40 py-[96px]">
            <div>
              <h1 className="text-center text-2xl font-medium mb-3">
                FOLLOW US
              </h1>
              <p className="text-center">Join us on social media</p>
              <div className="mt-5 flex justify-center text-xl gap-4 items-center">
                <FaFacebookF></FaFacebookF>
                <FaInstagram></FaInstagram>
                <FaTwitter></FaTwitter>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#151515]">
          <p className="text-white font-medium text-xs md:text-lg text-center p-4">
            Copyright © CafeRustic. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
