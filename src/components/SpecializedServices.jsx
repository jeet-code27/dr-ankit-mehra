'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const SpecializedServices = () =>
{
  const [showAll, setShowAll] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) =>
  {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  const carouselItems = [
    {
      img: '/images/skin-rejuvenation-1.webp',
      title: 'Skin Rejuvenation',
      text: 'Skin rejuvenation treatments like chemical peels and lasers reduce wrinkles, dullness, and pigmentation. While mild side effects may occur, preventive care with sunscreen, hydration, and healthy habits helps maintain radiant, youthful skin.',
      url: '/skin-rejuvenation',
    },
    {
      img: '/images/antiaging.webp',
      title: 'Anti-Aging Treatments',
      text: 'Anti-aging treatments address wrinkles, fine lines, and skin elasticity loss through non-invasive methods like injectables and lasers or surgical options, all focused on restoring youthful appearance and improving skin quality.',
      url: '/anti-aging-treatments',
    },
    {
      img: '/images/images_Post-Inflammatory Marks .jpg',
      title: 'Pigmentation Treatment',
      text: 'This treatment improves uneven skin tone and reduces dark spots using chemical peels, laser therapy, and topical solutions, helping restore clearer, brighter, and healthier-looking skin with enhanced radiance and smoothness.',
      url: '/pigmentation-treatment',
    },
    {
      img: '/images/scar-revision-before-after.jpg',
      title: 'Scar Reduction',
      text: 'Scar reduction treatments help minimize scars from acne, injuries, or surgery. Techniques like microneedling, laser therapy, and dermal fillers improve skin texture, smoothness, and appearance, restoring clearer and healthier skin overall.',
      url: '/scar-reduction',
    },
    {
      img: '/images/acne-scar-treatment.png',
      title: 'Acne Treatment',
      text: 'Acne treatments address pimples, blackheads, and clogged pores using topical or oral medications, chemical peels, and laser therapy, aiming to control breakouts, reduce inflammation, and improve overall skin health and clarity.',
      url: '/acne-treatment',
    },
    {
      img: '/images/PRP-result-4-final.jpg',
      title: 'Platelet - Rich Plasma',
      text: 'Platelet - rich plasma(PRP) therapy involves injecting the patient\'s own plasma into the scalp, stimulating hair growth, strengthening follicles, and improving scalp health for natural, effective, and long- lasting hair restoration results.',
      url: '/prp-therapy',
    },
    {
      img: '/images/before-and-after-comparison-of-male-hair-regrowth-showcasing-the-effectiveness-of-a-hair-treatment-solution-photo.jpg',
      title: 'Hair Loss Treatments',
      text: 'Hair loss treatments focus on slowing hair thinning, encouraging regrowth, and boosting density. Options include medications, topical solutions, and PRP therapy, all designed to restore healthier, fuller, and stronger hair naturally.',
      url: '/hair-loss-treatments',
    },
    {
      img: '/images/organic-scalp-pigmentation.png',
      title: 'Scalp Micropigmentation',
      text: 'Scalp Micropigmentation is a cosmetic tattooing method that replicates tiny hair follicles, creating the illusion of thicker, fuller hair and providing a natural-looking solution for hair loss or thinning.',
      url: '/scalp-micropigmentation',
    },
    {
      img: '/images/hair-remover.jpg',
      title: 'Laser Hair Removal',
      text: 'Laser hair removal targets hair follicles to slow or stop unwanted growth, offering long-term results across multiple body areas while enhancing smoothness, confidence, and convenience with minimal maintenance required.',
      url: '/laser-hair-removal',
    },
    {
      img: '/images/Unlocking-the-Basics-of-CO2-Laser-Skin-Resurfacing.jpg',
      title: 'Laser Skin Resurfacing',
      text: 'Skin resurfacing treatments remove damaged layers to reduce wrinkles, sun damage, and uneven tone, while stimulating collagen production, improving texture, and restoring smoother, healthier, and more youthful-looking skin overall.',
      url: '/laser-skin-resurfacing',
    },
    {
      img: '/images/unwanted-tattoo-2.jpg',
      title: 'Laser Tattoo Removal',
      text: 'Laser tattoo removal applies focused energy to break down ink pigments, which the body gradually clears, effectively fading unwanted tattoos and restoring natural skin appearance with minimal risk or scarring.',
      url: '/laser-tattoo-removal',
    }
  ];

  const itemsToShow = showAll ? carouselItems : carouselItems.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl  pb-10 md:text-5xl text-[#a86e54] text-center font-serif w-full mx-auto leading-snug">
        Our Specialized Services
      </h1>

      {/* Mobile Grid View */}
      <div className="w-full max-w-6xl md:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {itemsToShow.map((item, index) => (
            <article key={index} className="flex flex-col border-5 border-gray-100 rounded-xl bg-[#F9F0EB] text-gray-800 h-full overflow-hidden">
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  onLoad={() => handleImageLoad(index)}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-light mb-2">{item.title}</h2>
                <p className="text-sm text-justify mb-4 flex-grow">{item.text}</p>
                <a
                  href={item.url}
                  className="text-[#684E39] border border-blue-500 rounded px-3 py-1 text-sm self-start hover:bg-blue-500 hover:text-white transition-colors duration-150"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>

        {carouselItems.length > 4 && (
          <div className="flex justify-center">
            <button
              className="bg-[#FEF7F8] text-[#BF7F62] border border-[#BF7F62] rounded-lg px-6 py-3 text-base cursor-pointer hover:bg-[#BF7F62] hover:text-white transition-colors duration-150 mt-4"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less Services" : "View More Services"}
            </button>
          </div>
        )}
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:block w-full max-w-6xl">
        <div className="relative h-[450px] overflow-hidden">
          <div className="flex absolute top-0 left-0 h-full animate-marquee hover:animation-pause">
            {carouselItems.map((item, index) => (
              <article key={index} className="flex-shrink-0 w-[280px] mr-8 flex flex-col border-2 border-gray-100 rounded-xl bg-white text-gray-800 h-[450px] overflow-hidden">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    onLoad={() => handleImageLoad(index)}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow overflow-hidden">
                  <h2 className="text-xl font-light mb-2">{item.title}</h2>
                  <p className="text-sm mb-4 flex-grow overflow-hidden">{item.text}</p>
                  <Link
                    href={item.url}
                    className="text-blue-500 border border-blue-500 rounded px-3 py-1 text-sm self-start hover:bg-blue-500 hover:text-white transition-colors duration-150"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-1 * (280px + 2rem) * 6)); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .hover\\:animation-pause:hover {
                    animation-play-state: paused;
                }
            `}</style>
    </div>
  );
};

export default SpecializedServices;