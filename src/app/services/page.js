import AboutHero from "@/components/AboutUsHero";
import ServicesSection from "@/components/ServicesSection";

export default function Services() {
  return (
    <>
        <AboutHero
        // bannerImage="/images/aboutus.webp"
        title="Dr. Vishnu Agrawal"
        subtitle="Expert Urological Care with Compassion and Precision"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' }
        ]}
      />
      <ServicesSection/>
    </>
  );
}