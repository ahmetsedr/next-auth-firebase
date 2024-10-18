import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
      <nav className="container mx-auto flex items-center justify-between px-4">
        {/* Company Logo */}
        <a href="/" className="font-bold text-gray-900 text-xl hover:text-gray-700">
          Company
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:items-center space-x-6">
          <Link href="/blog" className="hover:text-gray-700 text-gray-900">
            Blog
          </Link>
          <Link href="/help" className="hover:text-gray-700 text-gray-900">
            Help
          </Link>
        </div>

        {/* Auth Links */}
        <div className="hidden lg:flex items-center space-x-4">
          {!loading && !user ? (
            <div className="space-x-2">
              <button
                onClick={handleSignIn}
                className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-full"
              >
                Login
              </button>
              <button
                onClick={handleSignIn}
                className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-full"
              >
                Sign up
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <p>Welcome, {user?.displayName}</p>
              <button
                onClick={handleSignOut}
                className="text-gray-900 hover:text-gray-700"
              >
                Sign out
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden block text-gray-900"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-0.5 bg-gray-900 my-1"></span>
          <span className="block w-6 h-0.5 bg-gray-900 my-1"></span>
          <span className="block w-6 h-0.5 bg-gray-900 my-1"></span>
        </button>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:hidden fixed inset-0 bg-gray-900 text-white flex flex-col justify-center items-center space-y-6 z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-white text-2xl"
          onClick={toggleMenu}
        >
          &times;
        </button>

        <ul className="text-center space-y-4">
          <li className="text-xl">
            <Link href="/">Home</Link>
          </li>
          <li className="text-xl">
            <Link href="/about">About</Link>
          </li>
          <li className="text-xl">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="text-xl">
            <Link href="/help">Help</Link>
          </li>
          {user && (
            <li className="text-xl">
              <Link href="/profile">Profile</Link>
            </li>
          )}
        </ul>

        {/* Auth Links for Mobile */}
        <div className="mt-4 text-center">
          {!loading && !user ? (
            <div className="space-y-4">
              <button
                onClick={handleSignIn}
                className="block w-full bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-full"
              >
                Login
              </button>
              <button
                onClick={handleSignIn}
                className="block w-full bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-full"
              >
                Sign up
              </button>
            </div>
          ) : (
            <div className="block w-full bg-gray-900 text-white hover:bg-gray-800 px-6 py-4 rounded-full shadow-md transition duration-200">
  <p className="text-center text-lg font-semibold">Welcome, {user?.displayName}</p>
  <button
    onClick={handleSignOut}
    className="mt-4 block w-full bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-full transition duration-200"
  >
    Sign out
  </button>
</div>


          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;