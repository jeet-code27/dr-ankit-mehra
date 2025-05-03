import AboutHero from "@/components/AboutUsHero";
import ContactPage from "@/components/ContactPage";

export default function Contact() { 
    return ( 
        <>
         <AboutHero
        // bannerImage="/images/aboutus.webp"
        title="Dr. Vishnu Agrawal"
        subtitle="Expert Urological Care with Compassion and Precision"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact Us', path: '/contact' }
        ]}
      />
      <ContactPage/>
        </>
    )
}