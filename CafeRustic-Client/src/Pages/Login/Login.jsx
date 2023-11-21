import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signIn, signInWithGoogle } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully logged in. Redirecting...");
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully logged in. Redirecting...");
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const captchaRef = useRef(null);
  const handleValidateCaptcha = () => {
    const captchaValue = captchaRef.current.value;

    if (validateCaptcha(captchaValue)) {
      setCaptchaValid(true);
      toast.success("Validated captcha");
    } else {
      setCaptchaValid(false);
      toast.error("Invalid Captcha");
      captchaRef.current.value = null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Cafe Rustic | Login</title>
      </Helmet>
      <div className="mx-auto relative min-h-screen">
        <img
          src="/src/assets/form/1.jpg"
          className="absolute w-full h-full -z-10 object-cover"
        />
        <div className="flex justify-center items-center py-8 px-2 mx-auto">
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
              <div className="w-full mt-6 mb-3">
                <div className="mb-3 w-full">
                  <LoadCanvasTemplate></LoadCanvasTemplate>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="captcha"
                    ref={captchaRef}
                    disabled={captchaValid}
                    placeholder="Validate Captcha"
                    className={`py-3 px-4 w-full border-[2px] outline-none  disabled:bg-gray-300 rounded-xl text-sm dark:text-white dark:bg-gray-700 ${
                      captchaValid ? "border-green-500" : "border-red-500"
                    }`}
                  />
                  <button
                    type="button"
                    disabled={captchaValid}
                    className="btn text-lg rounded-xl bg-primary text-white hover:bg-primary"
                    onClick={handleValidateCaptcha}
                  >
                    <TiTick />
                  </button>
                </div>
              </div>
              <button
                disabled={!captchaValid}
                className="border-none btn mt-8 btn-primary bg-primary hover:bg-primary text-white text-base px-5 border-primary normal-case hover:border-primary hover:text-white"
              >
                Log In
              </button>
              <p className="mt-7 font-medium text-center dark:text-white text-black">
                Need an account?{" "}
                <Link to={"/register"} className="text-primary">
                  Sign up here
                </Link>
              </p>
            </form>
            <p className="my-7 font-medium text-center dark:text-white text-primary">
              Or Login With
            </p>
            <div className="flex justify-center items-center gap-4">
              <button className="btn btn-circle" onClick={handleGoogleSignIn}>
                <FcGoogle className="text-xl"></FcGoogle>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
