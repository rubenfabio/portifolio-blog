import React from 'react';

function HeroSection() {
  return (
    <>
      <section class="hero-section bg-hero">
        <div class="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center bg-hero">
          <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

          <div class="px-4 sm:px-6 lg:px-8 z-10">
            <div class="text-center">
              <h2 class="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
                <span class="text-indigo-600 font-bold">Headline</span> Here it
                is!
              </h2>
              <p class="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex justify-center">
                <div class="rounded-md shadow transition duration-500 ease-in-out">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
