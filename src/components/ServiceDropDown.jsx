import Link from "next/link";
import { useState, useEffect } from "react";

const conditions = [
  { label: "Prostate Surgery (18.5 French)", slug: "prostate-surgery" },
  { label: "Renal Stone", slug: "renal-stone" },
  { label: "Ureteric Stone", slug: "ureteric-stone" },
  { label: "Bladder Stone", slug: "bladder-stone" },
  { label: "Bladder Tumor", slug: "bladder-tumor" },
  { label: "Prostate Disease", slug: "prostate-disease" },
  { label: "Urinary Disease", slug: "urinary-disease" },
  { label: "Male Infertility", slug: "male-infertility" },
  { label: "Andrology Problems", slug: "andrology-problems" },
  { label: "Male Sexual Problems", slug: "male-sexual-problems" },
  { label: "All Disease-Related Urology", slug: "all-disease-related-urology" },
  {
    label: "Urinary Incontinence Treatment",
    slug: "urinary-incontinence-treatment",
  },
  {
    label: "Overactive Bladder Treatment",
    slug: "overactive-bladder-treatment",
  },
  { label: "Urinary Fistula (UVF, VVF)", slug: "urinary-fistula" },
  { label: "Urethroplasty", slug: "urethroplasty" },
  { label: "Hypospadias / UDT", slug: "hypospadias-udt" },
];

export default function ConditionsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Toggle dropdown visibility for mobile click
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle mouse enter for desktop hover
  const handleMouseEnter = () => {
    if (!isMobileView) {
      setIsOpen(true);
    }
  };

  // Handle mouse leave for desktop hover
  const handleMouseLeave = () => {
    // Only close on mouse leave if not in mobile view
    // On mobile, the dropdown closes only when a link is clicked
    if (!isMobileView) {
      // Changed this line
      setIsOpen(false);
    }
  };

  // Close dropdown when a link is clicked (important for mobile)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" onMouseEnter={handleMouseEnter}>
      {/* Trigger button for dropdown */}
      <div className=" flex flex-row lg:justify-center items-center">
        <Link
          href={`/services`}
          className="text-gray-800 font-medium  mr-3  hover:text-[#00796B] transition-colors flex items-center gap-1"
        >
          SERVICES
        </Link>

        <img
          onClick={toggleDropdown}
          src="/images/chevron-down.png"
          alt="Toggle Dropdown"
          className={`  w-4 h-4  transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {/* Dropdown Menu */}
      <div
        onMouseLeave={handleMouseLeave}
        className={`absolute left-0 top-full mt-1 w-64 bg-white/70 backdrop-blur-md rounded-md shadow-md z-50 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible block" // Always block when open
            : "opacity-0 invisible hidden" // Always hidden when closed, regardless of screen size
        }`}
      >
        <ul>
          {conditions.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/services/${item.slug}`}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:bg-white hover:text-[#00796B] transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
