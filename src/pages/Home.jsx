import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Fashion from "../assets/Fashion.jpeg";
import Electronics from "../assets/Electronics.jpeg";
import Furniture from "../assets/Furniture.jpeg";

const slides = [
  {
    id: 1,
    image: Fashion,
    caption: "Latest Fashion Arrivals",
    description: "Explore our new season collections with up to 40% off",
    buttonText: "Shop Fashion",
  },
  {
    id: 2,
    image: Electronics,
    caption: "Trending Electronics Deals",
    description: "Upgrade your tech with exclusive limited-time offers",
    buttonText: "Shop Electronics",
  },
  {
    id: 3,
    image: Furniture,
    caption: "Stylish Home Furniture",
    description: "Transform your space with our designer collections",
    buttonText: "Shop Furniture",
  },
];


function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`max-w-8xl mx-auto py-6 px-4 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
    
      <div className="rounded-xl overflow-hidden shadow-2xl">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
          transitionTime={500}
          onChange={(index) => setActiveSlide(index)}
          className="carousel-container"
          showArrows={true}
          renderArrowPrev={(clickHandler, hasPrev) =>
            hasPrev && (
              <button
                type="button"
                onClick={clickHandler}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white/90 p-2 rounded-r-lg shadow-md transition-all"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
            )
          }
          renderArrowNext={(clickHandler, hasNext) =>
            hasNext && (
              <button
                type="button"
                onClick={clickHandler}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white/90 p-2 rounded-l-lg shadow-md transition-all"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            )
          }
          renderIndicator={(clickHandler, isSelected, index) => (
            <div
              key={index}
              onClick={clickHandler}
              className={`inline-block w-3 h-3 mx-1 rounded-full cursor-pointer transition-all ${
                isSelected ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          )}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="relative h- md:h-[700px] lg:h-[800px]">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.caption}
                  className="object-cover object-fit w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-8 md:px-16 lg:px-24">
                <div className="max-w-lg">
                  <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
                    {slide.caption}
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl mb-6">
                    {slide.description}
                  </p>
                  <button className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-2 px-6 rounded-md shadow-md transition-all duration-300 hover:shadow-lg">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

     
    </div>
  );
}

export default Home;