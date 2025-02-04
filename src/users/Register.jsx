import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";

import img from "../../src/assets/register.gif";
import toast from "react-hot-toast";
import app from "../firebase/Firebase.init";
import UseAuth from "../Hooks/UseAuth";

const Register = () => {
  const { createUser, updateUserProfile } = UseAuth();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinimumLength = password.length >= 6;

    if (!hasUppercase) {
      toast.error("Password must include at least one uppercase letter.");
      return false;
    }
    if (!hasLowercase) {
      toast.error("Password must include at least one lowercase letter.");
      return false;
    }
    if (!hasMinimumLength) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!validatePassword(password)) return;

    createUser(email, password)
      .then((result) => {
        console.log(result);
        updateUserProfile(name, photo)
          .then(() => {
            console.log("User updated");
            toast.success("Sign up successfully.");
            navigate(location.state ? location.state : "/");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => console.log(error));
  };

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        toast.success("Sign up successfully.");
        navigate(location.state ? location.state: "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen flex items-center justify-center md:pt-8">
    <div className="hero-content flex-col lg:flex-row-reverse gap-12 items-center max-w-5xl w-full">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={img}
          alt="Register"
          className="max-w-sm lg:max-w-full"
        />
      </div>

      {/* Form Section */}
      <div className="card w-full max-w-md p-8">
        <h1 className="text-center text-3xl font-extrabold text-[#6C5CE7] mb-6">
          Create an Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Input */}
          <div>
            <label className="block text-gray-400 font-semibold mb-1">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your full name"
              className="w-full input border rounded-lg text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div>
            <label className="block text-gray-400 font-semibold mb-1">Photo URL</label>
            <input
              name="photo"
              type="text"
              placeholder="Profile image URL"
              className="w-full input border rounded-lg text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-400 font-semibold mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full input border rounded-lg text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-400 font-semibold mb-1">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter a secure password"
              className="w-full input border rounded-lg text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="mt-1 text-right">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#6C5CE7] hover:bg-[#6C5CE7] cursor-pointer text-white font-semibold rounded-lg py-3 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="divider text-gray-500 my-6">OR</div>

        {/* Google Sign-Up */}
        <button
          onClick={googleLogin}
          className="cursor-pointer hover:bg-[#6C5CE7] hover:text-white w-full flex items-center justify-center border border-gray-600 shadow-md hover:shadow-lg text-black py-3 rounded-lg transition duration-300"
        >
          <FcGoogle className="text-2xl mr-2" /> Sign up with Google
        </button>

        {/* Login Redirect */}
        <p className="mt-6 text-center text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-[#6C5CE7] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  </div>
  );
};

export default Register;
