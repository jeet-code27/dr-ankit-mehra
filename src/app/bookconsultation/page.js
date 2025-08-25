import React from 'react';

const AntiAgingTreatmentComponent = () => {
  // 抗衰老治疗信息数据
  const antiAgingInfo = {
    title: "Anti-Aging Treatments",
    description: "Anti-aging treatments are designed to combat the visible signs of aging, such as wrinkles, fine lines, and loss of skin elasticity. These procedures range from non-invasive techniques like injectables and laser therapy to more comprehensive solutions aimed at restoring a more youthful appearance.",
    image: "/images/home/anti-aging-treatment.jpg",
    details: [
      {
        category: "Symptoms",
        items: [
          "Fine lines and wrinkles",
          "Loss of skin elasticity",
          "Age spots and pigmentation",
          "Sagging skin",
          "Dull complexion",
          "Uneven skin texture"
        ]
      },
      {
        category: "Causes",
        items: [
          "Natural aging process",
          "Sun exposure (photoaging)",
          "Genetic factors",
          "Lifestyle choices (smoking, diet)",
          "Environmental pollutants",
          "Hormonal changes"
        ]
      },
      {
        category: "Risks",
        items: [
          "Temporary redness",
          "Mild swelling",
          "Sensitivity to sunlight",
          "Possible bruising",
          "Rare: infection or scarring"
        ]
      },
      {
        category: "Prevention",
        items: [
          "Daily sunscreen use",
          "Healthy diet rich in antioxidants",
          "Adequate hydration",
          "Regular skincare routine",
          "Avoiding smoking",
          "Getting enough sleep"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* 主卡片容器 */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* 图片部分 */}
          <div className="relative h-96 overflow-hidden">
            <img 
              src={antiAgingInfo.image} 
              alt="Anti-aging treatment showing a woman receiving professional cosmetic procedure"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{antiAgingInfo.title}</h1>
              <p className="text-lg md:text-xl opacity-90">Advanced Anti-Aging Solutions</p>
            </div>
          </div>

          {/* 内容部分 */}
          <div className="p-8">
            {/* 描述部分 */}
            <div className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed">
                {antiAgingInfo.description}
              </p>
            </div>

            {/* 信息网格部分 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {antiAgingInfo.details.map((section, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-purple-100"
                >
                  <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>

        {/* 额外信息部分 */}
        <div className="mt-8 text-center text-gray-600">
          <p>Professional anti-aging treatments performed by certified dermatologists</p>
        </div>
      </div>
    </div>
  );
};

export default AntiAgingTreatmentComponent;