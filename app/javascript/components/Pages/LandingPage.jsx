import React, { Fragment } from "react";
import { Link } from "react-scroll";
import { Link as ReactDomLink } from "react-router-dom";
const Home = () => {
  // pass a prop that determines login or sign in was clicked

  return (
    <>
      <section className="p-4 m-4 mb-6 text-gray-700 body-font">
        <div className="container flex-row">
          Logo
          <ReactDomLink signup={true} to="/signup">
            <button
              className="flex flex-row float-right px-2 py-2 ml-4 text-xs bg-white border-2 border-black rounded text-md focus:outline-none hover:bg-gray-300"
              type="button"
            >
              Sign Up
            </button>
          </ReactDomLink>
          <ReactDomLink signup={false} to="/login">
            <button
              className="flex flex-row float-right px-2 py-2 ml-4 text-xs text-white bg-black border-0 rounded focus:outline-black hover:bg-white hover:border-black hover:text-black hover:outline-back"
              type="button"
            >
              Sign In
            </button>
          </ReactDomLink>
        </div>

        <div className="container flex flex-col items-center px-4 py-6 mx-auto border-2 border-black rounded sm:py-12 md:py-24 md:flex-row">
          <div className="flex flex-col items-center mb-12 ml-4 text-center lg:flex-grow md:w-8/12 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-900 title-font sm:text-4xl">
              Secure Events Manager
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex justify-center">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                duration={2000}
                smooth={true}
              >
                <button
                  className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-500 border-0 rounded focus:outline-none hover:bg-gray-300"
                  type="button"
                >
                  Learn More
                </button>
              </Link>
              <ReactDomLink to="/signup">
                <button
                  className="inline-flex px-6 py-2 ml-4 text-lg text-white bg-black border-0 rounded focus:outline-black hover:bg-white hover:border-black hover:text-black hover:outline-back"
                  type="button"
                >
                  Sign Up
                </button>
              </ReactDomLink>
            </div>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2"></div>
        </div>
      </section>
      <section id="about" className="p-4 m-4 mb-6 text-gray-700 body-font">
        <div className="container flex flex-col items-center px-4 py-6 mx-auto border-2 border-black sm:py-12 md:py-24 md:flex-row">
          <div className="flex flex-col items-center mb-12 ml-4 text-center lg:flex-grow md:w-8/12 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-900 title-font sm:text-4xl">
              Why To Use?
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2"></div>
        </div>
      </section>
      <section className="text-gray-700 body-font">
        <div className="container flex flex-col items-center px-4 py-6 mx-auto sm:py-12 md:py-24 md:flex-row">
          <div className="flex flex-col items-center mb-12 text-center md:mb-16 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-900 title-font sm:text-4xl">
              How To Use?
            </h1>
            <p className="mb-8 leading-relaxed">
              Pry explain different features with like gifs of the feature in
              use on the side. We could even flip the images and text back and
              forth for eatch feature. This image could be a multiple features
              or something?
            </p>
          </div>
          <div className="object-cover object-center w-5/6 rounded shadow lg:max-w-lg lg:w-full md:w-1/2">
            <img
              className="object-cover object-center w-full h-full rounded shadow"
              src={require("../../../assets/images/placeholder-images/unsplash-gradienta.jpeg")}
            />
          </div>
        </div>
        <div className="container flex flex-col items-center px-4 mx-auto my-6 sm:py-12 md:py-24 md:flex-row">
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <img
              className="object-cover object-center w-full h-full rounded shadow"
              src={require("../../../assets/images/placeholder-images/unsplash-gradienta.jpeg")}
            />
          </div>
          <div className="flex flex-col items-center ml-12 text-center b-12 md:mb-16 lg:flex-grow md:w-1/2 md:items-start md:text-right">
            <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-900 title-font sm:text-4xl">
              Feature One Is Amazing
            </h1>
            <p className="mb-8 leading-relaxed">
              Maybe we should do borders around each feature instead of the
              whole walkthrough being one border. This image could be of just
              this one feature.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
