import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="bg-opacity-70 bg-gray-900 z-50 fixed w-full top-0">
        <div className="container mx-auto max-w-screen-2xl font-Inter">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {links}
                </ul>
              </div>
              <a className="text-white font-bold text-lg md:text-3xl font-Cinzel">
                Cafe <span className="text-primary">Rustic</span>
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="flex gap-4 text-white font-bold text-lg px-1">
                {links}
              </ul>
            </div>
            <div className="navbar-end">
              <a className="btn">Button</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
