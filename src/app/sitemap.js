export default function sitemap() {
  const baseUrl = "https://drankitmehra.com";
  const currentDate = new Date();

  return [
    // Main Pages - High Priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bookconsultation`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    
    {
      url: `${baseUrl}/skin-treatments`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/skin-rejuvenation`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/anti-aging-treatments`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pigmentation-treatment`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/scar-reduction`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/acne-treatment`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hair-treatments-2`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/prp-therapy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hair-loss-treatments`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/scalp-micropigmentation`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/laser-treatments`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/laser-hair-removal`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/laser-skin-resurfacing`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
     {
      url: `${baseUrl}/laser-tattoo-removal`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
        {
      url: `${baseUrl}/gallery-2`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
      
    // All Blog Posts - High Priority (0.9)
    {
      url: `${baseUrl}/blogs/common-skin-problems-and-home-remedies`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs/hair-fall-treatment-in-ajmer-best-hair-specialist-for-hair-loss`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs/laser-treatment-for-acne-scars-what-to-expect`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs/top-skin-treatments-to-achieve-a-natural-glow-expert-advice-by-dr-ankit-mehra-md-skin-vd`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs/best-skin-care-clinic-in-ajmer`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs/daily-skin-care-routine-for-oily-dry-and-sensitive-skin-types`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs/benefits-of-laser-treatments-skin-rejuvenation`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs/skin-problems-causes-signs-and-treatment-options`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs/hair-loss-common-causes-by-dr-ankit-mehra-best-dermatologist-in-ajmer`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs/best-dermatologist-in-ajmer-for-healthy-glowing-skin`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs/best-skin-care-doctor-in-ajmer-dr-ankit-mehra-dermatologist`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs/top-dermatology-clinic-in-ajmer-best-dermatologist-dr-ankit-mehra`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
     {
      url: `${baseUrl}/blogs/skin-care-treatments-best-dermatologist-in-ajmer-dr-ankit-mehra`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
        {
      url: `${baseUrl}/blogs/best-dermatologist-skin-specialist-in-ajmer-dr-ankit-mehra`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
        {
      url: `${baseUrl}/blogs/how-to-find-the-best-dermatologist-in-ajmer-dr-ankit-mehra`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
        {
      url: `${baseUrl}/blogs/understanding-vitiligo-causes-symptoms-and-treatment-options`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
     {
      url: `${baseUrl}/blogs/best-skin-treatments-for-glowing-skin-in-2025`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
     {
      url: `${baseUrl}/blogs/identify-skin-type-care-properly`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
      {
      url: `${baseUrl}/blogs/seasonal-skincare-tips-protect-skin-in-winter`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
         
  ];
}
