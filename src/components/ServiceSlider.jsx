'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const services = [
    { name: 'Facial Treatments', image: 'https://images.unsplash.com/photo-1601048383269-8e94d15c540b' },
    { name: 'Anti-Aging', image: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143' },
    { name: 'Nail Disorders', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d' },
    { name: 'Hair Care', image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30' },
    { name: 'Makeup', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c' },
    { name: 'Skin Therapy', image: 'https://images.unsplash.com/photo-1589998059171-988d887df646' },
];

const ServiceSlider = () =>
{
    return (
        <>
            <div className='bg-[#F7F0F2]'>
         <div class="flex    justify-center items-center mb-4 space-x-2">
    <div class="w-2.5 h-2.5 rounded-full bg-[#a86e54]"></div>
    <p class="text-sm text-[#a86e54] font-light">Our Services</p>
  </div>

 
  <h1 class="text-4xl md:text-5xl text-[#a86e54] text-center font-serif max-w-4xl mx-auto leading-snug mb-6">
    Comprehensive dermatology services <br /> for every skin need
  </h1>

 
            <p class="text-md md:text-lg text-[#717287] text-center max-w-xl mx-auto mb-16">
    From preventive care to specialized treatments, our wide range of services is  
    designed to support your health at every stage.
  </p>

        <div className='flex justify-center  '>
        <div className=" max-w-7xl   py-10">
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    640: { slidesPerView: 2 },  // 2 on medium screens
                    1024: { slidesPerView: 3 }, // 3 on large screens
                }}
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-60 object-fit: cover;
"  // ✅ no cropping
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-center">{service.name}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </div>
            </div>
        </>
    );
};

export default ServiceSlider;
