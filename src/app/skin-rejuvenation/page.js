import React from 'react';
const SkinRejuvenationComponent = () => {
  // 皮肤焕新信息数据
  const skinInfo = {
    title: "Skin Rejuvenation",
    description: "Skin rejuvenation refers to treatments that aim to restore a youthful appearance to the skin by addressing issues like wrinkles, fine lines, uneven texture, and pigmentation. These treatments often involve chemical peels, laser therapy, or other advanced techniques to improve skin quality and radiance.",
    image: "/images/home/young-beautiful-girl-lies-beautician-s-table-receives-procedures-scaled-qwlpr8v570ly32hd4hh19tk1zi61z4x4ivqz277fwg.jpg",
    details: [
      {
        category: "Symptoms",
        items: [
          "Fine lines and wrinkles",
          "Uneven skin texture",
          "Hyperpigmentation",
          "Dull complexion",
          "Loss of elasticity"
        ]
      },
      {
        category: "Causes",
        items: [
          "Aging process",
          "Sun exposure",
          "Environmental factors",
          "Genetics",
          "Lifestyle habits"
        ]
      },
      {
        category: "Risks",
        items: [
          "Temporary redness",
          "Mild swelling",
          "Sensitivity to sun",
          "Possible peeling",
          "Rare: infection or scarring"
        ]
      },
      {
        category: "Prevention",
        items: [
          "Daily sunscreen use",
          "Proper skincare routine",
          "Healthy diet",
          "Adequate hydration",
          "Avoid smoking"
        ]
      }
    ]
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* 主卡片容器 */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* 图片部分 */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <img 
              src={skinInfo.image} 
              alt="Skin rejuvenation treatment showing a woman receiving facial treatment with professional equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{skinInfo.title}</h1>
              <p className="text-lg md:text-xl opacity-90">Advanced Skin Rejuvenation Treatments</p>
            </div>
          </div>
          {/* 内容部分 */}
          <div className="p-6 md:p-8">
            {/* 描述部分 */}
            <div className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed">
                {skinInfo.description}
              </p>
            </div>
            {/* 信息网格部分 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skinInfo.details.map((section, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-indigo-100 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                    <span className="inline-block w-3 h-3 bg-indigo-600 rounded-full mr-3"></span>
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* 行动号召按钮 */}
            <div className="mt-10 text-center">
              <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
        {/* 底部信息部分 */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Skin Rejuvenation Treatments</h3>
              <p className="text-gray-600">All procedures performed by certified dermatologists</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">FDA Approved</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Safe & Effective</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkinRejuvenationComponent;