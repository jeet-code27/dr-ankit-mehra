import React from 'react';

const DermatologyBenefits = () =>
{
    return (
        <div className='flex justify-center bg-[#FAF2F0]' >
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#bf7f62"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 21v-2a4 4 0 00-3-3.87M7 21v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        }
                        title="Expert Dermatologist"
                        description="Care by Dr. Meenal Makkar, gold medalist & globally trained."
                    />
                    <BenefitItem
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#bf7f62"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m-6-8h6M9 21h6a2 2 0 002-2v-3H7v3a2 2 0 002 2zM7 7h10V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2z"
                                />
                            </svg>
                        }
                        title="Personalized Treatments"
                        description="Custom plans for your unique skin, hair & aesthetic needs."
                    />
                    <BenefitItem
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#bf7f62"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22c4 0 7-3 7-7H5c0 4 3 7 7 7zM10 10h4v2h-4v-2z" />
                            </svg>
                        }
                        title="Safe & Hygienic"
                        description="Top-tier safety, hygiene, and medical standards."
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#bf7f62"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 10h18M3 6h18M3 14h18M3 18h18"
                                />
                            </svg>
                        }
                        title="Complete Skin & Hair Care"
                        description="Aesthetic, pediatric, and hair treatments—all in one place."
                    />
                    <BenefitItem
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#bf7f62"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 10h-4v4h4v-4zM12 12v6m0-6L8.5 15m3.5-3L15.5 15"
                                />
                            </svg>
                        }
                        title="Positive Patient Reviews"
                        description="Trusted by patients with glowing reviews for exceptional care."
                    />
                    <BenefitItem
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#bf7f62"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-9-9 9 9 0 019 9z"
                                />
                            </svg>
                        }
                        title="Advanced Technology"
                        description="USFDA-approved lasers & cutting-edge techniques."
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