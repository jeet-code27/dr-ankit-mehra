'use client'
import HeroSection from "@/components/HeroSection";
import Masonry from "@/components/Masonry";
 
import { useState } from "react";

const items = [
  {
    id: "1",
    img: "/images/diseases/a1.jpg",
    title: "Acne Treatment",
    description: "Before and after acne treatment",
    height: 400,
  },
  {
    id: "2",
    img: "/images/diseases/a2.jpg",
    title: "Skin Rejuvenation",
    description: "Laser skin rejuvenation results",
    height: 400,
  },
  {
    id: "3",
    img: "/images/diseases/a3.jpg",
    title: "Scar Reduction",
    description: "Advanced scar removal therapy",
    height: 800,
  },
  {
    id: "4",
    img: "/images/diseases/a4.jpg",
    title: "Pigmentation Correction",
    description: "Hyperpigmentation treatment",
    height: 600,
  },
  {
    id: "5",
    img: "/images/diseases/a5.jpg",
    title: "Wrinkle Reduction",
    description: "Anti-aging treatment results",
    height: 600,
  },
  {
    id: "6",
    img: "/images/diseases/a6.jpg",
    title: "Rosacea Treatment",
    description: "Before and after rosacea therapy",
    height: 700,
  },
  {
    id: "7",
    img: "/images/diseases/a7.jpg",
    title: "Mole Removal",
    description: "Non-invasive mole removal",
    height: 600,
  },
  {
    id: "8",
    img: "/images/diseases/a8.jpg",
    title: "Skin Tightening",
    description: "Non-surgical skin tightening",
    height: 600,
  },
  // ... more items
];
 const slides = [
    {
      id: 1,
      image: '/images/diseases/m1.jpg',
    },
    {
      id: 2,
      image: '/images/diseases/m2.jpg',
    },
    {
      id: 3,
      image: '/images/diseases/m3.jpg',
    },
    {
      id: 4,
      image: '/images/diseases/m4.jpg',
    },
       {
      id: 5,
      image: '/images/diseases/m5.jpg',
    },
       {
      id: 6,
      image: '/images/diseases/m6.jpg',
    },
  ];
export default function Gallery2() {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = filter === "all" 
    ? items 
    : items.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <HeroSection  slides={slides}/>
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-4">
            Before & After: See the Difference
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our gallery of transformative treatments and see the remarkable results achieved by our patients.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["all", "acne", "scar", "pigmentation", "wrinkle"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-indigo-100 border border-indigo-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-4 md:p-6">
          <Masonry
            items={filteredItems}
            animateFrom="bottom"
            blurToFocus={true}
            colorShiftOnHover={true}
            scaleOnHover={true}
            hoverScale={0.95}
            duration={0.6}
            stagger={0.05}
            onItemClick={setSelectedItem}
          />
        </div>

        {/* Item Detail Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setSelectedItem(null)}>
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img 
                  src={selectedItem.img} 
                  alt={selectedItem.title} 
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <button 
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
                  onClick={() => setSelectedItem(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedItem.title}</h3>
                <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    View Treatment Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
 
        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 max-w-3xl mx-auto shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready for Your Own Transformation?</h2>
            <p className="text-indigo-100 mb-6 max-w-xl mx-auto">
              Schedule a consultation with our specialists to discuss your personalized treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors shadow-md">
                Book Appointment
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}