import fs from "fs";
import path from "path";
import ClientBlogPage from "./ClientBlogPage.jsx";

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), "public", "blogs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);
  return blogs;
}

export const metadata = {
  title: "Urology Health Blogs by Dr. Vishnu Agrawal",
  description:
    "Expert articles on urological conditions, treatments, and men's health by Dr. Vishnu Agrawal - Urologist in Ajmer (Rajasthan) India",
  authors: [{ name: "Dr. Vishnu Agrawal" }],
  keywords:
    "urology, kidney health, laparoscopic surgery, urologist, Ajmer, Dr. Vishnu Agrawal, andrology, uro-oncology",
  openGraph: {
    title: "Urology Health Blogs by Dr. Vishnu Agrawal",
    description:
      "Expert articles on urological conditions, treatments, and men's health by Dr. Vishnu Agrawal",
    type: "website",
    url: "https://drvishnuagrawal.in/blog",
  },
  alternates: {
    canonical: "https://drvishnuagrawal.in/blog",
  },
 robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  other: {
    "application-name": "Dr. Vishnu Agrawal - Urology Clinic",
    author: "Dr. Vishnu Agrawal",
    Publisher: "Dr. Vishnu Agrawal",
    "publisher-url": "https://drvishnuagrawal.in",
    generator: "Next.js",
    "theme-color": "#ffffff",
  },
};

export default function BlogPage() {
  const blogs = getBlogs();
  return <ClientBlogPage blogs={blogs} />;
}
