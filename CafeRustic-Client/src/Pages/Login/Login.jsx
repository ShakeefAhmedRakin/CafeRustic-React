import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the page from refreshing
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="mx-auto relative">
        <img
          src="/src/assets/form/1.jpg"
          className="absolute w-full h-full -z-10 object-cover"
        />
        <div className="flex justify-center items-center py-32 px-2">
          <div className="py-16 px-8 md:px-12 lg:px-20 rounded-xl bg-white w-full max-w-lg">
            <form className="flex flex-col" onSubmit={handleLogin}>
              <h1 className="dark:text-white text-center text-2xl lg:text-4xl font-semibold mb-0">
                Login
              </h1>
              <label className="dark:text-white text-base lg:text-lg font-semibold mt-6 mb-3">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                required
                className="py-3 px-4 border-[1px] rounded-xl text-sm dark:text-white dark:bg-gray-700"
              />
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
              <button className="border-none btn mt-8 btn-primary bg-primary hover:bg-primary text-white text-base px-5 border-primary normal-case hover:border-primary hover:text-white">
                Log In
              </button>
              <p className="mt-7 font-medium text-center dark:text-white text-black">
                Need an account?{" "}
                <Link to={"/register"} className="text-primary">
                  Sign up here
                </Link>
              </p>
              <p className="my-7 font-medium text-center dark:text-white text-primary">
                Or Login With
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
