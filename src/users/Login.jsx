import { Link, useLocation, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc"; // Google icon
import img from "../../src/assets/Mobile login.gif";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import UseAuth from "../Hooks/UseAuth";
import app from "../firebase/Firebase.init";
import { toast } from 'react-hot-toast';

const Login = () => {
  const { signIn } = UseAuth();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
          console.log(result);
          toast.success('login sucessfull')
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => console.log(error.message));
  };

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success('login sucessfull')
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="flex flex-col lg:flex-row-reverse gap-12 items-center max-w-5xl w-full">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img src={img} alt="Login" className="w-full" />
        </div>

        {/* Form Section */}
        <div className=" p-8 w-full max-w-md">
          <h1 className="text-center text-4xl font-extrabold text-[#6C5CE7] mb-6">
            Sign In
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-semibold text-gray-400 mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F0725F]"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-400 mb-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-md text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F0725F]"
                required
              />
              <div className="text-right mt-2">
                <a href="#" className="text-sm text-[#6C5CE7] hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer py-3 bg-[#6C5CE7] hover:bg-orange-600 text-white font-semibold rounded-md transition-all duration-300"
            >
              Login
            </button>
          </form>
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="px-4 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>
          <button
            onClick={googleLogin}
            className="w-full flex items-center justify-center py-3 border border-gray-600 rounded-md hover:bg-gray-600 hover:text-white cursor-pointer font-medium gap-3 transition-all duration-300"
            type="button"
          >
            <FcGoogle className="text-2xl text-black hover:text-white" /> Continue with Google
          </button>
          <p className="text-center text-gray-400 mt-6">
            New here?{' '}
            <Link className="font-bold text-[#6C5CE7] hover:underline" to="/register">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
