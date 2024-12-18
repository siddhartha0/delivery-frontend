import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3")',
      }}
    >
      <div className="w-full max-w-xl">
        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Create Your Account
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Join our delivery network and start shipping
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="firstName"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="lastName"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="confirmPassword"
              >
                Confirm password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input id="privacy" type="checkbox" />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                I agree to the{" "}
                <Link
                  to="/privacy-policy"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  to="/terms-of-service"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Terms of Service
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
            >
              Create Account
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Google
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200">
                <img
                  src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                  alt="Facebook"
                  className="w-5 h-5 mr-2"
                />
                Facebook
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-8">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Login Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
