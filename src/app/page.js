import AboutDoctorSection from "@/components/AboutDoctorSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import PatientReviews from "@/components/PatientReviews";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";


export default function Home() {
  return (
 <>
 <HeroSection/>
 <AboutDoctorSection/>
 <ServicesSection/>
 <WhyChooseSection/>
<PatientReviews/>
<div className="bg-gradient-to-b from-white to-blue-50">
<FAQSection/>
</div>
 </>
  );
}
