import Image from 'next/image';
import React from 'react';

const DermatologyBenefits = () =>
{
    return (
        <div className='flex justify-center  bg-[#FEF7F8]' >
            <div className='max-w-7xl rounded-[40]' style={{ backgroundColor: '#bf7f62', color: 'white', padding: '40px 20px', fontFamily: "'Georgia', serif" }}>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
                <p style={{ fontWeight: 'bold', fontSize: '18px', margin: '0 0 10px' }}>• Our Benefits</p>
                <h1 style={{ fontSize: '3rem', margin: '0 0 20px' }}>
                    Exceptional dermatology, every step of the way
                </h1>
                <p style={{ fontSize: '1.15rem', fontWeight: '400', margin: '0' }}>
                    Experience personalized care, advanced treatments, and visible results with our expert dermatology services.
                </p>
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '60px',
                    flexWrap: 'wrap',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                {/* Left Benefits */}
                <div style={{ flex: '1', minWidth: '250px' }}>
                    <BenefitItem
                        icon={
                                <Image
                                    src="/images/946369-removebg-preview.png" // put your image inside /public/images
                                    alt="Expert Dermatologist"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                                 
                        }
                        title="Expert Dermatologist"
                            description="Care by Dr. Ankit Mehra, MD (Skin & VD), former Assistant Professor at JLN Medical College with 12+ years of expertise."
                    />
                    <BenefitItem
                        icon={
                                <Image
                                    src="/images/icon-benefit-2.png" // put your image inside /public/images
                                    alt="icon-benefit-2"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                        }
                        title="Personalized Treatments"
                            description="Tailored solutions for acne, pigmentation, scars, hair loss, and cosmetic needs."
                    />
                    <BenefitItem
                        icon={
                                <Image
                                    src="/images/personalized-treatments.png" // put your image inside /public/images
                                    alt="personalized-treatments"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                        }
                        title="Safe & Hygienic"
                            description="Modern clinic setup with top-tier hygiene, medical protocols & patient safety."
                    />
                </div>

                {/* Center Image */}
                <div style={{ borderRadius: '40%', overflow: 'hidden'  , minWidth: '220px', boxShadow: '0 0 20px rgba(0,0,0,0.2)' }}>
                    <img
                        src="/images/our-benefit-image.jpg"
                        alt="Smiling woman"
                        style={{ display: 'block', width: '100%', height: '300px' }}
                    />
                </div>

                {/* Right Benefits */}
                <div style={{ flex: '1', minWidth: '250px' }}>
                    <BenefitItem
                        icon={
                                <Image
                                    src="/images/icon-benefit-4.png" // put your image inside /public/images
                                    alt="icon-benefit-4"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                        }
                        title="Complete Skin & Hair Care"
                            description="Comprehensive treatments including skin rejuvenation, acne, pigmentation, anti-aging, and PRP therapy for hair."
                    />
                    <BenefitItem
                        icon={
                                <Image
                                    src="/images/review1.png" // put your image inside /public/images
                                    alt="review1"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                        }
                        title="Positive Patient Reviews"
                        description="Trusted by patients with glowing reviews for exceptional care."
                    />
                    <BenefitItem
                        icon={
                                <Image
                                    src="/images/icon-benefit-6.png" // put your image inside /public/images
                                    alt="icon-benefit-6"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                        }
                        title="Advanced Technology"
                            description=" Expert in PRP, microneedling & latest cosmetic dermatology techniques."
                    />
                </div>
            </div>
        </div>
        </div>
    );
};

const BenefitItem = ({ icon, title, description }) =>
{
    return (
        <div style={{ display: 'flex', alignItems: 'center', margin: '25px 0' }}>
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '15px',
                    color: '#bf7f62',
                    flexShrink: 0,
                }}
            >
                {icon}
            </div>
            <div style={{ fontSize: '1rem' }}>
                <h3 style={{ margin: '0 0 5px 0', fontWeight: '600' }}>{title}</h3>
                <p style={{ margin: 0, lineHeight: '1.4' }}>{description}</p>
            </div>
        </div>
    );
};

export default DermatologyBenefits;