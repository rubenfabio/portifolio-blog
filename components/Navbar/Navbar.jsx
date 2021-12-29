import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Logo from '../../public/react-logo.png';
import { navigation } from '../Navbar/NavItens';

function NavBar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  }, []);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <>
      <nav
        className={
          navbar
            ? 'bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-sm fixed w-full z-50'
            : 'bg-opacity-0  fixed w-full z-50'
        }
      >
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center md:mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <Image
                  src={Logo}
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
                <h1 className=" font-bold text-xl cursor-pointer text-white">
                  Ruben <span className="text-blue-500"> Fábio</span>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={
                          router.pathname == item.href
                            ? 'cursor-pointer from-blue-600 to-purple-500 bg-gradient-to-r text-white  px-3 py-2 rounded-md text-sm font-medium'
                            : 'cursor-pointer hover:bg-blue-600 text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                        }
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}

                  <Link href="https://api.whatsapp.com/send?phone=5519988357008">
                    <a className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black">
                      Entre em Contato
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
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
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-gradient-to-r from-indigo-700 to-blue-500 px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a className="cursor-pointer hover:bg-blue-600 text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      {item.name}
                    </a>
                  </Link>
                ))}

                <Link href="/">
                  <a className="cursor-pointer hover:bg-blue-600 text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Entre em contato
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
}

export default NavBar;
