'use client'
import React from 'react';

const ServiceCards = () =>
{
    return (
        <>
            <style jsx>{`
        .border-gradient {
          border: 2px solid;
          border-radius:10px;
          border-color: #B9826C;
        }

        .overlay-border {
          border: 3px solid;
          border-image: linear-gradient(
              to bottom,
              #aea724 5%,
              forestgreen 35% 65%,
              #aea724 95%
            )
            0 0 0 100%;
        }

        .animate {
          animation-duration: 0.7s;
          animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
          animation-fill-mode: backwards;
        }

        .pop {
          animation-name: pop;
        }

        @keyframes pop {
          0% {
            opacity: 0;
            transform: scale(0.5, 0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1, 1);
          }
        }

        .slide {
          animation-name: slide;
        }

        @keyframes slide {
          0% {
            opacity: 0;
            transform: translate(4em, 0);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0);
          }
        }

        .slide-left {
          animation-name: slide-left;
        }

        @keyframes slide-left {
          0% {
            opacity: 0;
            transform: translate(-40px, 0);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0);
          }
        }

        .slide-up {
          animation-name: slide-up;
        }

        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(3em);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .delay-1 {
          animation-delay: 0.3s;
        }
        .delay-2 {
          animation-delay: 0.6s;
        }
        .delay-3 {
          animation-delay: 0.9s;
        }
        .delay-4 {
          animation-delay: 1.2s;
        }
        .delay-5 {
          animation-delay: 1.5s;
        }
        .delay-6 {
          animation-delay: 1.8s;
        }
        .delay-7 {
          animation-delay: 2.1s;
        }
        .delay-8 {
          animation-delay: 2.4s;
        }

        .wrap {
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .overlay {
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .image-content {
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .overlay-content {
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
        }

        .dots {
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
        }

        .dot {
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
        }

        .text {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .text::-webkit-scrollbar {
          display: none;
        }

        /* Hover effect for desktop */
        .wrap:hover .overlay {
          transform: translateX(-60vmin);
        }

        .wrap:hover .image-content {
          width: 35vmin;
        }

        .wrap:hover .overlay-content {
          border: none;
          transform: translateX(60vmin);
        }

        .wrap:hover .dots {
          transform: translateX(1rem);
        }

        .wrap:hover .dots .dot {
          background: white;
        }

        /* On small screens, cards are always open */
        @media (max-width: 768px) {
          .overlay {
            transform: translateX(-60vmin) !important;
          }
          .image-content {
            width: 35vmin !important;
          }
          .overlay-content {
            border: none !important;
            transform: translateX(60vmin) !important;
          }
          .dots {
            transform: translateX(1rem) !important;
          }
          .dots .dot {
            background: white !important;
          }
        }
      `}</style>
           
            <div className=" pb-15 flex flex-wrap">
                {[1, 2, 3].map((card, i) => (
                    <div
                        key={i}
                        className="wrap animate pop flex flex-nowrap justify-between w-[95vmin] sm:h-[500px] h-[90vmin] my-2 mx-auto border-gradient relative overflow-hidden"
                    >
                        {/* Overlay Side */}
                        <div className="overlay relative  flex w-full h-full p-0 bg-[#F9F0EB] z-10">
                            <div className="overlay-content sm:display-hidden display-blosck flex flex-col justify-between w-[15vmin] w-[220px] h-full overlay-border z-10 animate slide-left delay-2">
                                <p className="animate  slide-left block sm:hidden  font-bold  w-full pop delay-5   mb-10">
                                    Skin <br></br>Treatment
                                     
                                </p>
                                <p className="animate slide-left   w-full pop delay-5   mb-10 hidden sm:block">
                                   Skin  Treatment 
                                    Comprehensive skin care with advanced technology, tailored treatments, and expert dermatology.
                                </p>
                            </div>

                            {/* Image Background */}
                            <div
                                className="image-content absolute top-0 right-0 w-[60vmin] h-full bg-cover bg-center animate slide delay-5"
                                style={{
                                    backgroundImage:
                                        "url('/images/home/portrait-beautiful-woman-preparation-rejuvenation-cosmetology-operation-beauty-salon-view-from-doctor-s-hands-blue-gloves-drawing-face-botox-beauty.jpg')",
                                }}
                            ></div>

                            {/* Dots */}
                            <div className="dots absolute bottom-4 right-8 flex flex-row justify-around items-center w-[70px] h-[4vmin] animate">
                                <div className="dot w-4 h-4 bg-yellow-400 border border-indigo-700 rounded-full animate slide-up delay-6"></div>
                                <div className="dot w-4 h-4 bg-yellow-400 border border-indigo-700 rounded-full animate slide-up delay-7"></div>
                                <div className="dot w-4 h-4 bg-yellow-400 border border-indigo-700 rounded-full animate slide-up delay-8"></div>
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="text grid absolute top-0 right-0 w-[60vmin] h-full p-[3vmin_4vmin] bg-white shadow-[inset_1px_1px_15px_rgba(0,0,0,0.4)] overflow-y-auto">
                            <p className="text-[max(10pt,2.5vmin)] leading-[1.4] text-[#0e390e] mb-6">
                                <img
                                    className="inset max-w-[50%] m-[0.25em_1em_1em_0] rounded-[0.25em] float-left"
                                    src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80"
                                    alt="Oak tree"
                                />
                                Trees are woody perennial plants that are a member of the kingdom{" "}
                                <em>Plantae</em>. All species of trees are grouped by their genus,
                                family, and order. This helps make identifying and studying trees
                                easier.
                            </p>
                            <p className="text-[max(10pt,2.5vmin)] leading-[1.4] text-[#0e390e] mb-6">
                                Apart from providing oxygen for the planet and beauty when they
                                bloom or turn color, trees are very useful. Certain species of
                                hardwood and softwood trees are excellent for timber, making
                                furniture, and paper.
                            </p>
                            <p className="text-[max(10pt,2.5vmin)] leading-[1.4] text-[#0e390e] mb-6">
                                Apart from providing oxygen for the planet and beauty when they
                                bloom or turn color, trees are very useful. Certain species of
                                hardwood and softwood trees are excellent for timber, making
                                furniture, and paper.
                            </p>
                            <p className="text-[max(10pt,2.5vmin)] leading-[1.4] text-[#0e390e] mb-6">
                                Apart from providing oxygen for the planet and beauty when they
                                bloom or turn color, trees are very useful. Certain species of
                                hardwood and softwood trees are excellent for timber, making
                                furniture, and paper.
                            </p>
                            <p className="text-[max(10pt,2.5vmin)] leading-[1.4] text-[#0e390e] mb-6">
                                Apart from providing oxygen for the planet and beauty when they
                                bloom or turn color, trees are very useful. Certain species of
                                hardwood and softwood trees are excellent for timber, making
                                furniture, and paper.
                            </p>
                            <p className="text-[max(10pt,2.5vmin)] leading-[1.4] text-[#0e390e] mb-6">
                                When managed properly, trees are a good source of renewable energy
                                and construction material.
                            </p>
                            <img
                                className="tree place-self-center w-[calc(50px+2vw)]"
                                src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80"
                                alt="Tree illustration"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ServiceCards;
