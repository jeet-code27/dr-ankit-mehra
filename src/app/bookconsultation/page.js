import BookingSystem from "@/components/BookingPage";

export const metadata = {
  title: 'Book Urology Consultation Online - Dr. Vishnu Agrawal, Ajmer',
  description: 'Schedule an appointment with leading urologist Dr. Vishnu Agrawal for kidney stone, prostate, and male health treatments. Fast, secure online booking available 24/7.',
  keywords: [
    'urologist appointment Ajmer',
    'online booking kidney stone doctor',
    'prostate specialist consultation',
    'book Dr. Vishnu Agrawal',
    'urgent urology appointment',
    'telemedicine urology consultation',
    'best urologist booking Rajasthan',
    'e-consult urology problems',
    'schedule urology visit',
    'digital appointment system'
  ],
  openGraph: {
    title: 'Book Urology Consultation Online | Dr. Vishnu Agrawal Clinic',
    description: 'Secure online appointment system for kidney stone treatment, prostate care and male health solutions at our Ajmer clinic',
    url: 'https://drvishnuagrawal.in/bookconsultation',
    images: [
      {
        url: '/images/booking-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Online Booking System - Dr. Vishnu Agrawal Urology Clinic',
      },
    ],
  },
  alternates: {
    canonical: 'https://drvishnuagrawal.in/bookconsultation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Urologist Appointment Online | Ajmer Rajasthan',
    description: 'Easy digital scheduling for kidney stone, prostate and urinary health consultations with expert urologist',
    images: ['/images/booking-twitter-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
   other: {
    'application-name': 'Dr. Vishnu Agrawal Urology Clinic',
    'author': 'Dr. Vishnu Agrawal',
    'publisher': 'Dr. Vishnu Agrawal',
    'publisher-url': 'https://drvishnuagrawal.in',
    'generator': 'Next.js',
    'theme-color': '#ffffff',
  },
};

export default function BookConsultation() {
  return (
    <div className="bg-gray-50">
     <BookingSystem/>
    </div>
  );
}