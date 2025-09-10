'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
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
      <style jsx>{`
        .services-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .service-card {
          display: flex;
          flex-direction: column;
          border: 5px solid rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          background: #F9F0EB;
          color: rgb(49, 65, 88);
          height: 100%;
          overflow: hidden;
        }
        
        .service-card .img-container {
          width: 100%;
          height: 200px;
          overflow: hidden;
          position: relative;
          background-color: #F9F0EB; /* Placeholder background */
          aspect-ratio: 16/9; /* Maintain consistent aspect ratio */
        }
        
        .service-card img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          display: block; /* Prevent inline spacing issues */
        }
        
        .service-card img.loaded {
          opacity: 1;
        }
        
        .service-card-content {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          color: black;
        }
        
        .service-card h2 {
          font-size: 1.2rem;
          font-weight: 300;
          margin: 0 0 0.5rem 0;
        }
        
        .service-card p {
          margin: 0 0 1rem 0;
          font-size: 0.9rem;
          flex-grow: 1;
        }
        
        .service-card a {
          text-decoration: none;
          text-transform: lowercase;
          border: 1px solid rgb(0, 132, 209);
          color: rgb(0, 132, 209);
          border-radius: 3px;
          padding: 0.25rem 0.5rem;
          align-self: flex-start;
          transition: 150ms ease-in-out;
        }
        
        .service-card a:hover,
        .service-card a:focus-visible {
          background-color: rgb(0, 132, 209);
          color: white;
          outline: none;
        }
        
        .view-more-btn {
          background-color:  #FEF7F8;
          color:  #BF7F62;
          border: 1px solid #BF7F62;
          border-radius: 5px;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 150ms ease-in-out;
          margin-top: 1rem;
        }
        
        
        
        /* Dark mode styles */
        .dark .service-card {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border-color: rgba(255, 255, 255, 0.15);
        }
        
        .dark .service-card a {
          color: white;
          border-color: white;
        }
        
        .dark .service-card a:hover,
        .dark .service-card a:focus-visible {
          background-color: white;
          color: rgb(0, 132, 209);
        }
        
        /* Carousel styles for larger screens */
        @media (min-width: 768px) {
          .carousel-container {
            position: relative;
            width: 100%;
            max-width: 1200px;
            height: 450px;
            overflow: hidden;
          }
          
          .carousel {
            display: flex;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            animation: marquee 40s linear infinite;
          }
          
          .carousel:hover {
            animation-play-state: paused;
          }
          
          .carousel-item {
            flex: 0 0 280px;
            margin-right: 2rem;
            display: flex;
            flex-direction: column;
            border: 2px solid rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            background: white;
            color: rgb(49, 65, 88);
            height: 450px;
            overflow: hidden;
          }
          
          .carousel-item .img-container {
            width: 100%;
            height: 200px;
            overflow: hidden;
            position: relative;
            background-color: #f0f0f0; /* Placeholder background */
            aspect-ratio: 16/9; /* Maintain consistent aspect ratio */
          }
          
          .carousel-item img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            display: block; /* Prevent inline spacing issues */
          }
          
          .carousel-item img.loaded {
            opacity: 1;
          }
          
          .carousel-item-content {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            overflow: hidden;
          }
          
          .carousel-item h2 {
            font-size: 1.2rem;
            font-weight: 300;
            margin: 0 0 0.5rem 0;
          }
          
          .carousel-item p {
            margin: 0 0 1rem 0;
            font-size: 0.9rem;
            flex-grow: 1;
            overflow: hidden;
          }
          
          .carousel-item a {
            text-decoration: none;
            text-transform: lowercase;
            border: 1px solid rgb(0, 132, 209);
            color: rgb(0, 132, 209);
            border-radius: 3px;
            padding: 0.25rem 0.5rem;
            align-self: flex-start;
            transition: 150ms ease-in-out;
          }
          
          .carousel-item a:hover,
          .carousel-item a:focus-visible {
            background-color: rgb(0, 132, 209);
            color: white;
            outline: none;
          }
          
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-1 * (280px + 2rem) * 6)); }
          }
        }
      `}</style>
      <h1 className="text-4xl pb-10 md:text-5xl text-[#a86e54] text-center font-serif  w-full mx-auto leading-snug  ">
        Our Specialized Services
      </h1>
      <div className="services-container md:hidden">
        <div className="services-grid">
          {itemsToShow.map((item, index) => (
            <article key={index} className="service-card">
              <div className="img-container">
                <img
                  src={item.img}
                  alt={item.title}
                  onLoad={() => handleImageLoad(index)}
                  className={loadedImages[index] ? 'loaded' : ''}
                />
              </div>
              <div className="service-card-content">
                <h2  >{item.title}</h2>
                <p>{item.text}</p>
                <a href={item.url}>Read more</a>
              </div>
            </article>
          ))}
        </div>
        {carouselItems.length > 4 && (
          <div className='flex justify-center'>
            <button
              className="view-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less Services" : "View More Services"}
            </button>
          </div>
        )}
      </div>
      {/* For medium screens and larger - show carousel */}
      <div className="hidden md:block carousel-container">
        <div className="carousel">
          {carouselItems.map((item, index) => (
            <article key={index} className="carousel-item">
              <div className="img-container">
                <img
                  src={item.img}
                  alt={item.title}
                  onLoad={() => handleImageLoad(index)}
                  className={loadedImages[index] ? 'loaded' : ''}
                />
              </div>
              <div className="carousel-item-content">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <Link href={item.url} className='hover:text-blue-500  '>Read more</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SpecializedServices;