import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="fixed w-full z-10 bg-white border-b-2 shadow-lg">
        <div className="w-full">
          <div className="flex items-center h-20 w-full ">
            {/* first block */}
            <div className="flex items-center mx-5 lg:mx-20 justify-between w-full ">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <h1 className="font-bold text-xl cursor-pointer">
                  Benigi <span className="text-red-500">Garda</span>
                  <span className="text-green-500"> Anvadin</span>
                </h1>
              </div>
            </div>
            {/* second block */}
            <div className="hidden md:block lg:mx-20">
              <div className="ml-10 mr-3 flex items-baseline space-x-4">
                <button className="hover:bg-black cursor-pointer text-black font-semibold px-3 py-2 text-md hover:text-white rounded-md">
                  About
                </button>
                <button className="hover:bg-black cursor-pointer text-black font-semibold px-3 py-2 text-md hover:text-white rounded-md">
                  Experience
                </button>
                <button className="hover:bg-black cursor-pointer text-black font-semibold px-3 py-2 text-md hover:text-white rounded-md">
                  Project
                </button>
              </div>
            </div>

            <div className="md:hidden flex mr-5">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                aria-controls="mobile-menu"
                aria-expanded="false"
                className="bg-blue-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-500 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6H16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen == true}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden id=mobile-menu">
              <div ref={ref} className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button className="cursor-pointer hover:bg-black text-black hover:text-white px-3 py-2 rounded-md text-base font-medium w-full flex justify-start">
                  About
                </button>
                <button className="cursor-pointer hover:bg-black text-black hover:text-white px-3 py-2 rounded-md text-base font-medium w-full flex justify-start">
                  Experience
                </button>
                <button className="cursor-pointer hover:bg-black text-black hover:text-white px-3 py-2 rounded-md text-base font-medium w-full flex justify-start">
                  Project
                </button>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
