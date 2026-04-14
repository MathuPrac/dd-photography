import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import PortfolioSection from "./components/PortfolioSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import TeamSection from "./components/TeamSection.jsx";
import TestimonialsSection from "./components/TestimonialsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import FooterSection from "./components/FooterSection.jsx";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold" style={{ color: "var(--foreground)" }}>404</h1>
        <h2 className="mt-4 text-xl font-semibold" style={{ color: "var(--foreground)" }}>
          Page not found
        </h2>
        <p className="mt-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
            style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
