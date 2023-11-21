import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "sonner";

const Register = () => {
  const [seePassword, setSeePassword] = useState(false);
  const { createUser, addUsernamePhoto, signIn, logOut } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const username = form.username.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must have an upper case letter");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      toast.error("Password must have a special character");
      return;
    }

    createUser(email, password)
      .then(() => {
        addUsernamePhoto(username, photoURL)
          .then(() => {
            logOut().then(() => {
              signIn(email, password)
                .then((result) => {
                  console.log(result.user);
                  toast.success("Successfully registered. Redirecting...");
                  e.target.reset();
                  setTimeout(() => {
                    navigate("/");
                  }, 2000);
                })
                .catch((error) => {
                  console.log("Error from logging in user" + error);
                });
            });
          })
          .catch((error) => {
            console.log("Error from setting username and picture: " + error);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <Helmet>
        <title>Cafe Rustic | Register</title>
      </Helmet>
      <div className="mx-auto relative min-h-screen">
        <img
          src="/src/assets/form/1.jpg"
          className="absolute w-full h-full -z-10 object-cover"
        />
        <div className="flex justify-center items-center py-8 px-2">
          <div className="py-16 px-8 md:px-12 lg:px-20 rounded-xl bg-white w-full max-w-2xl">
            <form className="flex flex-col" onSubmit={handleRegister}>
              <h1 className="dark:text-white text-center text-2xl lg:text-4xl font-semibold mb-0">
                Register
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="dark:text-white text-base lg:text-lg font-semibold mt-6 mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    required
                    className="py-3 px-4 border-[1px] rounded-xl text-sm dark:text-white dark:bg-gray-700"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="dark:text-white text-base lg:text-lg font-semibold mt-6 mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    required
                    className="py-3 px-4 border-[1px] rounded-xl text-sm dark:text-white dark:bg-gray-700"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="dark:text-white text-base lg:text-lg font-semibold mt-6 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="py-3 px-4 border-[1px] rounded-xl text-sm dark:text-white dark:bg-gray-700"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="dark:text-white text-base lg:text-lg font-semibold mt-6 mb-3">
                    User Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="User Name"
                    required
                    className="py-3 px-4 border-[1px] rounded-xl text-sm dark:text-white dark:bg-gray-700"
                  />
                </div>
              </div>
              <div className="flex-col flex">
                <label className="dark:text-white text-base lg:text-lg font-semibold mt-6 mb-3">
                  Password
                </label>
                <div className="w-full relative">
                  <input
                    type={seePassword ? "text" : "password"}
                    name="password"
                    placeholder="Your Password"
                    required
                    className="py-3 px-4 border-[1px] rounded-xl text-sm dark:text-white dark:bg-gray-700 w-full"
                  />
                  <button
                    type="button"
                    className="absolute right-3 inset-y-0 text-xl text-gray-600"
                    onClick={() => {
                      setSeePassword(!seePassword);
                    }}
                  >
                    {seePassword ? (
                      <AiFillEyeInvisible></AiFillEyeInvisible>
                    ) : (
                      <AiFillEye></AiFillEye>
                    )}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="dark:text-white text-base lg:text-lg font-semibold mt-6 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="py-3 px-4 border-[1px] rounded-xl text-sm dark:text-white dark:bg-gray-700"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="dark:text-white text-base lg:text-lg font-semibold mt-6 mb-3">
                    Photo
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="Photo URL"
                    required
                    className="py-3 px-4 border-[1px] rounded-xl text-sm dark:text-white dark:bg-gray-700"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="dark:text-white text-base lg:text-lg font-semibold mt-6 mb-3">
                  Address
                </label>
                <textarea
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  required
                  className="py-3 px-4 border-[1px] rounded-xl text-sm dark:text-white dark:bg-gray-700"
                />
              </div>
              <button className="border-none btn mt-8 btn-primary bg-primary hover:bg-primary text-white text-base px-5 border-primary normal-case hover:border-primary hover:text-white">
                Register
              </button>
              <p className="mt-7 font-medium text-center dark:text-white text-black">
                Already have an account?{" "}
                <Link to={"/login"} className="text-primary">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
