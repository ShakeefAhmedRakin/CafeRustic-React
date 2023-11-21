import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "sonner";
import { MdOutlineFoodBank } from "react-icons/md";
import useFoodCart from "../../../hooks/useFoodCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState(user);
  const [cart] = useFoodCart();

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out");
      })
      .catch((error) => console.log(error));
  };

  const userInfo = (
    <>
      <div className="flex items-center gap-3 bg-primary h-12 rounded-lg px-2">
        <div className="avatar">
          <div className="w-9 rounded-full ring ring-secondary2 ring-offset-base-100 ring-offset-2">
            <img src={currentUser?.photoURL} />
          </div>
        </div>
        <h1 className="text-white">{currentUser?.displayName}</h1>
      </div>
    </>
  );

  const cartButton = (
    <>
      <Link to="/foodcart" className="mr-1">
        <button className="btn btn-circle bg-secondary1 border-none hover:bg-secondary1 relative">
          <MdOutlineFoodBank className="text-4xl text-primary"></MdOutlineFoodBank>
          <div className="badge bg-accent text-white border-none absolute -top-2 -right-2">
            {cart.length}
          </div>
        </button>
      </Link>
    </>
  );

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
      <div className="bg-secondary2 w-full py-2">
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
              {user ? (
                <>
                  <div className="flex gap-2 items-center">
                    {cartButton}
                    <div className="hidden md:flex">{userInfo}</div>
                    <button
                      onClick={handleLogOut}
                      className="btn bg-primary text-white border-none hover:bg-primary"
                    >
                      Log Out
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link to={"/login"}>
                    <a className="btn bg-primary text-white border-none hover:bg-primary">
                      Log In
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
